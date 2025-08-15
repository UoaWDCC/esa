'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EventData } from '@/types/EventData';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

interface EventCardProps {
    event: EventData;
    even?: boolean;
    isPast?: boolean;
}

export default function EventCard({ event, even, isPast }: EventCardProps) {
    const [expanded, setExpanded] = useState(false);
    const date = new Date(event.date);
    const disabled = event.locked || isPast;

    return (
        <div className="w-full">
            {/* Collapsed view */}
            {!expanded && (
                <div className="w-fit md:w-full flex flex-col md:flex-row gap-x-5">
                    <div
                        className={`flex gap-x-5 justify-center items-center ${
                            even ? 'flex-row-reverse md:flex-row' : 'flex-row'
                        }`}
                    >
                        <div className="flex flex-col">
                            <h4>{days[date.getDay()]}</h4>
                            <h4>
                                {date.getDate().toString().padStart(2, '0')}.
                                {(date.getMonth() + 1).toString().padStart(2, '0')}.
                                {date.getFullYear().toString().slice(-2)}
                            </h4>
                            <Button
                                variant="clear"
                                size="sm"
                                className="whitespace-nowrap"
                                href={disabled ? undefined : event.signUpForm}
                                disabled={disabled}
                            >
                                Sign up Here
                            </Button>
                        </div>

                        {/* Poster with fixed aspect ratio */}
                        <div className="relative w-[200px] md:w-[246px] aspect-[178/123] overflow-hidden rounded-3xl">
                            <Image
                                src={event.image}
                                alt={event.imageAlt}
                                fill
                                draggable={false}
                                className={`object-cover rounded-3xl ${event.locked ? 'blur-sm' : ''}`}
                            />
                            {event.locked && (
                                <Image
                                    src="/images/home/lock.png"
                                    alt="Locked"
                                    width={60}
                                    height={60}
                                    draggable={false}
                                    className="absolute inset-0 m-auto z-10"
                                />
                            )}
                        </div>
                    </div>

                    {/* Transparent, no border */}
                    <div className="flex flex-col w-full gap-y-3 mt-2 md:mt-0 !bg-transparent !border-none">
                        <h4>{!event.locked ? event.title : 'Locked Event'}</h4>
                        <p>
                            {!event.locked
                                ? event.description
                                : 'This is a locked upcoming event, come back another time to find out what it is! 👀'}
                        </p>
                    </div>
                </div>
            )}

            {/* Expanded view */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                    >
                        {/* Fixed height for both columns */}
                        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 items-end">
                            {/* Tall poster */}
                            <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-lg">
                                <Image
                                    src={event.image}
                                    alt={event.imageAlt}
                                    fill
                                    priority
                                    className={`object-cover ${event.locked ? 'blur-sm' : ''}`}
                                    draggable={false}
                                />
                                {event.locked && (
                                    <Image
                                        src="/images/home/lock.png"
                                        alt="Locked"
                                        width={80}
                                        height={80}
                                        draggable={false}
                                        className="absolute inset-0 m-auto z-10"
                                    />
                                )}
                            </div>

                            {/* Right panel matches image height */}
                            <div className="flex flex-col justify-between w-full h-[520px] rounded-3xl p-4 md:p-6 !bg-transparent !border-none">
                                <div>
                                    <h2 className="text-xl md:text-2xl font-bold leading-tight">
                                        {!event.locked ? event.title : 'Locked Event'}
                                    </h2>
                                    <span className="text-sm md:text-base text-gray-400 block mt-1">
                                        {date.toLocaleDateString('en-NZ', {
                                            weekday: 'long',
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: '2-digit',
                                        })}
                                    </span>
                                    <div className="mt-4 text-gray-300 leading-relaxed">
                                        {!event.locked
                                            ? event.description
                                            : 'This is a locked upcoming event, come back another time to find out what it is! 👀'}
                                    </div>
                                </div>

                                {/* Centered Sign Up PNG at the bottom */}
                                <div className="flex justify-center pt-6">
                                    <a
                                        href={disabled ? undefined : event.signUpForm}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-disabled={disabled}
                                        tabIndex={disabled ? -1 : undefined}
                                        className={disabled ? 'pointer-events-none' : ''}
                                    >
                                        <Image
                                            src="/images/signup/Group 1.png"
                                            alt="Sign Up"
                                            width={200}
                                            height={80}
                                            draggable={false}
                                            className="hover:scale-105 transition-transform"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle as button (no date) */}
            <div className="mt-3 flex justify-end">
                <Button
                    variant="clear"
                    size="sm"
                    className="whitespace-nowrap"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                >
                    {expanded ? 'See Less' : 'See More'}
                </Button>
            </div>
        </div>
    );
}
