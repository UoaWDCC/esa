// Import React and Next.js Image component
import React from 'react'
import Image from 'next/image'

// Import global styles (including Tailwind)
import '@/styles/global.css'
import { Button } from '@/components/ui/Button'

const WhyJoin = () => {
  return (
    // Root container with background image and content overlay
    <div id="root" className="relative min-h-[65vh] min-w-[375px] overflow-hidden">
      {/* Background Image using Next.js Image component */}
      <Image
        src="/images/home/HeroPageImage.jpg"
        alt="Why Join Background"
        fill
        className="absolute origin-center object-cover scale-180 brightness-30 "
      />
      {/* Content overlay */}
      <div id="content" className="relative my-[20vw] mx-[10vw] w-[80vw]">
        {/* Heading SVG */}
        <Image src="WhyJoinESA.svg" alt="Heading Decoration" width="616" height="196" />
        {/* Body Text One*/}
        <div id="body-text-one" className="mt-[6vh]">
          <p className="text-white text-lg font-smeltex-medium">
            We&apos;re doing things our way - fresh events, fun people, and a vibe that feels like
            your favourite hangout spot. Kinda new, kinda nostalgic, always a good time.
          </p>
        </div>
        {/* Body Text Two*/}
        <div id="body-text-two" className="mt-[3vh]">
          <p className="text-white text-lg font-smeltex-medium">
            Lorem ipsum dolor sit amet consecutetur. Elementum gravida egestas id consecutetur
            volutpat id nec consecutetur. Pretium pellentesque a consecutetur urna
          </p>
        </div>

        {/* Join button */}
        <div id="join-button" className="flex flex-col items-center mx-auto mt-[4.5vh]">
          <Button href="/signup" className="px-8 py-3.25">
            Join the ESA Family!
          </Button>
        </div>
      </div>
      {/*Film Strip image right-hand side of the page, Only visible on desktop*/}
      <Image
        src="/images/home/film_strip.png"
        alt="Film Strip"
        width="758"
        height="1072"
        className="absolute hidden 2xl:block right-0 -top-[29px] origin-top-right"
      />
    </div>
  )
}

export default WhyJoin
