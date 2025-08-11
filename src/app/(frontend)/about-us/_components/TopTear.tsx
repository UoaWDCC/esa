import React from 'react';
import Image from 'next/image';

export default function TopTear() {
    return (
        <div className="w-screen absolute h-50 overflow-clip -top-[11rem]">
            <Image
                src={'/images/aboutus/WhiteTearTop.png'}
                width={1700}
                height={500}
                alt=""
                className="absolute -top-4 w-screen"
            />
            <Image
                src={'/images/aboutus/BlackTearTop.png'}
                width={1700}
                height={500}
                alt=""
                className="absolute top-0 w-screen"
            />
        </div>
    );
}
