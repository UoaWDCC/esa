'use client';

import { useState } from 'react';
import EventCard from './EventCard';
import { EventData } from '@/types/EventData';
import Title from '@/components/ui/Title';
import Image from 'next/image';
import { useEvents } from '@/features/events/data/tanstack/useEvents';
import { setupEvents } from '@/features/events/utils/setupEvents';

export default function Events() {
    const { data: parsedEvents } = useEvents();
    const [showAllUpcoming, setShowAllUpcoming] = useState(false); // NEW: toggle state

    if (!parsedEvents) return null;

    const upcomingEvents: EventData[] = [];
    const pastEvents: EventData[] = [];

    setupEvents(parsedEvents, upcomingEvents, pastEvents);

    return (
        <section className="relative text-white pb-32 overflow-hidden w-full lg:px-[13%] md:px-[10%] px-[6%]">
            {/* background image using Next Image */}
            <div className="hidden md:block absolute inset-0 opacity-50">
                <Image
                    src="/images/home/paperbackground.png"
                    alt="paper background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="hidden md:block absolute top-0 right-0 p-4 z-10 -rotate-[9deg] -translate-y-50 translate-x-30 w-[70vw] max-w-[900px] aspect-square opacity-40">
                <Image
                    src="/images/logo/esa_graffiti_logo.png"
                    alt="esa graffiti logo"
                    fill
                    className="object-contain"
                />
            </div>

            <h1 className="text-primary-red underline py-16 relative z-20 whitespace-nowrap md:text-start text-center w-full">
                OUR EVENTS
            </h1>

            {/* latest header */}
            <div className="flex flex-col relative z-20 items-center md:items-start">
                <Title className="mb-10">LATEST</Title>
                {pastEvents[0] && (
                    <EventCard event={pastEvents[0]} isPast={true} isSeeMoreVisible={false} />
                )}
            </div>

            <Image
                src="/images/logo/esa_mascot_no_outline.png"
                alt="esa mascot"
                height={450}
                width={450}
                className="block md:hidden absolute left-0 p-4 z-10 -translate-y-55 -translate-x-60"
            />

            {/* upcoming slots */}
            <div className="mt-25 flex flex-col relative z-20 items-center md:items-start w-full">
                <Title className="mb-10">UPCOMING</Title>
                <div className="flex flex-col items-center space-y-10 w-full">
                    {(showAllUpcoming ? upcomingEvents : upcomingEvents.slice(0, 2)).map(
                        (event, index) => (
                            <EventCard
                                key={event._id}
                                event={event}
                                even={index % 2 === 0}
                                isSeeMoreVisible={false}
                            />
                        ),
                    )}
                </div>

                {/* See more / See less button */}
                {upcomingEvents.length > 2 && (
                    <button
                        onClick={() => setShowAllUpcoming((prev) => !prev)}
                        className="mt-8 px-6 py-2 bg-primary-red text-white rounded-full hover:bg-red-700 transition-colors"
                    >
                        {showAllUpcoming ? 'See Less' : 'See More'}
                    </button>
                )}
            </div>

            <div className="hidden md:block absolute bottom-0 right-0 p-4 z-10 translate-y-30 translate-x-12 w-[40vw] max-w-[450px] aspect-square">
                <Image
                    src="/images/logo/esa_mascot.png"
                    alt="esa mascot"
                    fill
                    className="object-contain"
                />
            </div>
        </section>
    );
}
