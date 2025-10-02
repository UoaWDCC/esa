'use client';

import { LogIn } from 'lucide-react';

export default function LoginButton() {
    return (
        <div className="absolute top-4 right-4 z-[70]">
            <button 
                className="w-18 h-18 sm:w-14 sm:h-14 rounded-full bg-primary-grey-light flex items-center justify-center text-primary-white hover:text-accent hover:cursor-pointer transition-all duration-200 hover:scale-105 border-none outline-none"
            >
                <LogIn className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 hover:scale-110" />
            </button>
        </div>
    );
}