'use client'
import { useState, useEffect, useRef } from 'react'

export default function WhoAreWe() {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @font-face {
        font-family: 'smeltex-bold';
        src: url('/public/assets/Smeltex-Bold.otf) format('opentype');
      }

      @font-face {
        font-family: 'smeltex-medium';
        src: url('/public/assets/Smeltex-Medium.otf) format('opentype');
      }

      @font-face {
        font-family: 'resevoir-grunge';
        src: url('/public/Smeltex-Medium.otf) format('truetype');
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
        <img
          src="/assets/frame.png" 
          alt="top left frame" 
          width={60} 
          className="absolute -bottom-9 -right-6"
        />
         
        {/* bottom right frame */}
        <img 
          src="/assets/frame.png" 
          alt="bottom right frame" 
          width={60} 
          className="absolute -top-9 -left-6 scale-x-[-1] scale-y-[-1]"
        />
          
        <div className="relative h-88 w-150 rounded-[5em] overflow-hidden flex justify-items-center justify-center bg-[#ebe9e6]">
          {/* background */}
          <div className="absolute inset-0 bg-[url('/assets/liquid_marbling_background.png')] bg-cover bg-center opacity-9" />

          {/* foreground */}
          <div className="flex flex-col items-center">

            {/* team photo with placeholder*/}
            <div className="relative right-38 top-9">
              {!isLoaded ? <div className="text-xs text-black">loading...</div> : null}
              <img
                ref={imgRef}
                src="/assets/team_photo.png"
                alt="team photo"
                width={220}
                onLoad={() => setIsLoaded(true)}
                className={`${isLoaded ? 'block' : 'hidden'}`}
              />
            </div> 

            {/* arrow */}
            <div className="relative right-6 bottom-50">
              <img src="/assets/arrow.png" alt="arrow" width={85} />
            </div>

            {/* title */}
            <div className="relative left-30 bottom-75 bg-[#871F1B] w-40 h-10 rounded-lg">
              <div
                className="text-center text-2xl text-white"
                style={{ fontFamily: 'smeltex-bold' }}
              >
                Who are we?
              </div>
            </div>

            {/* description */}
            <div
              className="relative left-30 bottom-70 text-sm text-black text-center font-medium w-43"
              style={{ fontFamily: 'smeltex-medium' }}
            >
              ESA Social Club is your go-to community for fun, connection, and a little friendly
              competition.
            </div>
            <div
              className="relative left-30 bottom-65 text-black text-xs w-60"
              style={{ fontFamily: 'resevoir-grunge' }}
            >
              Whether you're here to smash it at sports day, chill at pool night, or game it out at
              arcade night — we've got you.
            </div>
            <div
              className="relative left-30 bottom-60 text-black text-xs w-60"
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
