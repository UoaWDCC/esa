import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

export async function POST(req: Request) {
  try {
    const signupData = await req.json()

    // Use req.nextUrl.origin for absolute URLs (app router)
    // Fallback to env var if needed
    // TODO: Change this t onot require .env probably
    const origin =
      (req as any).nextUrl?.origin || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'nzd',
            product_data: {
              name: 'ESA Year Membership',
            },
            unit_amount: 500, // NZD 5.00. Will need to change this to account for the tax
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        metadata: {
          ...signupData,
        },
      },
      customer_email: signupData.email,
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/signup`,
    })

    return Response.json({ url: session.url })
  } catch (error: any) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Stripe session creation failed.' }), {
      status: 500,
    })
  }
}
