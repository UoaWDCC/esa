import FrogBackground from '@/components/backgrounds/FrogBackground';
import Link from 'next/link';
import React from 'react';
import Stripe from 'stripe';

// T3 env
import { env } from 'config/serverEnv';

export default async function PaymentSuccessPage({
    searchParams,
}: {
    searchParams: { session_id?: string };
}) {
    let status: 'succeeded' | 'pending' | 'unknown' = 'unknown';

    const { session_id: sessionId } = await searchParams;

    if (sessionId) {
        try {
            const stripe = new Stripe(env.STRIPE_SECRET_KEY!, { apiVersion: '2025-06-30.basil' });
            const session = await stripe.checkout.sessions.retrieve(sessionId, {
                expand: ['payment_intent'],
            });
            const paymentIntent = session.payment_intent as Stripe.PaymentIntent;

            if (paymentIntent.status === 'succeeded') status = 'succeeded';
            else if (
                paymentIntent.status === 'processing' ||
                paymentIntent.status === 'requires_action'
            )
                status = 'pending';
            else status = 'unknown';
        } catch {
            status = 'unknown';
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <FrogBackground />
            {status === 'succeeded' && (
                <>
                    <meta httpEquiv="refresh" content="5;url=/" />
                    <h3 className="text-primary-red">Payment Successful!</h3>
                    <p className="mt-5 text-xl tracking-[0.14em]">
                        Thank you! Your payment has been processed successfully.
                    </p>
                </>
            )}
            {status === 'pending' && (
                <>
                    <meta httpEquiv="refresh" content="5;url=/" />
                    <h3 className="text-primary-red">Payment Pending</h3>
                    <p className="mt-5 text-xl tracking-[0.14em]">
                        Thank you! Your payment is being processed and may take a few days. We will
                        email you once the payment is confirmed.
                    </p>
                </>
            )}
            {status === 'unknown' && (
                <>
                    <h3 className="text-primary-red">Payment Status Unknown</h3>
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
    );
}
