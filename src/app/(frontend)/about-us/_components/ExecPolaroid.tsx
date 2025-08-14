import Image from 'next/image';
import React from 'react';

interface ExecPolaroidProps {
    index: number;
    image: string;
}

const variations = [
    {
        // Variation 0 - Green pin
        flip: false,
        bgRotation: '',
        pinColor: 'GreenPin.svg',
        pinPosition: '-top-1 right-[37%]',
        rotation: 'rotate-[8deg]',
        polaroidTransform: 'translate-y-2 -translate-x-2',
    },
    {
        // Variation 1 - Red pin
        flip: true,
        bgRotation: '-rotate-[6deg]',
        pinColor: 'RedPin.svg',
        pinPosition: 'top-0 right-[39%]',
        rotation: 'rotate-[10deg]',
        polaroidTransform: 'translate-y-1 -translate-x-2.5',
    },
    {
        // Variation 2 - Yellow pin
        flip: false,
        bgRotation: '-rotate-[14deg]',
        pinColor: 'YellowPin.svg',
        pinPosition: 'top-4 right-[31%]',
        rotation: 'rotate-[7deg]',
        polaroidTransform: 'translate-y-2 -translate-x-2',
    },
];

export default function ExecPolaroid({ index, image }: ExecPolaroidProps) {
    // Get the variation based on index (cycle through if more than 3 execs)
    const variation = variations[index % 3];

    return (
        <div
            className={`flex w-88 h-75 bg-[url(/images/aboutus/ExecImageBg.png)] justify-center items-center bg-no-repeat bg-center bg-contain relative ${variation.flip ? 'scale-x-[-1]' : ''} ${variation.bgRotation}`}
        >
            <Image
                src={`/images/aboutus/${variation.pinColor}`}
                width={40}
                height={40}
                unoptimized={true}
                alt={`${variation.pinColor.replaceAll('.svg', '')}`}
                className={`absolute ${variation.pinPosition} ${variation.flip ? 'scale-x-[-1]' : ''} w-7 h-auto`}
            />
            <Image
                src={image}
                width={450}
                height={450}
                alt={`Exec Polaroid`}
                className={`${variation.rotation} w-[77%] h-[62%] ${variation.polaroidTransform} object-cover object-center`}
            />
        </div>
    );
}
