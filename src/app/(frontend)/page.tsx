import React from 'react';
import Sponsors from './_components/Sponsors';
import Hero from '@/app/(frontend)/_components/Hero'
import WhoAreWe from './_components/WhoAreWe'
import WhyJoin from './_components/WhyJoin'
import TextMarquee from "@/app/(frontend)/_components/TextMarquee";


export default async function HomePage() {
  return (
    <div className="text-primary-grey">
      {/* page content */}
        <div className="relative w-full text-white">
            <Hero/>
            <div className="absolute bottom-0 left-0 w-full z-50 md:translate-y-30">
                <TextMarquee
                    text={"📍 University of Auckland"}
                    bgColor="bg-primary-red-800"
                    textBg="bg-white"
                    textColor="text-primary-red-800"
                    wrapperClassName="-rotate-8 md:-rotate-3 origin-left scale-105 "
                />
                <TextMarquee
                    text={"Established in 1998"}
                    textBg="bg-primary-red-800"
                    bgColor="bg-white"
                    wrapperClassName="rotate-8 md:rotate-3 origin-right scale-105 -translate-y-13"
                />
            </div>
        </div>

        <div className="flex flex-col items-center w-full p-12 md:mt-20">
            <WhoAreWe/>
        </div>
        <div className="w-full bg-[#161514]">
            <Sponsors/>
        </div>
        <div className="w-full bg-[#161514]">
            <WhyJoin/>
        </div>
        <div className="w-full bg-[#161514] min-h-[100px] text-white">Replace with component 5</div>
        {/* place component 4 here and remove background colour */}
    </div>
  )
}