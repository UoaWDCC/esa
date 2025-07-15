'use client'
import Image from 'next/image'
import {EventData} from "@/types/EventData";
import {Button} from "@/components/ui/Button";

// date square
function DateBadge({ month, day }: { month: string; day: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-h-[182px] max-w-[187px] rounded-[2rem] bg-[#871F1B] aspect-[16/9]">
      <span className="text-white text-2xl sm:text-[20px] md:text-[27px] font-reservoir-grunge leading-none p-5">{month}</span>
      <span className="text-white text-5xl sm:text-[59px] md:text-[79px] font-reservoir-grunge leading-none">{day}</span>
    </div>
  )
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

interface EventCardProps {
  event: EventData;
  even?: boolean;
}

export default function EventCard({ event, even }: EventCardProps) {
    const date = new Date(event.date);
    return (
        // <div className="flex items-center gap-4 w-full max-w-[968px] md:h-[182px] sm:-[150px] h-[130px] text-black bg-accent-light">
        //   {/* Photo with border */}
        //   <div className="relative flex-1 h-full rounded-[2rem] overflow-hidden border-4 border-red-900 w-full">
        //     <div className="overflow-hidden w-full h-full">
        //       <Image
        //         src={bgSrc}
        //         alt={bgAlt}
        //         fill
        //         className={`object-cover w-full h-full transition-opacity scale-110${disabled ? ' blur-sm brightness-110' : ''}`}
        //         style={{}}
        //       />
        //     </div>
        //     {locked ? (
        //       <div className="absolute inset-0 w-full h-full z-50">
        //         <div className="grid-cols-[0.3fr_1fr] grid items-center gap-4 px-[10%] w-full h-full">
        //           <Image
        //             src="/images/home/lock.png"
        //             alt="locked"
        //             width={48}
        //             height={48}
        //             className="md:w-[77px]"
        //           />
        //           <h3 className="leading-none">Coming Soon</h3>
        //         </div>
        //       </div>
        //     ) :
        //     (
        //       <div className='absolute inset-0 w-full h-full flex items-center justify-center z-50'>
        //         <h3 className="leading-none">{title}</h3>
        //       </div>
        //     )}
        //
        //
        //   </div>
        //
        //   {/* DateBadge */}
        //   <div className="h-full w-[30%] md:w-auto flex items-center">
        //     <DateBadge month={month} day={day} />
        //   </div>
        // </div>
        <div className="w-fit md:w-full flex flex-col md:flex-row gap-x-5">
            <div className={`flex gap-x-5 justify-center items-center ${even ? "flex-row-reverse md:flex-row" : "flex-row"}`}>
                <div className="flex flex-col">
                    <h4>{days[date.getDay()]}</h4>
                    <h4>
                        {date.getDate().toString().padStart(2, '0')}.
                        {(date.getMonth() + 1).toString().padStart(2, '0')}.
                        {date.getFullYear().toString().slice(-2)}
                    </h4>
                    <Button variant="clear" size="sm" className="whitespace-nowrap">
                        Sign up Here
                    </Button>
                </div>
                <div className="w-[200px] md:w-[246px]">
                    <Image
                        src={event.image}
                        alt={event.imageAlt}
                        height={356}
                        width={246}
                        className="aspect-[178/123] rounded-3xl"
                    />
                </div>
            </div>
            <div className="flex flex-col w-full gap-y-3 mt-2 md:mt-0">
                <h4>{event.title}</h4>
                <hr />
                <p>{event.description}</p>
            </div>
        </div>
    );
}
