import React from 'react';

interface SponsorCardProps {
    name: string;
    location?: string;
    offer: string;
    logo?: string;
    logoAlt?: string;
}

export default function SponsorCard({ name, location, offer, logo, logoAlt }: SponsorCardProps) {
    return (
        <div className="bg-white rounded-lg p-4 m-2 flex items-center space-x-4 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
            {/* Logo/Icon */}
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                {logo ? (
                    <img
                        src={logo}
                        alt={logoAlt || name}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{name.charAt(0)}</span>
                    </div>
                )}
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0">
                <p className="text-black truncate !text-[22px]">
                    {name} {location && `(${location})`}
                </p>
                <p className="!text-[14px] text-black mt-1">{offer}</p>
            </div>
        </div>
    );
}
