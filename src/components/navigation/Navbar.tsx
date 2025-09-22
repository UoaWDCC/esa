'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        {
            name: 'HOME',
            href: '/',
        },
        {
            name: 'GALLERY',
            href: '/gallery',
        },
        {
            name: 'CONTACT',
            href: '/contact',
        },
        {
            name: 'EVENTS',
            href: '/events',
        },
        {
            name: 'ABOUT US',
            href: '/about-us',
        },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex z-50 fixed top-5 left-1/2 transform -translate-x-1/2 bg-primary-black font-roboto-mono text-[1.2rem] text-primary-white justify-between items-center bg-primary-grey-light w-[90%] max-w-[1100px] px-18 lg:px-28 rounded-full gap-4 py-1">
                <Link href="/events" className="hover:text-accent transition-colors">
                    EVENTS
                </Link>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                    GALLERY
                </Link>
                <Link href="/" className="w-10 h-10 flex items-center justify-center">
                    <Image src="/images/logo/esa_logo.png" alt="ESA Logo" height={50} width={60} />
                </Link>
                <Link href="/about-us" className="hover:text-accent transition-colors">
                    ABOUT
                </Link>
                <Link href="/contact" className="hover:text-accent transition-colors">
                    CONTACT
                </Link>
            </nav>

            {/* Mobile Navbar */}
            <>
                <div className="fixed top-4 left-3 z-50 md:hidden">
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.button
                                key="close-button"
                                onClick={toggleMenu}
                                className="relative w-18 h-18 rounded-full flex items-center justify-center text-primary-white hover:text-primary-grey transition-colors hover:cursor-pointer bg-primary-grey-light z-[60]"
                                aria-label="Close menu"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.1 }}
                            >
                                <X />
                            </motion.button>
                        ) : (
                            <motion.button
                                key="menu-button"
                                onClick={toggleMenu}
                                className="relative w-18 h-18 rounded-full flex items-center justify-center text-primary-white hover:text-primary-grey transition-colors hover:cursor-pointer bg-primary-grey-light z-[60]"
                                aria-label="Open menu"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.1 }}
                            >
                                <Menu />
                            </motion.button>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ x: -150 }}
                                animate={{ x: 1 }}
                                exit={{ x: -150 }}
                                transition={{ duration: 0.1 }}
                                className="absolute -top-[7px] -left-[1px] mt-2 w-40 rounded-lg bg-primary-grey-light z-40"
                            >
                                <div className="flex flex-col pt-18 pb-4 px-5 space-y-3 font-roboto-mono text-primary-white">
                                    {links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="hover:text-primary-grey transition-colors py-1 px-1"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
                    <Link
                        href="/"
                        className="w-18 h-18 rounded-full flex items-center justify-center bg-primary-grey-light"
                    >
                        <Image
                            src="/images/logo/esa_logo.png"
                            alt="ESA Logo"
                            height={55}
                            width={66}
                        />
                    </Link>
                </div>
            </>
        </>
    );
}
