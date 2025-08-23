'use client'
import Image from 'next/image'
import {EventData} from "@/types/EventData";
import {Button} from "@/components/ui/Button";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

interface EventCardProps {
  event: EventData;
  even?: boolean;
  isPast?: boolean;
}

export default function EventCard({ event, even, isPast }: EventCardProps) {
    const date = new Date(event.date);
    return (
        <div className="w-fit md:w-full flex flex-col md:flex-row gap-x-5">
            <div className={`flex gap-x-5 justify-center items-center ${even ? "flex-row-reverse md:flex-row" : "flex-row"}`}>
                <div className="flex flex-col">
                    <h4>{days[date.getDay()]}</h4>
                    <h4>
                        {date.getDate().toString().padStart(2, '0')}.
                        {(date.getMonth() + 1).toString().padStart(2, '0')}.
                        {date.getFullYear().toString().slice(-2)}
                    </h4>
                        <Button variant="clear" size="sm" className="whitespace-nowrap" href={event.locked ? undefined : event.signUpForm} disabled={event.locked || isPast}>
                        Sign up here
                        </Button>

                </div>
                <div className="relative w-[200px] md:w-[246px] aspect-[178/123] overflow-hidden rounded-3xl">
                    <Image
                        src={event.image}
                        alt={event.imageAlt}
                        fill
                        draggable={false}
                        className={`object-cover rounded-3xl ${event.locked ? 'blur-sm' : ''}`}
                    />

                    {event.locked && (
                        <Image
                            src="/images/home/lock.png"
                            alt="Locked"
                            width={60}
                            height={60}
                            draggable={false}
                            className="absolute inset-0 m-auto z-10"
                        />
                    )}
                </div>
            </div>
            <div className="flex flex-col w-full gap-y-3 mt-2 md:mt-0">
                <h4>{!event.locked ? event.title : "Locked Event"}</h4>
                <hr/>
                <p>{!event.locked ? event.description : "This is a locked upcoming event, come back another time to find out what it is! 👀"}</p>
            </div>
        </div>
    );
}
