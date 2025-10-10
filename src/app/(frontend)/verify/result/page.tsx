'use client';

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function VerifyResultsPage() {
    const searchParams = useSearchParams();
    const status = searchParams.get('status');

    // Go back to home after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/';
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
                {status === 'success' ? (
                    <>
                        <h1 className="text-2xl mb-4 text-primary-red">
                            Verification Successful
                        </h1>
                        <p className="mb-6">
                            Your email has been successfully verified. You can now log in using your Google account.
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl mb-4 text-primary-red">
                            Verification Failed
                        </h1>
                        <p className="mb-6">
                            The verification link is invalid or has expired. Please try logging in again to receive a new verification email.
                        </p>
                    </>
                )}
                <a href="/" className="mt-6 text-primary underline">
                    Return to Home
                </a>
            </div>  
    );
}

