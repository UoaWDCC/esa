'use client';

import React, { useState, useEffect } from 'react';
import SponsorCard from './SponsorCard';

type PayloadSponsor = {
    id: string;
    name: string;
    location?: string;
    deal?: string;
    type?: string;
    logo?: { url?: string } | null;
};

type RestaurantsProps = {
    isActive?: boolean;
    onActivate?: (active: boolean) => void;
};

export default function RestaurantsFolder({ isActive, onActivate }: RestaurantsProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(!!isActive);

    const handleClick = () => {
        const next = !isExpanded;
        setIsExpanded(next);
        onActivate?.(next);
    };

    const sponsors = useFetchSponsors();

    useEffect(() => {
        if (typeof isActive === 'boolean') setIsExpanded(!!isActive);
    }, [isActive]);

    useEffect(() => {
        if (!isExpanded) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsExpanded(false);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [isExpanded]);

    // Conditional animation classes
    const tabAnimationClasses = !isExpanded
        ? 'group-hover:translate-x-1 group-hover:-translate-y-3 group-hover:shadow-lg group-active:-translate-y-7 group-active:scale-110'
        : '';

    const bodyAnimationClasses = !isExpanded
        ? 'group-hover:translate-x-0 group-hover:-translate-y-3 group-hover:shadow-xl group-active:-translate-y-8'
        : '';

    return (
        <div
            className="relative group cursor-pointer transition-all duration-500 ease-out"
            onClick={handleClick}
        >
            {/* Angled tab */}
            <div
                className={`relative z-10 w-40 sm:w-56 md:w-[300px] h-10 sm:h-11 md:h-12 bg-[#FFC857] flex items-center px-2 sm:px-4 justify-center ml-6 sm:ml-12 md:ml-24 lg:ml-96 transition-all duration-300 ease-in-out ${tabAnimationClasses}`}
                style={{ clipPath: 'polygon(20px 0, calc(100% - 20px) 0, 100% 100%, 0 100%)' }}
            >
                <span className="text-white font-bold text-xs sm:text-sm md:text-xl">
                    <span className="hidden sm:inline">Restaurants</span>
                    <span className="sm:hidden">Food</span>
                </span>
            </div>

            {/* Main folder body */}
            <div
                className={`w-full h-[600px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-[#FFC857] p-4 transition-all duration-300 ease-in-out ${bodyAnimationClasses}`}
                style={{
                    boxShadow: '0 -6px 30px rgba(0, 0, 0, 0.4), 0 -2px 8px rgba(0, 0, 0, 0.3)',
                }}
            >
                {isExpanded ? (
                    <div className="w-full h-full p-8 rounded-2xl no-scrollbar overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
                            {sponsors && sponsors.length > 0 ? (
                                sponsors
                                    .filter((s) => s.type === 'restaurant' || !s.type)
                                    .map((s) => (
                                        <SponsorCard
                                            key={s.id}
                                            name={s.name}
                                            location={s.location}
                                            offer={s.deal || ''}
                                            logo={s.logo?.url}
                                        />
                                    ))
                            ) : (
                                <div className="text-white">No sponsors found.</div>
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

// --- Fetch sponsors hook ---
function useFetchSponsors() {
    const [sponsors, setSponsors] = React.useState<PayloadSponsor[] | null>(null);

    React.useEffect(() => {
        let mounted = true;

        async function fetchSponsors() {
            try {
                let res = await fetch('/api/sponsor?limit=100&pagination=false');
                if (!res.ok) res = await fetch('/api/sponsors');
                if (!res.ok) return;

                const json = await res.json();
                const docs = json.docs || json.result || json;
                const mapped = (docs || []).map((d: unknown) => {
                    const x = d as Record<string, unknown>;
                    return {
                        id: (x.id as string) || (x._id as string),
                        name: x.name as string,
                        location: x.location as string | undefined,
                        deal: x.deal as string | undefined,
                        type: x.type as string | undefined,
                        logo: ((): { url?: string } | null => {
                            const logo = x.logo as Record<string, unknown> | undefined;
                            if (!logo) return null;
                            const url = logo.url as string | undefined;
                            return url ? { url } : null;
                        })(),
                    } as PayloadSponsor;
                });
                if (mounted) setSponsors(mapped);
            } catch (_err) {
                // ignore
            }
        }

        fetchSponsors();

        return () => {
            mounted = false;
        };
    }, []);

    return sponsors;
}
