'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { SponsorParsed } from '@/types/parsers/parseSponsors'

export interface SponsorProps {
  sponsors: SponsorParsed[]
}

export default function SponsorBubbles({ sponsors }: SponsorProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Import Packery client side as needs client functionality. As any as idk how to deal with TypeScript error as Packery wasn't made for TypeScript
    import('packery' as any)
      .then((PackeryModule) => {
        const Packery = PackeryModule.default

        if (containerRef.current) {
          // Initialize Packery (Used for packing in the circles together)
          new Packery(containerRef.current, {
            itemSelector: '.grid-item', // Class name for items
            gutter: 20, // Space between items
            horizontal: true, // Enable horizontal layout
          })
        }
      })
      .catch((error) => {
        console.error('Failed to load Packery:', error)
      })
  }, [])

  return (
    <div className="h-[24rem] inline-block ml-4 select-none" ref={containerRef}>
      {sponsors.map((sponsor) => {
        const size = 90 * sponsor.importance

        return (
          <div
            className="grid-item relative rounded-full select-none"
            style={{ width: `${size}px`, height: `${size}px` }}
            key={sponsor.id}
          >
            <Image
              src={sponsor.logo.url}
              height={size}
              width={size}
              alt={sponsor.logo.alt || 'Brand logo'}
              className="select-none rounded-full"
            />
          </div>
        )
      })}
    </div>
  )
}
