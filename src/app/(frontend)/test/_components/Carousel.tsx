'use client'

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import SponsorBubbles from './SponsorBubbles'

// Could add playOnInit option to control when carousel starts playing in case of performance issues on lower end devices

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 0.5, stopOnMouseEnter: true, stopOnInteraction: false, startDelay: 200 }),
  ])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="whitespace-nowrap ">
        <SponsorBubbles />
        <SponsorBubbles />
      </div>
    </div>
  )
}
