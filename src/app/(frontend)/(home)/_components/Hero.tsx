'use client'

import Image from 'next/image'
import {Button} from "@/components/ui/Button";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0"></div>

      {/* Background Image covering full screen with zoom */}
      <div className="absolute inset-0 h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/home/HeroPageImage.png')] transform scale-100 transition-transform duration-500 ease-in-out">

          {/* Hero Section */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 xl:px-20 text-center">
            <Image
              className="w-full h-auto hidden md:block"
              src="/images/HeroTitle.svg"
              alt="ESA title"
              width={100}
              height={100}
            />
            <Image
                className="w-full h-auto block md:hidden"
                src="/images/home/HeroTitleMobile.svg"
                alt="ESA title"
                width={100}
                height={100}
            />
            <div className="transform -translate-y-5 lg:-translate-y-[55%] md:-translate-y-[50%]">
              {/* Subtitle */}
              <p className="text-white text-lg md:text-xl mb-6 font-smeltex-medium max-w-md">
                Your go-to university social club.
              </p>
                <Button href="/signup" size="lg">
                    Join the ESA Family!
                </Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
