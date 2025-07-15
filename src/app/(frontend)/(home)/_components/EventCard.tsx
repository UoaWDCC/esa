'use client'
import Image from 'next/image'

// date square
function DateBadge({ month, day }: { month: string; day: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-h-[182px] max-w-[187px] rounded-[2rem] bg-[#871F1B] aspect-[16/9]">
      <span className="text-white text-2xl sm:text-[20px] md:text-[27px] font-reservoir-grunge leading-none p-5">{month}</span>
      <span className="text-white text-5xl sm:text-[59px] md:text-[79px] font-reservoir-grunge leading-none">{day}</span>
    </div>
  )
}

// 
interface Props {
  // background banner image */
  bgSrc: string
  // background image alt text
  bgAlt: string
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
  bgAlt,
  title,
  month,
  day,
  locked = false,
  disabled = false,
}: Props) {
  return (
    <div className="flex items-center gap-4 w-full max-w-[968px] md:h-[182px] sm:-[150px] h-[130px] text-black">
      {/* Photo with border */}
      <div className="relative flex-1 h-full rounded-[2rem] overflow-hidden border-4 border-red-900 w-full">
        <div className="overflow-hidden w-full h-full">
          <Image
            src={bgSrc}
            alt={bgAlt}
            fill
            className={`object-cover w-full h-full transition-opacity scale-110${disabled ? ' blur-sm brightness-110' : ''}`}
            style={{}}
          />
        </div>
        {locked ? (
          <div className="absolute inset-0 w-full h-full z-50">
            <div className="grid-cols-[0.3fr_1fr] grid items-center gap-4 px-[10%] w-full h-full">
              <Image
                src="/images/home/lock.png"
                alt="locked"
                width={48}
                height={48}
                className="md:w-[77px]"
              />
              <h3 className="leading-none">Coming Soon</h3>
            </div>
          </div>
        ) :
        (
          <div className='absolute inset-0 w-full h-full flex items-center justify-center z-50'>
            <h3 className="leading-none">{title}</h3>
          </div>
        )}


      </div>

      {/* DateBadge */}
      <div className="h-full w-[30%] md:w-auto flex items-center">
        <DateBadge month={month} day={day} />
      </div>
    </div>
  )
}
