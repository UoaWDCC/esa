'use client'

import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Background Image covering full screen with zoom */}
      <div className="absolute inset-0 h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/HeroPageImage.png')] transform scale-100 transition-transform duration-500 ease-in-out"></div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <Image
          className="w-1000 h-auto"
          src="/images/HeroTitle.svg"
          alt=""
          width={100}
          height={100}
        />
        <div className="transform -translate-y-20">
          {/* Subtitle */}
          <p className="text-white text-xl md:text-2xl mb-6 font-smeltex-medium max-w-md">
            Your go-to university social club.
          </p>

          {/* Call to Action Button */}
          <div className="relative">
            <button className="bg-[#FFC857] hover:bg-[#FFD700] text-black font-mono py-4 px-18 rounded-full text-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Join the ESA family!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
