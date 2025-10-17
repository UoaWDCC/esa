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
                <div className="flex flex-col gap-5">
                    <h3>Join our Exec Team</h3>
                    <p className="tracking-[0.15em]">
                        Are you passionate about creating fun, inclusive events and making a real
                        impact on campus?
                    </p>
                </div>

                {/* Second Half of text */}
                <div className="flex flex-col gap-4">
                    <p className="tracking-[0.15em]">
                        Join the ESA’s executive team and help us bring students together to
                        celebrate culture, connect, and grow.
                    </p>
                    <p className="tracking-[0.15em]">
                        Develop leadership skills, connect with like minded individuals, and make
                        lasting memories!
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
