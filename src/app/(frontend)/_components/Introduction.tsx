'use client'
import { useState } from 'react'

export default function Introduction() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="">
        <img src="/assets/rectangle_big.svg" alt="rectangle big" width={40} height={220} />
      </div>

      <div className="flex flex-col items-center h-90 w-150 rounded-4xl">
        {/* background */}
        <div className="absolute bg-[url('/assets/liquid_marbling_background.png')] opacity-10 bg-cover h-90 w-150 rounded-[5em]"/>
        
        {/* foreground */}
        <div className="flex flex-col items-center">
          {/* team photo with placeholder*/}
          <div className="relative right-40 top-10">
            {!isLoaded && (
              <div className="text-xs text-gray-500">image loading...</div>
            )}
            <img 
              src="/assets/team_photo.png" 
              alt="team photo" 
              width={220} 
              height={220} 
              onLoad={() => setIsLoaded(true)}
              className={`${isLoaded ? 'block' : 'hidden'}`}
              />
          </div>

          {/* title */}
          <div className="relative left-30 bottom-60 bg-[#871F1B] w-40 h-10 rounded-lg">
            <div className="relative text-center text-2xl text-white font-medium">
              Who are we?
              
            </div>
          </div>

          {/* description */}
          <div className="relative left-30 bottom-55 text-sm text-black text-center font-medium w-50">
            ESA Social Club is your go-to community for fun, connection, and a little friendly
            competition.
          </div>
          <div className="relative left-30 bottom-50 text-black text-xs w-60">
            Whether you're here to smash it at sports day, chill at pool night, or game it out at
            arcade night — we've got you.
          </div>
          <div className="relative left-30 bottom-45 text-black text-xs w-60">
            ESA firmly believes that university life is not just about academic studies...but ut's
            also about having fun, and meeting new friends!
          </div>
        </div>  

        
      </div>
    </>
  )
}
