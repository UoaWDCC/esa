import React from 'react';
import Image from 'next/image';

export default function BotTear() {
    return (
        <div className="w-screen absolute h-50 overflow-clip -bottom-[12rem]">
            <Image
                src={'/images/aboutus/WhiteTearBot.png'}
                width={1700}
                height={500}
                alt=""
                className="absolute bottom-0"
            />
            <Image
                src={'/images/aboutus/BlackTearBot.png'}
                width={1700}
                height={500}
                alt=""
                className="absolute bottom-4"
            />
        </div>
    );
}
