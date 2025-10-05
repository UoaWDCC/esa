'use client';

import { LogIn } from 'lucide-react';

export default function LoginButton() {
    return (
        <div className="absolute top-4 right-4 z-[70]">
            <button 
                className="relative w-15 h-15 rounded-full flex items-center justify-center text-primary-white hover:text-primary-grey transition-colors hover:cursor-pointer bg-primary-grey-light"
            >
                <LogIn className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
            </button>
        </div>
    );
}