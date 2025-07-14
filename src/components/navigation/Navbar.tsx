'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex mt-5 z-50 absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-black font-roboto-mono text-[1rem] text-primary-white justify-between items-center bg-primary-grey-light w-[90%] max-w-[1100px] px-8 lg:px-28 rounded-full gap-4 py-3">
                <Link href="/news" className="hover:text-primary-grey transition-colors">
                    NEWS
                </Link>
                <Link href="/contact" className="hover:text-primary-grey transition-colors">
                    CONTACT
                </Link>
                <Link href="/" className="w-10 h-10 flex items-center justify-center">
                    <Image src="/images/logo/esa_logo.png" alt="ESA Logo" height={50} width={60} />
                </Link>
                <Link href="/events" className="hover:text-primary-grey transition-colors">
                    EVENTS
                </Link>
                <Link href="/about-us" className="hover:text-primary-grey transition-colors">
                    ABOUT US
                </Link>
            </nav>

            {/* Mobile Navbar */}
            <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-primary-black/90 backdrop-blur-sm">
                <div className="flex justify-between items-center px-4 py-3">
                    {/* Hamburger Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="text-primary-white hover:text-primary-grey transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Logo */}
                    <Link href="/" className="w-10 h-10 flex items-center justify-center">
                        <Image
                            src="/images/logo/esa_logo.png"
                            alt="ESA Logo"
                            height={40}
                            width={48}
                        />
                    </Link>

                    {/* Spacer to keep logo centered */}
                    <div className="w-10"></div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-primary-black/95 backdrop-blur-sm border-t border-primary-grey/20">
                        <div className="flex flex-col py-4 px-4 space-y-4 font-roboto-mono text-primary-white">
                            <Link
                                href="/news"
                                className="hover:text-primary-grey transition-colors py-2 px-2"
                                onClick={() => setIsOpen(false)}
                            >
                                NEWS
                            </Link>
                            <Link
                                href="/contact"
                                className="hover:text-primary-grey transition-colors py-2 px-2"
                                onClick={() => setIsOpen(false)}
                            >
                                CONTACT
                            </Link>
                            <Link
                                href="/events"
                                className="hover:text-primary-grey transition-colors py-2 px-2"
                                onClick={() => setIsOpen(false)}
                            >
                                EVENTS
                            </Link>
                            <Link
                                href="/about-us"
                                className="hover:text-primary-grey transition-colors py-2 px-2"
                                onClick={() => setIsOpen(false)}
                            >
                                ABOUT US
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
