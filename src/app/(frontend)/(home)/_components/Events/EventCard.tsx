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

    return (
        <div className="w-full">
            {!expanded && (
                <div className="w-fit md:w-full flex flex-col md:flex-row gap-x-5">
                    <div
                        className={`flex gap-x-5 justify-center items-center ${even ? 'flex-row-reverse md:flex-row' : 'flex-row'}`}
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
                                href={event.locked ? undefined : event.signUpForm}
                                disabled={event.locked || isPast}
                            >
                                Sign up Here
                            </Button>
                        </div>

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

                    <div className="flex flex-col w-full gap-y-3 mt-2 md:mt-0">
                        <h4>{!event.locked ? event.title : 'Locked Event'}</h4>
                        <hr />
                        <p>
                            {!event.locked
                                ? event.description
                                : 'This is a locked upcoming event, come back another time to find out what it is! 👀'}
                        </p>
                    </div>
                </div>
            )}

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col md:flex-row gap-6 mt-4"
                    >
                        <div className="relative w-full md:w-[45%] min-h-[250px] rounded-3xl overflow-hidden">
                            <Image
                                src={event.image}
                                alt={event.imageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-between w-full md:w-[55%]">
                            <div>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-bold">
                                        {!event.locked ? event.title : 'Locked Event'}
                                    </h2>
                                    <span className="text-sm text-gray-400">
                                        {date.toLocaleDateString('en-NZ', {
                                            weekday: 'long',
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: '2-digit',
                                        })}
                                    </span>
                                </div>
                                <p className="mt-4 text-gray-300">
                                    {!event.locked
                                        ? event.description
                                        : 'This is a locked upcoming event, come back another time to find out what it is! 👀'}
                                </p>
                            </div>

                            <div className="flex justify-end mt-6">
                                <Button
                                    variant="default"
                                    size="lg"
                                    href={event.locked ? undefined : event.signUpForm}
                                    disabled={event.locked || isPast}
                                >
                                    Sign Up ↗
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-3 flex justify-end">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-primary-red underline hover:opacity-80 transition-opacity"
                >
                    {expanded ? 'See Less' : 'See More'}
                </button>
            </div>
        </div>
    );
}
