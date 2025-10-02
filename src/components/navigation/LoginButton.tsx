'use client';

import { LogIn } from 'lucide-react';

export default function LoginButton() {
    return (
        <div className="fixed top-4 right-14 sm:right-4 md:right-6 lg:right-8 xl:right-12 z-50">
            <button 
                className="w-18 h-18 sm:w-14 sm:h-14 rounded-full bg-primary-grey-light flex items-center justify-center text-primary-white hover:text-accent hover:cursor-pointer transition-all duration-200 hover:scale-105 border-none outline-none z-[60]"
            >
                <LogIn className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 hover:scale-110" />
            </button>
        </div>
    );
}