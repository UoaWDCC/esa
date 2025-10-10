import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import PageTear from './PageTear';

export default function JoinExecTeam() {
    return (
        <div className="flex items-center justify-center md:justify-start md:min-h-[150vh] min-h-[100vh] relative">
            <Image
                src="/images/aboutus/ExecTeamBg.jpg"
                alt="exec team background"
                fill
                priority
                className="object-cover md:object-center"
                style={{ objectPosition: '75% center' }}
            />

            <div className="flex flex-col md:items-start items-center text-center md:text-left lg:ml-[13%] md:m-[10%] mx-[6%] lg:w-[45%] w-[full] gap-20 relative z-10">
                {/* First Half of text */}
                <div className="flex flex-col gap-3 md:gap-5">
                    <h3 className="hidden md:block">Join our Exec Team</h3>
                    <h1 className="block mb-4 md:hidden max-w-[24rem] leading-none">
                        Join Our Exec Team
                    </h1>
                    <p className="text-2xl md:text-xl tracking-[0.15em] max-w-[24rem] mx-auto md:max-w-full md:mx-0">
                        ESA is a social club is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy text ESA
                        is a social club is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                    </p>
                </div>

                {/* Second Half of text */}
                <div className="flex flex-col gap-2 md:gap-5">
                    <p className="text-2xl md:text-xl tracking-[0.15em] max-w-[24rem] mx-auto md:max-w-full md:mx-0">
                        ESA is a social club is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                    </p>
                </div>

                {/* Need to add href once link is decided */}
                <Button>Join the Exec Team</Button>
            </div>

            <Image
                src={'/images/aboutus/ExecTeamPolaroid.png'}
                width={500}
                height={500}
                alt="ESA Exec Team Polaroid"
                className="w-100 xl:w-140 h-auto absolute bottom-25 right-20 hidden md:block"
            />

            <PageTear isTop={true} mirrorY={true} />
            <PageTear />
        </div>
    );
}
