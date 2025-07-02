import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

export async function POST(req: Request) {
  try {
    const signupData = await req.json();

    // Use req.nextUrl.origin for absolute URLs (app router)
    // Fallback to env var if needed
    const origin = (req as any).nextUrl?.origin || process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'nzd',
          product_data: {
            name: 'ESA Year Membership',
          },
          unit_amount: 500, // NZD 5.00
        },
        quantity: 1,
      }],
      metadata: {
        ...signupData,
      },
      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/signup`,
    });

    return Response.json({ url: session.url });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Stripe session creation failed.' }), { status: 500 });
  }
}