import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';

export default function JoinExecTeam() {
    return (
        <div className="flex items-center justify-center md:justify-start min-h-[150vh] relative overflow-hidden">
            <Image
                src="/images/aboutus/ExecTeamBg.jpg"
                alt="exec team background"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="flex flex-col px-6 items-center text-center md:text-left md:px-0 md:pl-20 w-[40rem] gap-20 relative z-10">
                {/* First Half of text */}
                <div className="flex flex-col gap-5">
                    <h3>Join our Exec Team</h3>
                    <p className="tracking-[0.15em]">
                        ESA is a social club is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                    </p>
                </div>

                {/* Second Half of text */}
                <div className="flex flex-col gap-4">
                    <p className="tracking-[0.15em]">
                        ESA is a social club is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                    </p>
                    <p className="tracking-[0.15em]">
                        ESA is a social club is simply dummy text of the printing and typesetting
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
                className="w-100 xl:w-125 h-auto absolute bottom-0 right-2"
            />
        </div>
    );
}
