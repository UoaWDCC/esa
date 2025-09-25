'use client';

import { CiLogin } from 'react-icons/ci';
import { useState, useEffect } from 'react';

export default function LoginButton() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Show button only when at the very top of the page (within 50px)
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition <= 50);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Check initial position
        handleScroll();

        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div 
            className="z-[9999]" 
            style={{ 
                position: 'fixed',
                top: '1rem',
                right: '1rem',
                zIndex: 9999,
                pointerEvents: 'auto'
            }}
        >
            <button 
                className="w-14 h-14 rounded-full bg-primary-grey-light flex items-center justify-center text-primary-white hover:text-accent transition-colors shadow-lg border border-primary-grey"
                style={{
                    position: 'relative'
                }}
            >
                <CiLogin size={28} />
            </button>
        </div>
    );
}