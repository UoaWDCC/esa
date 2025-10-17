'use client';

import Title from '@/components/ui/Title';
import EventCard from '@/features/events/components/EventCard';
import { EventData } from '@/types/EventData';
import { useEvents } from '@/features/events/data/tanstack/useEvents';
import { setupEvents } from '@/features/events/utils/setupEvents';
import NoEvents from "@/features/events/components/NoEvents";
import Image from 'next/image';

export default function Events() {
    const { data: parsedEvents } = useEvents();
    if (!parsedEvents) return;

    const upcomingEvents: EventData[] = [];
    const pastEvents: EventData[] = [];

    setupEvents(parsedEvents, upcomingEvents, pastEvents);

    return (
        <div className="relative text-white overflow-hidden lg:px-[13%] md:px-[10%] px-[6%] py-28">

            {/* Background star */}
            <div className="absolute bottom-[-10%] right-[-20%] -z-10 overflow-hidden">
                <Image
                    src="/images/signup/background_star.png"
                    alt="background star red"
                    width={700}
                    height={700}
                    className="w-[700px]"
                />
            </div>

            {/* Title/body text */}
            <h2 className="text-primary-red text-center"> Our Events </h2>

            <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
                <p className="text-primary-white mb-2">View our next and previous events here!</p>
            </div>

            <div className="mt-25 flex flex-col relative z-20 items-center md:items-start">
                <Title className="mb-10">UPCOMING</Title>
                <div className="flex flex-col items-center space-y-10 w-full">
                    {upcomingEvents.length === 0 ?
                        <NoEvents /> :
                        upcomingEvents.slice(0, 2).map((event, index) => (
                            <EventCard key={event._id} event={event} even={index % 2 === 0} />
                        ))
                    }
                </div>
            </div>

            <div className="mt-20 flex flex-col relative z-20 items-center md:items-start">
                <Title className="mb-10">LATEST</Title>
                <div className="flex flex-col items-center space-y-10 w-full">
                    {pastEvents.length === 0 ?
                        <NoEvents /> :
                        pastEvents.slice(0, 2).map((event, index) => (
                            <EventCard
                                key={event._id}
                                event={event}
                                even={index % 2 === 0}
                                isPast={true}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
