import Image from "next/image";
import Pin from "./Pin";

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

export type PinColour = keyof typeof PIN_COLOURS;

export interface PolaroidProps {
    image: string;
    eventDate: string;
    eventName: string;
    pinColour: PinColour;
    variation: 'small' | 'large';
}

export default function Polaroid({ image = "/images/aboutus/AboutUsImage.jpg", eventDate = "12/20/2015", eventName = "TestEvent", pinColour = 'red', variation = 'small' }: PolaroidProps) {
    return (     
        <div className={`relative bg-white rounded-md drop-shadow-lg ${
            variation === 'large'  
                ? 'w-[60%] aspect-[370/320]'  
                : 'w-[60%] aspect-[260/290]'
        }`}>
            <Pin 
                className="absolute left-[45%] top-[-6%]"
                hexPinColour={PIN_COLOURS[pinColour]} 
            />
            <div className="flex flex-col p-3 h-full">
                <div className="relative w-full h-[80%]">
                    <Image
                        src={image}
                        alt={eventName}
                        fill
                        sizes={variation === 'large' ? '370px' : '260px'}
                        className="object-cover rounded-sm"
                    />
                </div>
                <p className="mt-3 text-center text-[#2b2b2b] text-sm"> 
                    <span>{new Date(eventDate).toLocaleDateString('en-AU', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric'
                    })}</span>
                    <span className="ml-1">{eventName}</span>
                </p>
            </div>
        </div>
    );
}