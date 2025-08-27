import {EventData} from "@/types/EventData";
import {Calendar, Clock, DollarSign, MapPin} from "lucide-react";
import {cn} from "@/lib/utils";

export default function EventInfo({ event, className, dateString }: { event: EventData; className?: string; dateString: string }) {
    const startTime = new Date(event.startTime);
    const endTime = new Date(event.endTime);

    function formatTime(date: Date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    return (
        <div className={cn('flex flex-col mt-5 gap-y-2', className)}>
            <div className="flex flex-col md:justify-between gap-y-2">
                <span className="flex md:hidden flex-row items-center whitespace-nowrap">
                    <Calendar className="mr-1" /> {dateString}
                </span>
                <span className="flex flex-row items-center whitespace-nowrap">
                    <DollarSign /> {event.memberPrice} (Members)
                </span>
                <span className="flex flex-row items-center whitespace-nowrap">
                    <Clock className="mr-1" /> {`${formatTime(startTime)} - ${formatTime(endTime)}`}
                </span>
            </div>
            <div className="flex flex-col md:justify-between gap-y-2">
                <span className="flex flex-row items-center whitespace-nowrap">
                    <DollarSign /> {event.nonMemberPrice} (Non-Members)
                </span>
                <span className="flex flex-row items-center whitespace-nowrap">
                    <MapPin className="mr-1" />
                    {event.location}
                </span>
            </div>
        </div>
    );
}