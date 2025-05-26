'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function WhoAreWe() {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @font-face {
        font-family: 'smeltex-bold';
        src: url('/fonts/Smeltex-Bold.otf) format('opentype');
      }

      @font-face {
        font-family: 'smeltex-medium';
        src: url('/fonts/Smeltex-Medium.otf) format('opentype');
      }

      @font-face {
        font-family: 'resevoir-grunge';
        src: url('/fonts/resevoirgrunge.ttf) format('truetype');
      }
    `

    document.head.appendChild(style)

    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true)
    }
  }, [])

  return (
    <>
      <div className="relative w-fit h-fit">
        {/* top left frame*/}
        <Image
          src="/assets/frame.png"
          alt="top left frame"
          width={60}
          height={60}
          className="absolute -bottom-9 -right-6"
        />

        {/* bottom right frame */}
        <Image
          src="/assets/frame.png"
          alt="bottom right frame"
          width={60}
          height={60}
          className="absolute -top-9 -left-6 scale-x-[-1] scale-y-[-1]"
        />

        {/* main box component */}
        <div className="flex h-88 w-150 rounded-[5em] bg-[#ebe9e6]">
          {/* background */}
          <div className="absolute inset-0 bg-[url('/assets/liquid_marbling_background.png')] bg-cover bg-center opacity-9" />

          {/* foreground */}
          <div className="relative flex flex-col items-center">
            {/* team photo with placeholder*/}
            <div className="relative left-8 top-8">
              {/* {!isLoaded ? <div className="text-xs text-black">loading...</div> : null} */}
              <Image
                ref={imgRef}
                src="/assets/team_photo.png"
                alt="team photo"
                width={220}
                height={220}
                onLoad={() => setIsLoaded(true)}
                className={`${isLoaded ? 'block' : 'hidden'}`}
              />
            </div>

            {/* arrow */}
            <Image
              src="/assets/arrow.png" 
              alt="arrow" 
              width={85} 
              height={85}
              className="relative left-40 bottom-50" 
            />

            {/* title */}
            <div className="relative left-75 bottom-75 w-40 h-10 rounded-lg bg-[#871F1B]">
              <div
                className="text-center text-2xl text-white"
                style={{ fontFamily: 'smeltex-bold' }}
              >
                Who are we?
              </div>
            </div>

            {/* description */}
            <div
              className="relative left-75 bottom-70 text-sm text-black text-center font-medium w-43"
              style={{ fontFamily: 'smeltex-medium' }}
            >
              ESA Social Club is your go-to community for fun, connection, and a little friendly
              competition.
            </div>
            <div
              className="relative left-75 bottom-65 text-black text-xs w-60"
              style={{ fontFamily: 'resevoir-grunge' }}
            >
              Whether you're here to smash it at sports day, chill at pool night, or game it out at
              arcade night — we've got you.
            </div>
            <div
              className="relative left-75 bottom-60 text-black text-xs w-60"
              style={{ fontFamily: 'resevoir-grunge' }}
            >
              ESA firmly believes that university life is not just about academic studies...but it's
              also about having fun, and meeting new friends!
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
