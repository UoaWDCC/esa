'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { SponsorData } from '@/types/SponsorData';

export interface SponsorProps {
    sponsors: SponsorData[];
}

export default function SponsorBubbles({ sponsors }: SponsorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [baseSize, setBaseSize] = useState(60);
    // State to track which sponsor is hovered for tooltip display
    const [hoveredSponsor, setHoveredSponsor] = useState<{
        id: string;
        deal: string;
        position: { x: number; y: number };
    } | null>(null);

    useEffect(() => {
        // Hide tooltip on scroll
        const handleScroll = () => {
            if (hoveredSponsor) {
                setHoveredSponsor(null);
            }
        };

        // Cleanup function to remove event listener
        window.addEventListener('scroll', handleScroll, true);
        return () => window.removeEventListener('scroll', handleScroll, true);
    }, [hoveredSponsor]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1024) {
                setBaseSize(60);
            } else {
                setBaseSize(90);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Import Packery client side as needs client functionality. As any as idk how to deal with TypeScript error as Packery wasn't made for TypeScript
        import('packery' as any)
            .then((PackeryModule) => {
                const Packery = PackeryModule.default;

                if (containerRef.current) {
                    // Initialize Packery (Used for packing in the circles together)
                    new Packery(containerRef.current, {
                        itemSelector: '.grid-item', // Class name for items
                        stamp: '.stamp',
                        gutter: 20, // Space between items
                        horizontal: true, // Enable horizontal layout
                    });
                }
            })
            .catch((error) => {
                console.error('Failed to load Packery:', error);
            });
    }, [baseSize]);
    
    return (
        <div
            className="relative h-[24rem] pt-8 inline-block ml-4 select-none overflow-visible"
            ref={containerRef}
        >
            {sponsors.map((sponsor, index) => {
                const size = baseSize * sponsor.importance;

                return (
                    <Link
                        href="/sponsors"
                        key={sponsor.id}
                        className={`grid-item absolute rounded-full ${
                            index === 0 ? 'stamp top-0 left-15' : ''
                        }`}
                        style={{ width: `${size}px`, height: `${size}px` }}
                        onMouseEnter={(e) => {
                            if (sponsor.deal) {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setHoveredSponsor({
                                    id: sponsor.id,
                                    deal: sponsor.deal,
                                    position: {
                                        x: rect.right + 8,
                                        y: rect.top + rect.height / 2,
                                    },
                                });
                            }
                        }}
                        onMouseLeave={() => setHoveredSponsor(null)}
                    >
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <Image
                                src={sponsor.logo.url}
                                height={size}
                                width={size}
                                alt={sponsor.logo.alt || sponsor.name}
                                className="scale-105 object-cover rounded-full select-none overflow-hidden"
                            />
                        </div>
                    </Link>
                );
            })}
            {/* Tooltip rendered via Portal to escape stacking context */}
            {hoveredSponsor &&
                createPortal(
                    <div
                        className="fixed bg-primary-grey-light text-primary-white text-sm leading-snug
                                px-3 py-2 rounded-xl shadow-md
                                min-w-[11rem] text-center break-words whitespace-normal pointer-events-none
                                animate-in fade-in duration-200 z-50"
                        style={{
                            left: `${hoveredSponsor.position.x}px`,
                            top: `${hoveredSponsor.position.y}px`,
                            transform: 'translateY(-50%)',
                        }}
                    >
                        {hoveredSponsor.deal}
                    </div>,
                    document.body,
                )}
        </div>
    );
}

