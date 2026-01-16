'use client';

import { LogIn, UserRound } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginButton() {
    const { status } = useSession();
    const router = useRouter();

    return (
        <div className="absolute top-4 right-4 z-[70]">
            <button 
                className={"relative w-15 h-15 rounded-full flex items-center justify-center hover:cursor-pointer bg-primary-grey-light " + (status === 'loading' ? "disabled" : "")}
                onClick={() => {
                    if (status === 'authenticated') {
                        router.push('/profile');
                    } else {
                        signIn('google');
                    }
                }}
            >
                { status === 'authenticated' ?
                    <UserRound className="w-8 h-8 transition-transform duration-200 hover:scale-110" strokeWidth={1.8}/> :
                    <LogIn className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                }
            </button>
        </div>
    );
}