'use client'

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function VerifyPage() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    useEffect(() => {
        if (!email || !token) {
            router.replace('/');
        } else if (token !== "notsent") {
            sendVerificationEmail();
        }
    }, []);

    const sendVerificationEmail = async () => {
        try {
            await fetch('/api/send/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, token: token }),
            });
        } catch (error) {
            console.error('Error sending verification email:', error);
        }
    }

    // If token == "notsent", show a message saying that the email was not sent
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
            <h1 className="text-2xl mb-4 text-primary-red">
                {token == "notsent" ? "Verification Email Not Sent" : "Verification Email Sent"}
            </h1>
            <p className="mb-6">
                {token == "notsent" ? "Please wait a few minutes before attempting to send another verification email." : "We've sent a verification email to your inbox. Please check your email and follow the instructions to link your Google account!"}
            </p>
            <p className="text-sm ">
                {token == "notsent" ? "" : "Didn't receive the email? Check your spam folder or logging in again."}
            </p>

            <a href="/" className="mt-6 text-primary underline">
                Return to Home
            </a>
        </div>
    );
}