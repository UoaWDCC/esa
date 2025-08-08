'use client';

import React from 'react';
import Image from 'next/image';

export interface TopTearProps {
    translateY?: number;
}

export default function TopTear(props: TopTearProps) {
    const { translateY = 0 } = props;

    return (
        <div
            className="w-screen absolute h-50 overflow-clip -top-[12.5rem]"
            style={{ transform: `translateY([${translateY}]rem)` }}
        >
            <Image
                src={'/images/aboutus/WhiteTear.png'}
                width={1700}
                height={500}
                alt="ESA Mascot"
                className="absolute top-0"
            />
            <Image
                src={'/images/aboutus/BlackTear.png'}
                width={1700}
                height={500}
                alt="ESA Mascot"
                className="absolute top-3"
            />
        </div>
    );
}
