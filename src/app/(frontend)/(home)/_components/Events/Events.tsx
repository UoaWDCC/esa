"use client";

import EventCard from './EventCard';
import { EventData } from '@/types/EventData';
import Title from "@/components/ui/Title";
import Image from "next/image";
import {useEvents} from "@/features/events/data/tanstack/useEvents";

interface EventDoc extends EventData {}

export default function Events() {
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
      <section className="relative px-6 md:px-[8%] text-white pb-32 overflow-hidden">
          {/* background image layer */}
          <div className="hidden md:block absolute inset-0 bg-[url(/images/home/paperbackground.png)] bg-cover bg-center opacity-50" />

          <div className="hidden md:block absolute top-0 right-0 p-4 z-10 -rotate-[9deg] -translate-y-50 translate-x-30 w-[70vw] max-w-[900px] aspect-square opacity-40">
              <Image
                  src="/images/logo/esa_graffiti_logo.png"
                  alt="esa graffiti logo"
                  fill
                  className="object-contain"
              />
          </div>

          <h1 className="text-primary-red underline py-16 relative z-20 whitespace-nowrap">
              OUR EVENTS
          </h1>

          {/* latest header */}
          <div className="flex flex-col relative z-20 items-center md:items-start">
              <Title className="mb-10">LATEST</Title>
              {/* display the single most recent event */}
              {pastEvents[0] && <EventCard event={pastEvents[0]} isPast={true}/>}
          </div>

          <Image
              src="/images/logo/esa_mascot_no_outline.png"
              alt="esa mascot"
              height={450}
              width={450}
              className="block md:hidden absolute left-0 p-4 z-10 -translate-y-55 -translate-x-60"
          />

          {/* upcoming slots */}
          <div className="mt-25 flex flex-col relative z-20 items-center md:items-start">
              <Title className="mb-10">UPCOMING</Title>
              <div className="flex flex-col items-center space-y-10 w-full">
                  {upcomingEvents.slice(0, 2).map((event, index) => (
                      <EventCard key={event._id} event={event} even={index % 2 === 0} />
                  ))}
              </div>
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