// Import React and Next.js Image component
import React from 'react'
import Image from 'next/image'

// Import global styles (including Tailwind)
import '@/styles/global.css'
import { Button } from '@/components/ui/Button'

const WhyJoin = () => {
  return (
      // Root container with background image and content overlay
      <div id="root" className="relative h-[700px] md:min-h-screen min-w-[375px] overflow-hidden">
          {/* Background Image using Next.js Image component */}
          <Image
              src="/images/home/HeroPageImage.jpg"
              alt="Why Join Background"
              fill
              className="absolute origin-center object-cover scale-180 brightness-20 lg:scale-140"
          />
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
              <div className="flex flex-col items-start mt-5 ">
                  <Button href="/signup" className="px-8 py-3.25 z-10">
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
              className="absolute hidden lg:block right-0 -top-[29px] origin-top-right"
          />
      </div>
  );
}

export default WhyJoin
