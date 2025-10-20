'use client';
import Image from 'next/image';
import Pin from './Pin';
import { PIN_COLOURS, VARIATIONS } from '@/types/GalleryImageData';
import { GalleryImageData } from '@/types/GalleryImageData';

// To change options for pinColour and variation, edit src/types/GalleryImageData.ts
export interface PolaroidProps extends GalleryImageData {
    // Add additional props here if needed
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};

const getRandomInt = (min: number = -3, max: number = 3): number => {
    return Math.floor(Math.random() * (max - min)) + min;
};

export default function Polaroid({
    image = '/images/aboutus/AboutUsImage.jpg',
    eventDate = '12/20/2015',
    eventName = 'TestEvent',
    pinColour = 'red',
    variation = 'small',
}: PolaroidProps) {
    const variationCSS = // cannot create a new entry in GalleryImageData.ts in types because it creates a payload option for mobile size selection, which is not what we want this for.
        window.innerWidth < 768
            ? 'min-w-[26.667vw] aspect-[1.213/1]'
            : VARIATIONS[variation].dimensions;

    const getTransformValue = window.innerWidth < 768 ? () => 0 : getRandomInt; // This is much cleaner and simpler than using a predetermined array of transforms
    const rotate = getTransformValue();
    const translateX = getTransformValue();
    const translateY = getTransformValue();

    return (
        <div
            className={`relative bg-white rounded-md drop-shadow-lg ${variationCSS}`}
            style={{
                transform: `rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px)`, // Tailwind doesn't like dynamic stuff being simple so I just used inline styling cause its just like that. Type shi
            }}
        >
            <Pin
                className="absolute hidden md:block left-[45%] -top-9 md:-top-7 lg:-top-6" // Hide pin in mobile layout
                hexPinColour={PIN_COLOURS[pinColour]}
            />
            <div className="flex flex-col p-2 h-full rounded-xl">
                <div className="relative w-full h-[90%]">
                    <Image
                        src={image}
                        alt={eventName}
                        fill
                        sizes={`${VARIATIONS[variation].imageSize}`} // Image size on mobile doesnt really matter tbh, it works fine when I tested it.
                        className="object-cover"
                        draggable={false}
                    />
                </div>
                <div className="mt-1 text-center text-[#2b2b2b] text-[5px] line-clamp-2 md:text-[12px] font-waytoon tracking-tightest overflow-hidden">
                    {/* Hide the event date in mobile layout */}
                    <a className="hidden md:block">{formatDate(eventDate)}</a> <a>{eventName}</a>
                </div>
            </div>
        </div>
    );
}
