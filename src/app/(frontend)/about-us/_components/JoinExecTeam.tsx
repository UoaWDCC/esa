import Image from 'next/image';
import React from 'react';

export default function JoinExecTeam() {
    return (
        <div className="flex items-center justify-start bg-[url(/images/aboutus/ExecTeamBg.jpg)] bg-cover bg-no-repeat bg-center min-h-[150vh] relative">
            <div className="flex flex-col px-6 md:px-0 md:pl-20 w-[38rem] gap-20">
                {/* First Half of text */}
                <div className="flex flex-col gap-5">
                    <h3>Join our Exec Team</h3>
                    <p className="text-xl tracking-[0.15em]">
                        ESA is a social club is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                    </p>
                </div>

                {/* Second Half of text */}
                <div className="flex flex-col gap-5">
                    <p className="text-xl tracking-[0.15em]">
                        ESA is a social club is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                    </p>
                    <p className="text-xl tracking-[0.15em]">
                        ESA is a social club is simply dummy text of the printing and typesetting
                    </p>
                </div>
            </div>

            <Image
                src={'/images/aboutus/ExecTeamPolaroid.png'}
                width={500}
                height={500}
                alt="ESA Exec Team Polaroid"
                className="absolute bottom-0 right-2"
            />
        </div>
    );
}
