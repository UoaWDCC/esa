'use client'
import Image from 'next/image'
import clsx from 'clsx'

// date square
function DateBadge({ month, day }: { month: string; day: string }) {
  return (
    <div className="flex flex-col items-center min-h-[182px] min-w-[187px] rounded-3xl bg-[#871F1B]">
      <span className="text-white text-[27px] font-reservoir-grunge leading-none p-5">{month}</span>
      <span className="text-white text-[79px] font-reservoir-grunge leading-none">{day}</span>
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
    <div className="flex items-center gap-4">
      {/* banner background */}
      <div className="relative min-w-[968px] h-[182px] rounded-[3rem] overflow-hidden">
        <Image
          src={bgSrc}
          alt=""
          width={1000}
          height={200}
          className={clsx(
            'object-contain w-full h-full rounded-[3rem] transition-opacity relative z-0',
            disabled && 'blur-sm brightness-110'
          )}
        />
        
        <div className="absolute inset-0 z-10 rounded-[3rem] ring-4 ring-[#871F1B] ring-offset-0 ring-inset pointer-events-none" />


        <div className="absolute inset-0 flex items-center justify-center-left p-20">
          {locked && (
            <Image
              src="/assets/lock.png"
              alt="locked"
              width={48}
              height={48}
              className="md:w-[77px] -mt-4"
            />
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-6">
          {locked && (
            <h3 className="text-black text-[42px] font-reservoir-grunge leading-none">{"Coming Soon"}</h3>
          )}
        </div>
      </div>

      {/* date */}
      <DateBadge month={month} day={day} />
    </div>
  )
}
