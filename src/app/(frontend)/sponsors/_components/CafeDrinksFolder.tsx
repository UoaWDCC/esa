'use client';

import React, { useState } from 'react';
import SponsorCard from './SponsorCard';

export default function CafeDrinksFolder() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    if (isExpanded) {
        // Full page folder view
        return (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                    {/* Header */}
                    <div className="bg-[#4A5AFF] text-white p-6 flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Cafe & Drinks Sponsors</h2>
                        <button
                            onClick={handleClick}
                            className="text-white hover:text-gray-300 text-2xl font-bold"
                        >
                            ×
                        </button>
                    </div>

                    {/* Scrollable Sponsor Content */}
                    <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto bg-[#4A5AFF]">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <SponsorCard
                                name="Gong Cha"
                                location="Multiple Stores"
                                offer="Free topping"
                            />
                            <SponsorCard
                                name="Cosmo Coffee"
                                location="Central"
                                offer="Free upsize"
                            />
                            <SponsorCard
                                name="Tsujiri"
                                location="Central"
                                offer="Free upsize + free soft serve topping"
                            />
                            <SponsorCard name="Bambi" location="Central" offer="10% off" />
                            <SponsorCard name="Foletto" location="Central" offer="10% off" />
                            <SponsorCard
                                name="O3 Space Cafe"
                                location="Newmarket"
                                offer="10% off"
                            />
                            {/* Add more sponsors here to test scrolling */}
                            <SponsorCard name="Starbucks" location="Queen Street" offer="5% off" />
                            <SponsorCard
                                name="Coffee Supreme"
                                location="Various"
                                offer="Free extra shot"
                            />
                            <SponsorCard
                                name="Allpress Espresso"
                                location="Ponsonby"
                                offer="10% off"
                            />
                            <SponsorCard
                                name="Atomic Coffee Roasters"
                                location="Takapuna"
                                offer="Free size upgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Regular folder view
    return (
        <div
            className="relative group cursor-pointer transition-all duration-500 ease-out"
            onClick={handleClick}
        >
            {/* Angled tab - responsive */}
            <div
                className="w-40 sm:w-56 md:w-[300px] h-10 sm:h-11 md:h-12 bg-[#4A5AFF] flex items-center px-2 sm:px-4 justify-center ml-2 sm:ml-4 md:ml-8 lg:ml-32 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:shadow-xl group-active:-translate-y-7 group-active:scale-110"
                style={{
                    clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 100%, 0 100%)',
                }}
            >
                {/* Text positioned over the angled tab - responsive text */}
                <span className="text-white font-bold text-xs sm:text-sm md:text-xl">
                    <span className="hidden sm:inline">Cafe & Drinks</span>
                    <span className="sm:hidden">Cafe</span>
                </span>
            </div>

            {/* Main folder body - responsive height */}
            <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-[#4A5AFF] p-4 overflow-y-auto transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:-translate-y-3 group-hover:shadow-xl group-active:-translate-y-8 group-active:shadow-2xl"></div>
        </div>
    );
}
