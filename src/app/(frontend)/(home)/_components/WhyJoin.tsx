// Import React and Next.js Image component
import React from 'react'
import Image from 'next/image'

// Import global styles (including Tailwind)
import '@/styles/global.css'
import { Button } from '@/components/ui/Button'

const WhyJoin = () => {
  return (
      // Root container with background image and content overlay
      <div id="root" className="relative h-auto min-w-[375px] min-h-20 pt-5 pb-[min(30vw,20vh)] overflow-hidden">
          {/* Content overlay */}
          <div
              id="content"
              className="flex flex-col justify-center relative z-10 mx-[10vw] w-fit h-full"
          >
              {/* Heading SVG */}
              <Image
                  src="images/home/WhyJoinESA.svg"
                  alt="WhyJoinESA svg"
                  width="616"
                  height="196"
                  className="origin-bottom-left lg:scale-90"
              />
              {/* Body Text One*/}
              <div id="body-text-one" className="mt-8 lg:w-[50vw] max-w-[1000px]">
                  <p className="text-white text-lg lg:text-xl">
                      We&apos;re doing things our way with fresh events, fun people, and a vibe that
                      feels like your favourite hangout spot. Kinda new, kinda nostalgic, and always
                      a good time.
                  </p>
              </div>
              {/* Body Text Two*/}
              <div id="body-text-two" className="mt-4 lg:w-[50vw] max-w-[1000px]">
                  <p className="text-white text-lg lg:text-xl">
                      Whether you&apos;re here to smash it at sports day, chill at pool night, or
                      game it out at arcade night, we&apos;ve got you!
                  </p>
              </div>

              {/* Join button */}
              <div className="flex flex-col items-start mt-15 ">
                  <Button href="/signup" className="px-8 py-3.25 z-10">
                      Join the ESA Family!
                  </Button>
              </div>
          </div>

          {/*Film Strip image. Vertical on desktop at the right, horizontal on mobile at the bottom */}
          <Image
              src="/images/home/film_strip.png"
              alt="Film Strip"
              width="758"
              height="1072"
              className="absolute origin-bottom-left bottom-[33vw] right-[55vw] rotate-65 md:bottom-[25vw]
                lg:-rotate-15 lg:right-0 lg:-top-50 lg:origin-top-right lg:scale-120"
          />
      </div>
  );
}

export default WhyJoin
