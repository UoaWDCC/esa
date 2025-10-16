'use client';

import React from 'react';
import Image from 'next/image';

interface SponsorCardProps {
    name: string;
    location?: string;
    offer: string;
    logo?: string;
    logoAlt?: string;
}

export default function SponsorCard({ name, location, offer, logo, logoAlt }: SponsorCardProps) {
    const logoSrc = logo || '/images/logo-placeholder.png';

    return (
        <div className="relative w-full max-w-full md:max-w-4xl h-40 md:h-44 lg:h-52 my-6">
            {/* decorative jagged background */}
            <Image
                src="/images/sponsor/Rectangle.png"
                alt=""
                fill
                className="object-cover object-center scale-120"
                priority={false}
            />

            {/* content on top */}
            <div className="relative z-10 flex items-center h-full px-6 pb-16 pl-25">
                {/* Wrapper for avatar + text so they move together. To nudge up/down, add e.g. '-translate-y-4' or 'translate-y-2' to this wrapper */}
                <div
                    className="flex items-center w-full transform translate-y-0"
                    id="sponsor-content-wrapper"
                >
                    {/* Avatar overlaps the left jagged edge */}
                    <div className="-ml-8 mr-6 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 z-20">
                        <Image
                            src={logoSrc}
                            alt={logoAlt || name}
                            width={40}
                            height={40}
                            className="rounded-full object-cover"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <div className="text-base md:text-lg font-medium text-black truncate">
                            {name} {location && `(${location})`}
                        </div>
                        <div className="text-xs md:text-sm mt-1 text-black">{offer}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
