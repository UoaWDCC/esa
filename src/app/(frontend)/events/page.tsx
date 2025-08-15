"use client";

import Link from 'next/link';
import Title from "@/components/ui/Title";
import EventCard from '@/app/(frontend)/(home)/_components/Events/EventCard';
import { EventData } from '@/types/EventData';
import {useEvents} from "@/features/events/data/tanstack/useEvents";

interface EventDoc extends EventData {}

export default function events() {

    const { data: parsedEvents } = useEvents();
    if (!parsedEvents) return
    
    const upcomingEvents: EventData[] = [];
    const pastEvents: EventData[] = [];
    
    // Sort by date ascending, then take the first 10 events from all events in payload
    const docs: EventDoc[] = parsedEvents
        .sort((a: EventDoc, b: EventDoc) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 10);
    
    
    // Get today's date at midnight (UTC)
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    
    // For every event, split events into upcoming and past based on today's date
    docs.forEach((doc) => {
        const dateObj = new Date(doc.date)
    
        // Check if the event is upcoming or past
        if (dateObj >= today) { // Upcoming event
            upcomingEvents.push(doc)
        } else {
            pastEvents.push(doc) // Past event
        }
    })
    
    pastEvents.reverse(); // Newest past event is at index 0

    return (
    <div className="relative px-6 md:px-[8%] text-white pb-32 overflow-hidden">
        
        {/* Title/body text */}
        <h2 className="text-primary-red pt-27 text-center"> Our Events </h2>
        
        <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
            <p className="text-primary-white mb-2">
                View our next and previous events here!
            </p>
        </div>

        <hr className="mx-auto mt-4 w-[1200px] h-px border-0 bg-white/50" />

        <div className="mt-25 flex flex-col relative z-20 items-center md:items-start">
            <Title className="mb-10">UPCOMING</Title>
            <div className="flex flex-col items-center space-y-10 w-full">
                {upcomingEvents.slice(0, 2).map((event, index) => (
                    <EventCard key={event._id} event={event} even={index % 2 === 0} />
                ))}
            </div>
        </div>
            
        <div className="mt-25 flex flex-col relative z-20 items-center md:items-start">
            <Title className="mb-10">LATEST</Title>
            <div className="flex flex-col items-center space-y-10 w-full">
                {pastEvents.slice(0, 2).map((event, index) => (
                    <EventCard key={event._id} event={event} even={index % 2 === 0} />
                ))}
            </div>
        </div>

    </div>
    );
}
