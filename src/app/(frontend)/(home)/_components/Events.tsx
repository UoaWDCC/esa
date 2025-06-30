// Import React and Next.js Image component
import React from 'react'
import Image from 'next/image'
import EventCard from './EventCard'

// Import global styles (including Tailwind)
import 'src/styles/global.css'


export default function Events() {
  return (
    <section className="px-6 md:px-16 pb-20 text-white">
      {/* page title */}
      <div className="relative">
        <Image
          src="/assets/events_title.png"
          alt="Events"
          width={456}
          height={116}
          className="mx-auto mt-14 object-contain object-top"
        />

        <Image
          src="/assets/frame.png"
          alt="bottom right frame"
          width={60}
          height={60}
          className="absolute -bottom-10 -right-1 w-[12%] md:w-[7.5%]"
        />
      </div>

      {/* upcoming slots */}
      <div className="mt-28 space-y-12">
        <EventCard
          bgSrc="/assets/latest_strip.png"
          title="Coming soon"
          month="Mnth"
          day="XX"
          locked
          disabled   /* ← blur & brighten */
        />
        <EventCard
          bgSrc="/assets/latest_strip.png"
          title="Coming soon"
          month="Mnth"
          day="XX"
          locked
          disabled
        />
      </div>

      {/* latest header */}
      <div className="flex flex-col items-center">
        <div className="mt-20 mb-4 bg-[#871F1B] text-white text-2xl font-reservoir-grunge px-4.5 py-2 rounded-2xl inline-block">
          Latest&nbsp;Event:
        </div>
      </div>
      

      {/* event card */}
      <EventCard
        bgSrc="/assets/latest_strip.png"
        title=""
        month="May"
        day="10"
      />
    </section>
  )
}
