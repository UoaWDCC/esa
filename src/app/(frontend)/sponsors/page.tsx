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
                    <CafeDrinksFolder
                        onActivate={(active) => setActiveFolder(active ? 'cafe' : null)}
                    />
                </div>

                <div className="absolute top-[200px] w-full z-10">
                    <RestaurantsFolder
                        onActivate={(active) => setActiveFolder(active ? 'restaurants' : null)}
                    />
                </div>

                <div className="absolute top-[400px] w-full z-15">
                    <EntertainmentFolder
                        onActivate={(active) => setActiveFolder(active ? 'entertainment' : null)}
                    />
                </div>

                <div className="absolute top-[600px] w-full z-20">
                    <RetailOtherFolder
                        onActivate={(active) => setActiveFolder(active ? 'retail' : null)}
                    />
                </div>

                <div className="absolute top-[800px] w-full z-25">
                    <GuideFolder />
                </div>
            </div>
        );
    }

    // Focused mode: show only the active folder
    return (
        <div className="w-full mt-56" ref={focusedRef}>
            {activeFolder === 'cafe' && (
                <CafeDrinksFolder
                    isActive
                    onActivate={(active) => setActiveFolder(active ? 'cafe' : null)}
                />
            )}
            {activeFolder === 'restaurants' && (
                <RestaurantsFolder
                    isActive
                    onActivate={(active) => setActiveFolder(active ? 'restaurants' : null)}
                />
            )}
            {activeFolder === 'entertainment' && (
                <EntertainmentFolder
                    isActive
                    onActivate={(active) => setActiveFolder(active ? 'entertainment' : null)}
                />
            )}
            {activeFolder === 'retail' && (
                <RetailOtherFolder
                    isActive
                    onActivate={(active) => setActiveFolder(active ? 'retail' : null)}
                />
            )}
        </div>
    );
}
