'use client'

import Image from 'next/image'
import { sponsors } from '../sponsors'
import { useEffect, useRef } from 'react'

export default function SponsorBubbles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Import Packery client side as needs client functionality. As any as idk how to deal with TypeScript error as Paackery wasn't made for TypeScript
    import('packery' as any)
      .then((PackeryModule) => {
        const Packery = PackeryModule.default

        if (containerRef.current) {
          // Initialize Packery
          new Packery(containerRef.current, {
            itemSelector: '.grid-item', // Class name for items
            gutter: 10, // Space between items
            horizontal: true, // Enable horizontal layout
          })
        }
      })
      .catch((error) => {
        console.error('Failed to load Packery:', error)
      })
  }, [])

  return (
    <div className="h-[24rem] inline-block" ref={containerRef}>
      {sponsors.map((sponsor) => {
        const size = 90 * sponsor.scale

        return (
          <div
            className="grid-item rounded-full"
            style={{ width: `${size}px`, height: `${size}px` }}
            key={sponsor.name}
          >
            <Image
              src={sponsor.logo}
              fill={true}
              alt="Brand Logo"
              className="select-none rounded-full object-fill"
            />
          </div>
        )
      })}
    </div>
  )
}
