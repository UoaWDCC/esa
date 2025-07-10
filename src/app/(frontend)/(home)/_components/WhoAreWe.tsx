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
    <div className="w-full flex justify-center md:w-auto">
      <div className="relative w-full">
        {/* bottom right frame*/}
        <Image
          src="/images/home/frame.png"
          alt="top left frame"
          width={60}
          height={60}
          className="absolute -bottom-10 -right-4 min-[490px]:-bottom-18 md:-bottom-10 w-[12%] md:w-[7.5%]"
        />

        {/* top left frame */}
        <Image
          src="/images/home/frame.png"
          alt="bottom right frame"
          width={60}
          height={60}
          className="absolute -top-5 -left-9 min-[490px]:-top-14 md:-top-5 scale-x-[-1] scale-y-[-1] w-[12%] md:w-[7.5%] -rotate-14 md:-rotate-18"
        />

        {/* main box component */}
        <div className="flex items-center justify-center gap-11 py-9 px-10 rounded-[3.5em] md:rounded-[5em] bg-[#ebe9e6]">
          {/* background */}
          <div className="absolute inset-0 bg-[url('/images/home/liquid_marbling_background.png')] bg-cover bg-center opacity-7 rounded-[3.5em] md:rounded-[5em]" />

          {/* Who are we image */}
          <div className="relative items-center hidden md:flex">
            <Image
              // ref={imgRef}
              src="/images/home/team_photo.png"
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
                src="/images/home/arrow.png"
                alt="arrow"
                width={105}
                height={105}
                className="absolute top-[2rem] left-[-6.2rem] hidden md:block w-[33%]"
              />
            </div>

            {/* description */}
            <p className="w-56 mb-4 font-medium text-center text-black text-base/tight bg">
              ESA Social Club is your go-to community for fun, connection, and a little friendly
              competition.
            </p>
            <div className="md:hidden relative w-90 flex justify-center px-4">
              <img
                src="/images/home/who_are_we_mobile.png"
                alt="team photo"
                className="w-[90%] h-auto max-w-full object-contain"
              />
            </div>
            <div className='w-[80%] md:w-88'>
              <p className="self-start text-sm tracking-[0.15em] text-black md:mb-4">
                Whether you&apos;re here to smash it at sports day, chill at pool night, or game it out at
                arcade night — we&apos;ve got you.
              </p>
              <p className="self-start text-sm tracking-[0.15em] text-black hidden md:block">
                ESA firmly believes that university life is not just about academic studies...but it&apos;s
                also about having fun, and meeting new friends!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
