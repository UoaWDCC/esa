'use client'

import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import SponsorBubbles, { SponsorProps } from './SponsorBubbles'

// Could add playOnInit option to control when carousel starts playing in case of performance issues on lower end devices
// Additional Settings can be read at Embla docs.
// Carousel sometimes will bug if there is not enough overflow so if the SponsorBubbles components isn't long enough just add more. Probably a better solution that manually doing this but this works for now

export default function Carousel({ sponsors }: SponsorProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({ speed: 1.2, stopOnMouseEnter: true, stopOnInteraction: false, startDelay: 200 }),
  ])

  return (
    <div className="overflow-hidden " ref={emblaRef}>
      <div className="whitespace-nowrap">
        <SponsorBubbles sponsors={sponsors} />
        <SponsorBubbles sponsors={sponsors} />
      </div>
    </div>
  )
}
