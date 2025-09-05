import Image from "next/image";
import Pin from "./Pin";

export type PinColour = keyof typeof PIN_COLOURS;

export interface PolaroidProps {
    image: string;
    eventDate: string;
    eventName: string;
    pinColour: PinColour;
    variation: 'small' | 'large';
}

const PIN_COLOURS = {
    red: '#A92622',
    blue: '#0000FF',
    green: '#55A077',
    yellow: '#FFC857',
    purple: '#800080',
    orange: '#FFA500',
    pink: '#FFC0CB',
    teal: '#008080',
    brown: '#A52A2A',
    gray: '#808080'
} as const;

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

export default function Polaroid({ image = "/images/aboutus/AboutUsImage.jpg", eventDate = "12/20/2015", eventName = "TestEvent", pinColour = 'red', variation = 'small' }: PolaroidProps) {
    // Calculates transform based on event name.
    // This allows for the "random" transforms without using math.random. This prevents hydration issues.
    const shift = RANDOM_TRANSFORMS[
        eventName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % RANDOM_TRANSFORMS.length
    ];

    return (     
        <div 
            className={`relative bg-white rounded-md drop-shadow-lg 
                ${variation === 'large' 
                    ? 'w-[45vw] aspect-[370/320] md:w-[30vw] lg:w-[20vw]' 
                    : 'w-[42vw] aspect-[290/260] md:w-[27vw] lg:w-[17vw]'}
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
                        sizes={variation === 'large' ? '370px' : '260px'}
                        className="object-cover"
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