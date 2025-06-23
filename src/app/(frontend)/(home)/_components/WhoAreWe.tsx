'use client'
// import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function WhoAreWe() {
  // const [isLoaded, setIsLoaded] = useState(false)
  // const imgRef = useRef<HTMLImageElement | null>(null)

  // useEffect(() => {
  //   if (imgRef.current && imgRef.current.complete) {
  //     setIsLoaded(true)
  //   }
  // }, [])

  return (
    <>
      <div className="relative">
        {/* bottom right frame*/}
        <Image
          src="/assets/frame.png"
          alt="top left frame"
          width={60}
          height={60}
          className="absolute -bottom-10 -right-2 w-[12%] md:w-[7.5%]"
        />

        {/* top left frame */}
        <Image
          src="/assets/frame.png"
          alt="bottom right frame"
          width={60}
          height={60}
          className="absolute -top-5 -left-9 scale-x-[-1] scale-y-[-1] w-[12%] md:w-[7.5%] -rotate-18"
        />

        {/* main box component */}
        <div className="flex items-center justify-center gap-11 py-9 px-10 rounded-[5em] bg-[#ebe9e6]">
          {/* background */}
          <div className="absolute inset-0 bg-[url('/assets/liquid_marbling_background.png')] bg-cover bg-center opacity-7 rounded-[5em]" />

          {/* Who are we image */}
          <div className="relative items-center hidden md:flex">
            <Image
              // ref={imgRef}
              src="/assets/team_photo.png"
              alt="team photo"
              width={320}
              height={320}
              // onLoad={() => setIsLoaded(true)}
            />
          </div>

          {/* Right side text */}
          <div className="z-10 flex flex-col items-center gap-4">
            <div className="relative">
              {/* title */}
              <div className="text-center text-white bg-[#871F1B] px-4 py-1.5 rounded-xl text-2xl font-reservoir-grunge">
                Who are we?
              </div>
              {/* arrow */}
              <Image
                src="/assets/arrow.png"
                alt="arrow"
                width={105}
                height={105}
                className="absolute top-[2rem] left-[-6.2rem] hidden md:block w-[33%]"
              />
            </div>

            {/* description */}
            <p className="w-56 mb-4 font-medium text-center text-black text-base/tight">
              ESA Social Club is your go-to community for fun, connection, and a little friendly
              competition.
            </p>
            <p className="self-start text-sm tracking-[0.15em] text-black w-86">
              Whether you&apos;re here to smash it at sports day, chill at pool night, or game it out at
              arcade night — we&apos;ve got you.
            </p>
            <p className="self-start text-sm tracking-[0.15em] text-black w-88">
              ESA firmly believes that university life is not just about academic studies...but it&apos;s
              also about having fun, and meeting new friends!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
