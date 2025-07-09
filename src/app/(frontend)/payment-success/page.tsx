import Link from 'next/link'
import React from 'react'
import Stripe from 'stripe'

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  let status: 'succeeded' | 'pending' | 'unknown' = 'unknown'

  const { session_id: sessionId } = await searchParams

  if (sessionId) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2025-06-30.basil' })
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['payment_intent'],
      })
      const paymentIntent = session.payment_intent as Stripe.PaymentIntent

      if (paymentIntent.status === 'succeeded') status = 'succeeded'
      else if (paymentIntent.status === 'processing' || paymentIntent.status === 'requires_action')
        status = 'pending'
      else status = 'unknown'
    } catch {
      status = 'unknown'
    }
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {status === 'succeeded' && (
        <>
          <meta httpEquiv="refresh" content="5;url=/" />
          <h2 className="text-primary-red">Payment Successful!</h2>
          <p className="mt-5 text-xl tracking-[0.14em]">
            Thank you! Your payment has been processed successfully.
          </p>
        </>
      )}
      {status === 'pending' && (
        <>
          <meta httpEquiv="refresh" content="5;url=/" />
          <h2 className="text-primary-red">Payment Pending</h2>
          <p className="mt-5 text-xl tracking-[0.14em]">
            Thank you! Your payment is being processed and may take a few days. We will email you
            once the payment is confirmed.
          </p>
        </>
      )}
      {status === 'unknown' && (
        <>
          <h2 className="text-primary-red">Payment Status Unknown</h2>
          <p className="mt-5 text-xl tracking-[0.14em]">
            {`We couldn't verify your payment. Please contact us to resolve this issue.`}
          </p>
        </>
      )}
      <p className="mt-5 text-xl text-center tracking-[0.14em]">
        You’ll be redirected shortly. <br />
        If nothing happens,{' '}
        <Link href="/" className="text-[#FFC857]">
          click here
        </Link>{' '}
        to continue.
      </p>
    </div>
  )
}
