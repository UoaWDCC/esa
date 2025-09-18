'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EventData } from '@/types/EventData';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowUp from '@/components/icons/ArrowUp';
import EventInfo from '@/app/(frontend)/(home)/_components/Events/EventInfo';
import SquigglyArrow from '@/components/icons/SquigglyArrow';

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

    const dateString = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear().toString().slice(-2)}`;

    return (
        <div className="w-full">
            {expanded && <hr className="mb-5" />}
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
                            <h4>{dateString}</h4>
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
                        <hr />
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
                        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-6 items-stretch">
                            {/* Tall poster */}
                            <h4 className="md:hidden flex font-bold">
                                {!event.locked ? event.title : 'Locked Event'}
                            </h4>
                            <div className="flex justify-between gap-x-5">
                                <div className="relative w-[185px] md:w-full h-[231px] md:h-[520px] rounded-3xl overflow-hidden shadow-lg">
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
                                <EventInfo
                                    event={event}
                                    dateString={dateString}
                                    className="md:hidden"
                                />
                            </div>

                            {/* Right panel matches image height */}
                            <div className="flex flex-col w-full h-full md:h-[520px] rounded-3xl !bg-transparent !border-none">
                                <div>
                                    <div className="hidden md:flex justify-between items-center">
                                        <h4 className="font-bold leading-tight">
                                            {!event.locked ? event.title : 'Locked Event'}
                                        </h4>
                                        <h4>{dateString}</h4>
                                    </div>
                                    <EventInfo
                                        event={event}
                                        dateString={dateString}
                                        className="hidden md:flex"
                                    />
                                    <hr className="hidden md:flex mt-5" />
                                    <div className="mt-4 text-gray-300 leading-relaxed">
                                        {!event.locked
                                            ? event.description
                                            : 'This is a locked upcoming event, come back another time to find out what it is! 👀'}
                                    </div>
                                </div>

                                {/* Button stuck bottom right */}
                                <div className="my-6 md:my-0 md:mt-auto flex justify-end items-end">
                                    <div className="rotate-15 hidden md:block">
                                        <SquigglyArrow />
                                    </div>
                                    <Button
                                        disabled={event.locked}
                                        className="flex flex-row items-center gap-x-2 h-fit"
                                    >
                                        Sign Up
                                        <ArrowUp className="size-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {expanded && <hr className="mt-5" />}

            {/* Toggle button */}
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
