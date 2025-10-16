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
        <div className="relative w-full h-full max-w-full max-h-full my-6">
            {/* decorative jagged background */}
            <Image src="/images/sponsor/Rectangle_test.png" alt="" fill priority={false} />

            {/* content on top */}
            <div className="relative z-10 ">
                {/* Wrapper for avatar + text so they move together. */}
                <div
                    className="flex items-center w-full transform translate-x-15 translate-y-5"
                    id="sponsor-content-wrapper"
                >
                    {/* Avatar overlaps the left jagged edge */}
                    <div className="-ml-8 mr-6 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 z-20">
                        <Image
                            src={logoSrc}
                            alt={logoAlt || name}
                            width={50}
                            height={50}
                            className="rounded-full object-cover"
                        />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <p className="text-black truncate">
                            {name} {location && `(${location})`}
                        </p>
                        <div className="mt-1 text-black">{offer}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
