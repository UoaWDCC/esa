import Stripe from 'stripe'
import { signupSchema } from '@/lib/zod/schema/signupInput'
import { Member } from '@/payload-types'
import { getPayload } from 'payload'
import payloadConfig from '@payload-config'

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
    // Read the raw body from the request
    const rawBody = await req.arrayBuffer()

    // Construct the event using the raw body and signature
    event = stripe.webhooks.constructEvent(
      Buffer.from(rawBody).toString(),
      signature,
      webhookSecret,
    )
  } catch (err: any) {
    console.error('[Stripe Webhook] Signature verification failed:', err.message)
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
  }

  // Handle the event type for checkout session completion
  if (event.type === 'payment_intent.succeeded') {
    const session = event.data.object as Stripe.PaymentIntent
    const metadata = session.metadata

    // Make sure metadata exists
    if (!metadata) {
      console.error('[Stripe Webhook] Missing metadata')
      return new Response('Missing metadata', { status: 400 })
    }

    // Validate and parse the metadata using the signup schema, ensuring the timestamp is a date object - not a string
    const parseResult = signupSchema.safeParse({
      ...metadata,
      timestamp: new Date(metadata.timestamp),
    })

    if (!parseResult.success) {
      console.error('[Stripe Webhook] Validation failed:', parseResult.error.format())
      return new Response('Invalid member data', { status: 400 })
    }

    // Cast the parsed data to the Member type, excluding the id and timestamps
    // This is safe because we validated the data against the schema
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
      // Store the member data in Payload
      const payload = await getPayload({ config: payloadConfig })

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
