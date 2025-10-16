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

type CafeProps = {
    isActive?: boolean; // controlled: when true the folder is considered active/open
    onActivate?: (active: boolean) => void; // notify parent when toggled
};

export default function CafeDrinksFolder({ isActive, onActivate }: CafeProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(!!isActive);

    const handleClick = () => {
        const next = !isExpanded;
        setIsExpanded(next);
        onActivate?.(next);
    };

    const sponsors = useFetchSponsors();

    // keep internal state in sync when parent controls isActive
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

    // inline expansion: when expanded, the content will be displayed in the same folder body

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
            <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-[#4A5AFF] p-4 overflow-y-auto transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:-translate-y-3 group-hover:shadow-xl group-active:-translate-y-8 group-active:shadow-2xl">
                {isExpanded ? (
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
                        {sponsors && sponsors.length > 0 ? (
                            sponsors
                                .filter((s) => s.type === 'cafe-drinks' || !s.type)
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
                ) : null}
            </div>
        </div>
    );
}

function useFetchSponsors() {
    const [sponsors, setSponsors] = useState<PayloadSponsor[] | null>(null);

    useEffect(() => {
        let mounted = true;

        async function fetchSponsors() {
            try {
                // Payload collection slug is `sponsor` (singular) so the REST endpoint is `/api/sponsor`.
                // Try that first, fall back to `/api/sponsors` if needed.
                let res = await fetch('/api/sponsor');
                if (!res.ok) {
                    res = await fetch('/api/sponsors');
                }
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
