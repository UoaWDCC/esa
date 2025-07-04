// Import React and Next.js Image component
import React from 'react'
import Image from 'next/image'
import EventCard from './EventCard'

// Import global styles (including Tailwind)
import 'src/styles/global.css'


export default function Events() {
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
          title=""
          month="May"
          day="10"
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
