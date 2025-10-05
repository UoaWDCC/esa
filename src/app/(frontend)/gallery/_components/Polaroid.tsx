import Image from "next/image";
import Pin from "./Pin";
import { PinColour, Variation, PIN_COLOURS, VARIATIONS } from "@/types/GalleryData";

// To change options for pinColour and variation, edit src/types/GalleryData.ts
export interface PolaroidProps {
    image: string;
    eventDate: string;
    eventName: string;
    pinColour: PinColour;
    variation: Variation;
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
                <p className="mt-3 text-center text-[#2b2b2b] text-sm font-waytoon"> 
                    <span>{eventDate}</span>
                    <span className="ml-1">{eventName}</span>
                </p>
            </div>
        </div>
    );
}
