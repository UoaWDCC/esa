import Stripe from 'stripe'
import payload from 'payload'
import { signupSchema } from '@/lib/zod/schema/signupInput'
import { Member } from '@/payload-types'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export const config = {
  api: { bodyParser: false },
}

export async function POST(req: Request) {
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return new Response('Missing signature', { status: 400 })
  }

  let event: Stripe.Event

  try {
    const rawBody = await req.arrayBuffer()

    event = stripe.webhooks.constructEvent(
      Buffer.from(rawBody).toString(),
      signature,
      webhookSecret
    )
  } catch (err: any) {
    console.error('[Stripe Webhook] Signature verification failed:', err.message)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const metadata = session.metadata

    const parseResult = signupSchema.safeParse({
      ...metadata,
    })

    if (!parseResult.success) {
      console.error('[Stripe Webhook] Validation failed:', parseResult.error.format())
      return new Response('Invalid member data', { status: 400 })
    }

    const memberData: Omit<Member, 'id' | 'createdAt' | 'updatedAt'> = {
      timestamp: new Date(parseResult.data.timestamp).toISOString(),
      firstName: parseResult.data.firstName,
      lastName: parseResult.data.lastName,
      gender: parseResult.data.gender || 'prefer not to say',
      email: parseResult.data.email,
      studentID: parseResult.data.studentID || '',
      upi: parseResult.data.upi || '',
      yearOfStudy: parseResult.data.yearOfStudy || '',
      ethnicity: parseResult.data.ethnicity || '',
      convincedByCommitteeMember: parseResult.data.convincedByCommitteeMember || '',
      membershipCardNumber: parseResult.data.membershipCardNumber || '',
      membershipPayment: parseResult.data.membershipPayment || '',
      paymentScreenshotLink: parseResult.data.paymentScreenshotLink || '',
      referrerName: parseResult.data.referrerName || '',
      notes: parseResult.data.notes || '',
    }

    try {
      await payload.create({
        collection: 'members',
        data: memberData,
      })

      return new Response(JSON.stringify({ received: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (err: any) {
      console.error('[Stripe Webhook] Member creation failed:', err.message)
      return new Response('Failed to create member', { status: 500 })
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
