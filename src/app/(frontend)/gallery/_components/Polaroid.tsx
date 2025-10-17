import Image from "next/image";
import Pin from "./Pin";
import {PIN_COLOURS, VARIATIONS } from "@/types/GalleryImageData";
import { GalleryImageData } from "@/types/GalleryImageData";

// To change options for pinColour and variation, edit src/types/GalleryImageData.ts
export interface PolaroidProps extends GalleryImageData {
    // Add additional props here if needed
}

const RANDOM_TRANSFORMS = [
    'rotate-3 translate-x-1 translate-y-1',
    '-rotate-2 -translate-x-1 translate-y-2',
    'rotate-1 translate-x-2 -translate-y-1',
    '-rotate-3 -translate-x-2 -translate-y-2',
    'rotate-2 translate-x-1 -translate-y-1',
    '-rotate-1 -translate-x-1 translate-y-1',
    'rotate-1 translate-x-2 translate-y-1',
    '-rotate-2 translate-x-1 -translate-y-2',
    'rotate-3 -translate-x-1 translate-y-1',
] as const;

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

export default function Polaroid({ 
    image = "/images/aboutus/AboutUsImage.jpg", 
    eventDate = "12/20/2015", 
    eventName = "TestEvent", 
    pinColour = 'red', 
    variation = 'small' 
}: PolaroidProps) {
    // Calculates transform based on event name.
    // This allows for the "random" transforms without using math.random. This prevents hydration issues.
    const shift = RANDOM_TRANSFORMS[
        eventName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % RANDOM_TRANSFORMS.length
    ];

    return (     
        <div 
            className={`relative bg-white rounded-md drop-shadow-lg 
                ${VARIATIONS[variation].dimensions}
                ${shift}`}
        >
            <Pin 
                className="absolute left-[45%] -top-9 md:-top-7 lg:-top-6"
                hexPinColour={PIN_COLOURS[pinColour]} 
            />
            <div className="flex flex-col p-3 h-full">
                <div className="relative w-full h-[90%]">
                    <Image
                        src={image}
                        alt={eventName}
                        fill
                        sizes={VARIATIONS[variation].imageSize}
                        className="object-cover"
                        draggable={false}
                    />
                </div>
                <div className="mt-3 text-center text-[#2b2b2b] text-sm font-waytoon"> 
                    <p>{formatDate(eventDate)}</p>
                    <p className="ml-1">{eventName}</p>
                </div>
            </div>
        </div>
    );
}
