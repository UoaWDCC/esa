// Import React and Next.js Image component
'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import EventCard from './EventCard'

// Import global styles (including Tailwind)
import 'src/styles/global.css'

interface Event {
  _id: string
  title: string
  day: string
  month: string
  date: string
  image: string | null
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function Events() {
  const [events, setEvents] = React.useState<Event[]>([])

  // fetch the events from payload on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('/api/events', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(
            error.message || 'Failed to fetch events',
        );
      } else {
        const data = await response.json();

        // map payload.docs to Event[]
        const mappedEvents: Event[] = (data.docs || []).map((doc: any) => {
          const dateObj = new Date(doc.date);
          return {
            _id: doc._id,
            title: doc.name,
            day: dateObj.getUTCDate().toString().padStart(2, '0'),
            month: MONTHS[dateObj.getUTCMonth()],
            date: doc.date,
            image: doc.image,
          }
        });
        setEvents(mappedEvents);
        console.log('Fetched events:', mappedEvents);
      }

      return response;
    };

    fetchEvents();
  }, []);
    

  return (
    <section className="relative px-6 md:px-16 text-white h-[1043px]">
      {/* page title */}
      <div className="relative w-fit mx-auto mt-14">
        <Image
          src="/images/home/events_title.png"
          alt="Events"
          width={456}
          height={116}
          className="object-contain object-top"
        />

        <Image
          src="/images/home/frame.png"
          alt="top left frame"
          width={60}
          height={60}
          className="absolute -top-5 -left-14 scale-x-[-1] scale-y-[-1] w-[20%] md:w-[15%] -rotate-18"
        />
        <Image
          src="/images/home/frame.png"
          alt="bottom right frame"
          width={60}
          height={60}
          className="absolute -bottom-4 -right-10 w-[20%] md:w-[15%]"
        />
      </div>
      

      {/* upcoming slots */}
      <div className="mt-[52px] space-y-[46px] flex flex-col items-center relative z-10">
        <EventCard
          bgSrc="/images/home/latest_strip.png"
          title="Coming soon"
          month="Mnth"
          day="XX"
          locked
          disabled   /* ← blur & brighten */
        />
        <EventCard
          bgSrc="/images/home/latest_strip.png"
          title="Coming soon"
          month="Mnth"
          day="XX"
          locked
          disabled
        />
      </div>

      {/* latest header */}
      <div className="flex flex-col items-center relative z-10">
        <div className="mt-[81px] mb-4 bg-[#871F1B] text-white text-2xl font-reservoir-grunge px-4.5 py-2 rounded-2xl inline-block">
          Latest&nbsp;Event:
        </div>

        {/* event card */}
        <EventCard
          bgSrc="/images/home/latest_strip.png"
          title={events[0]?.title || "XX"}
          month={events[0]?.month || "XX"}
          day={events[0]?.day || "XX"}
        />
      </div>

      <Image
        src="/images/home/events_star.png"
        alt="Background Star"
        width="409"
        height="800"
        layout=""
        className="absolute left-0 top-20 z-0"
      />
      
    </section>
  )
}
