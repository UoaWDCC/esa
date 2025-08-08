import React from 'react';
import Image from 'next/image';

export default function BotTear() {
    return (
        <div className="w-screen absolute h-54 overflow-clip -bottom-[13rem]">
            <div className="absolute top-1">
                <Image
                    src={'/images/aboutus/WhiteTearBot.png'}
                    width={1700}
                    height={500}
                    alt=""
                    className=""
                />
            </div>

            <div className="absolute -top-6 md:-top-8 lg:-top-10 xl:-top-12 overflow-hidden">
                <Image
                    src={'/images/aboutus/BlackTearBot.png'}
                    width={1700}
                    height={500}
                    alt=""
                    className=""
                />
            </div>
        </div>
    );
}
