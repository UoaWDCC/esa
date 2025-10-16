'use client';

import React, { useState, useRef, useEffect } from 'react';
import CafeDrinksFolder from './_components/CafeDrinksFolder';
import RestaurantsFolder from './_components/RestaurantsFolder';
import EntertainmentFolder from './_components/EntertainmentFolder';
import RetailOtherFolder from './_components/RetailOtherFolder';
import GuideFolder from './_components/GuideFolder';

export default function Sponsors() {
    // activeFolder: null => idle mode (original absolute layout)
    // activeFolder: 'cafe' => focus mode (only that folder shown in flow)
    const [activeFolder, setActiveFolder] = useState<string | null>(null);
    const focusedRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (activeFolder && focusedRef.current) {
            focusedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [activeFolder]);

    if (!activeFolder) {
        // Idle mode: original absolute layout with offsets
        return (
            <div className="relative w-full h-330 mt-[350px]">
                {/* Each component positioned absolutely with different top values */}
                <div className="absolute top-0 w-full z-5">
                    <CafeDrinksFolder onActivate={(id) => setActiveFolder(id ? 'cafe' : null)} />
                </div>

                <div className="absolute top-[200px] w-full z-10">
                    <RestaurantsFolder />
                </div>

                <div className="absolute top-[400px] w-full z-15">
                    <EntertainmentFolder />
                </div>

                <div className="absolute top-[600px] w-full z-20">
                    <RetailOtherFolder />
                </div>

                <div className="absolute top-[800px] w-full z-25">
                    <GuideFolder />
                </div>
            </div>
        );
    }

    // This one shows only the active folder that is clicked
    return (
        <div className="w-full px-4 mt-56" ref={focusedRef}>
            {activeFolder === 'cafe' && (
                <div>
                    <CafeDrinksFolder
                        isActive
                        onActivate={(id) => setActiveFolder(id ? 'cafe' : null)}
                    />
                </div>
            )}
        </div>
    );
}
