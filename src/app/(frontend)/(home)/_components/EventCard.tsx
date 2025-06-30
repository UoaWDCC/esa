'use client'
import Image from 'next/image'
import clsx from 'clsx'

// date square
function DateBadge({ month, day }: { month: string; day: string }) {
  return (
    <div className="flex flex-col items-center h-48 w-48 rounded-3xl bg-[#871F1B]">
      <span className="text-white text-2xl font-reservoir-grunge leading-none p-5">{month}</span>
      <span className="text-white text-7xl font-reservoir-grunge leading-none">{day}</span>
    </div>
  )
}

// 
interface Props {
  // background banner image */
  bgSrc: string
  // card title 
  title: string
  // month abbreviation
  month: string
  // day
  day: string
  /** Show a lock icon? */
  locked?: boolean
  /** Blur / dim the background? */
  disabled?: boolean
}

export default function EventCard({
  bgSrc,
  title,
  month,
  day,
  locked = false,
  disabled = false,
}: Props) {
  return (
    <div className="relative flex items-center gap-4">
      {/* banner background */}
      <Image
        src={bgSrc}
        alt=""
        width={1000}
        height={200}
        className={clsx(
          'w-48 h-32 h-48 rounded-[3rem] object-cover transition-opacity',
          disabled && 'blur-sm brightness-110'
        )}
      />

      {/* coloured ring */}
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] ring-4 ring-[#871F1B] opacity-82" />

      {/* lock + title overlay */}
      <div className="absolute inset-0 flex items-center justify-center gap-6 text-black">
        {locked && (
          <Image
            src="/assets/lock.png"
            alt="locked"
            width={48}
            height={48}
            className="w-10 md:w-12"
          />
        )}
        <h3 className="text-5xl md:text-3xl font-black drop-shadow-sm">{title}</h3>
      </div>

      {/* date */}
      <DateBadge month={month} day={day} />
    </div>
  )
}
