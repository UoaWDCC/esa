'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { SponsorData } from '@/types/SponsorData';

export interface SponsorProps {
    sponsors: SponsorData[];
}

export default function SponsorBubbles({ sponsors }: SponsorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [baseSize, setBaseSize] = useState(60);

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
            {sponsors.map((sponsor) => {
                const size = baseSize * sponsor.importance;

                return (
                    <Link
                        href="/sponsors"
                        key={sponsor.id}
                        className={`grid-item absolute rounded-full group ${
                            sponsor.name === 'SaigonChill' ? 'stamp top-0 left-15' : ''
                        }`}
                        style={{ width: `${size}px`, height: `${size}px` }}
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
                        {/* tooltip bubble */}
                        {sponsor.deal && (
                            <div
                                className="absolute top-1/2 left-full ml-2
                                        bg-primary-grey-light text-primary-white text-sm leading-snug
                                        px-3 py-2 rounded-xl shadow-md opacity-0
                                        group-hover:opacity-100 transition-opacity duration-200
                                        min-w-[11rem] text-center break-words whitespace-normal z-50"
                                style={{
                                    transform: 'translateY(-50%)', 
                                }}
                            >
                                {sponsor.deal}
                            </div>

                        )}
                    </Link>
                );
            })}
        </div>
    );
}

//     return (
//         <div className="relative h-[24rem] inline-block ml-4 select-none" ref={containerRef}>
//             {sponsors.map((sponsor) => {
//                 const size = baseSize * sponsor.importance;

//                 return (
//                     <Link
//                         href="/sponsors"
//                         key={sponsor.id}
//                         className="grid-item absolute rounded-full overflow-visible group"
//                         style={{ width: `${size}px`, height: `${size}px` }}
//                     >
//                         <div
//                             className={`grid-item rounded-full select-none absolute overflow-hidden ${sponsor.name === 'SaigonChill' ? 'stamp top-0 left-15' : ''}`}
//                             style={{ width: `${size}px`, height: `${size}px` }}
//                             key={sponsor.id}
//                         >
//                             <Image
//                                 src={sponsor.logo.url}
//                                 height={size}
//                                 width={size}
//                                 alt={sponsor.logo.alt || 'Brand logo'}
//                                 className="scale-105 select-none"
//                             />
//                             {/* tooltip bubble */}
//                             {sponsor.deal && (
//                                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 
//                                     bg-primary-black text-primary-white text-sm 
//                                     px-3 py-1 rounded-full shadow-md opacity-0 
//                                     group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//                                     {sponsor.deal}
//                                 </div>
//                             )}
//                         </div>
//                     </Link>
//                 );
//             })}
//         </div>
//     );
// }

