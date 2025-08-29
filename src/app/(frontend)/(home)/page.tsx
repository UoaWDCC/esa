import React from 'react';
import Sponsors from '@/app/(frontend)/(home)/_components/Sponsors';
import Hero from '@/app/(frontend)/(home)/_components/Hero';
import WhoAreWe from '@/app/(frontend)/(home)/_components/WhoAreWe';
import WhyJoin from '@/app/(frontend)/(home)/_components/WhyJoin';
import Events from '@/app/(frontend)/(home)/_components/Events/Events';
import TextMarquee from '@/app/(frontend)/(home)/_components/Marquees/TextMarquee';
import PlainMarquee from '@/app/(frontend)/(home)/_components/Marquees/PlainMarquee';

export default function HomePage() {
    return (
        <div className="text-primary-grey">
            {/* page content */}
            <div className="relative w-full text-white">
                <Hero />
                <div className="absolute bottom-0 left-0 w-full -translate-y-15 md:-translate-0">
                    <TextMarquee
                        text={'📍 University of Auckland'}
                        bgColor="bg-primary-red-800"
                        textBg="bg-white"
                        textColor="text-primary-red-800"
                        wrapperClassName="skew-y-10 md:skew-y-6 origin-left"
                    />
                    <TextMarquee
                        text={'Established in 1998'}
                        textBg="bg-primary-red-800"
                        bgColor="bg-white"
                        wrapperClassName="-skew-y-6 md:-skew-y-3 origin-right scale-105 -translate-y-13"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center w-full p-5 md:mt-20">
                <WhoAreWe />
            </div>
            <div className="w-full bg-[#161514]">
                <Sponsors />
            </div>
            <div className="w-full bg-[#161514]">
                <WhyJoin />
            </div>
            <div className="w-full bg-[#161514]">
                <Events />
            </div>
            <PlainMarquee />
        </div>
    );
}
