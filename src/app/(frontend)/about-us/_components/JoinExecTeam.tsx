import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import PageTear from './PageTear';

export default function JoinExecTeam() {
    return (
        <div className="flex items-center justify-center md:justify-start md:min-h-[150vh] min-h-[100vh] relative md:py-0 py-30">
            <Image
                src="/images/aboutus/ExecTeamBg.jpg"
                alt="exec team background"
                fill
                priority
                className="object-cover md:object-center"
                style={{ objectPosition: '75% center' }}
            />

            <div className="flex flex-col md:items-start items-center text-center md:text-left lg:ml-[13%] md:m-[10%] mx-[6%] lg:w-[48%] w-[full] gap-5 relative z-10">
                {/* First Half of text */}
                <div className="flex flex-col gap-3 md:gap-5">
                    <h3 className="hidden md:block">Join our Exec Team</h3>
                    <h1 className="block mb-4 md:hidden max-w-[24rem] leading-none">
                        Join Our Exec Team
                    </h1>
                    <p className="text-2xl md:text-xl tracking-[0.15em] max-w-[24rem] mx-auto md:max-w-full md:mx-0">
                        Are you passionate about creating fun, inclusive events and making a real
                        impact on campus? Join the ESA Executive Team and become part of a group of driven, creative students dedicated to bringing our community together. 
                    </p>
                </div>

                {/* Second Half of text */}
                <div className="flex flex-col gap-2 md:gap-5 mb-15">
                    <p className="text-2xl md:text-xl tracking-[0.15em] max-w-[24rem] mx-auto md:max-w-full md:mx-0">
                        As an exec, you&apos;ll help plan and run exciting events, celebrate diverse cultures, and create opportunities for students to connect, learn, and grow. It&apos;s a chance to build leadership experience, make new friends, and shape the future of ESA on campus.
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
