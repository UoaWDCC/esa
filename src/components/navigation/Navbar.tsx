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
            name: "NEWS",
            href: "/news",
        },
        {
            name: "CONTACT",
            href: "/contact",
        },
        {
            name: "EVENTS",
            href: "/events",
        },
        {
            name: "ABOUT US",
            href: "/about",
        }
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex mt-5 z-50 absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary-black font-roboto-mono text-[1rem] text-primary-white justify-between items-center bg-primary-grey-light w-[90%] max-w-[1100px] px-8 lg:px-28 rounded-full gap-4 py-0">
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

            <nav className="md:hidden fixed top-5 left-0 right-0 z-50">
                <div className="flex justify-between items-center px-4 py-3">
                    <button
                        onClick={toggleMenu}
                        className="w-18 h-18 rounded-full flex items-center justify-center text-primary-white hover:text-primary-grey transition-colors hover:cursor-pointer bg-primary-grey-light"
                        aria-label="Toggle menu"
                    >
                        <Menu />
                    </button>
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
                    <div className="w-18"></div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 1 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-1 left-[12px] w-40 rounded-lg mt-2 bg-primary-grey-light"
                        >
                            <button
                                onClick={toggleMenu}
                                className="w-18 h-18 rounded-full flex items-center justify-center text-primary-white hover:text-primary-grey transition-colors hover:cursor-pointer bg-primary-grey-light"
                                aria-label="Toggle menu"
                            >
                                <X className={'z-50'} />
                            </button>
                            <div className="flex flex-col pb-4  px-4 space-y-3 font-roboto-mono text-primary-white">
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
            </nav>
        </>
    );
}
