'use client';
import Image from 'next/image';
import Title from '@/components/ui/Title';

export default function WhoAreWe() {
    return (
        <div className="w-full flex justify-center md:w-auto">
            <div className="relative w-full">
                {/* bottom right frame*/}
                <Image
                    src="/images/home/frame.png"
                    alt="top left frame"
                    width={60}
                    height={60}
                    className="absolute hidden md:block -bottom-10 -right-4 min-[490px]:-bottom-18 md:-bottom-10 w-[12%] md:w-[7.5%] "
                />

                {/* top left frame */}
                <Image
                    src="/images/home/frame.png"
                    alt="bottom right frame"
                    width={60}
                    height={60}
                    className="absolute hidden md:block -top-5 -left-9 min-[490px]:-top-14 md:-top-5 scale-x-[-1] scale-y-[-1] w-[12%] md:w-[7.5%] -rotate-14 md:-rotate-18"
                />

                {/* main box component */}
                <div className="flex items-center justify-center gap-11 py-9 px-10 rounded-[3.5em] md:rounded-[5em] bg-primary-white">
                    {/* background */}
                    <div className="absolute inset-0 bg-[url('/images/home/liquid_marbling_background.png')] bg-cover bg-center opacity-7 rounded-[3.5em] md:rounded-[5em]" />

                    {/* Who are we image */}
                    <div className="relative items-center hidden md:flex">
                        <Image
                            src="/images/home/team_photo.png"
                            alt="team photo"
                            width={320}
                            height={320}
                        />
                    </div>

                    {/* Right side text */}
                    <div className="z-10 flex flex-col items-center gap-4 mt-4">
                        <div className="relative">
                            {/* title */}
                            <Title className="bg-primary-red-400 rounded-3xl px-5 py-4">
                                Who are we?
                            </Title>
                            {/* arrow */}
                            <Image
                                src="/images/home/arrow.png"
                                alt="arrow"
                                width={105}
                                height={105}
                                className="absolute top-[2rem] left-[-6.2rem] hidden md:block w-[33%]"
                            />
                            {/* mobile arrow */}
                            <Image
                                src="/images/home/arrow3.svg"
                                alt="arrow3.svg"
                                width={39}
                                height={100}
                                className="absolute top-[2rem] left-[-3.4rem] md:hidden"
                            />
                        </div>

                        {/* description */}
                        <div className="w-[88%] max-w-[265px] md:max-w-none md:w-56 mb-2 font-medium text-center text-black text-base/tight bg">
                            ESA Social Club is your go-to community for fun, connection and a little
                            friendly competition.
                        </div>
                        {/* content image */}
                        <div className="md:hidden relative w-90 flex justify-center pl-3">
                            <Image
                                src="/images/home/who_are_we_mobile.png"
                                alt="team photo"
                                width={120}
                                height={100}
                                className="w-[90%] h-auto max-w-full object-contain"
                            />
                            {/* Top Right Particles */}
                            <div className="flex flex-col justify-center">
                                <div className="relative">
                                    <Image
                                        src="\images\home\frame_tr_small.svg"
                                        alt="team_esa.svg"
                                        width={5}
                                        height={20}
                                        className="absolute right-0 top-[-7px]"
                                    />
                                    <Image
                                        src="\images\home\frame_tr_large.svg"
                                        alt="team_esa.svg"
                                        width={13}
                                        height={20}
                                        className="absolute right-[-12px] top-[-2px]"
                                    />
                                </div>
                                {/* The ESA Team */}
                                <Image
                                    src="\images\home\team_esa.svg"
                                    alt="team_esa.svg"
                                    width={131}
                                    height={100}
                                />
                                {/* Bottom Left Particles */}
                                <div className="relative">
                                    <Image
                                        src="\images\home\frame_tr_small.svg"
                                        alt="team_esa.svg"
                                        width={5}
                                        height={20}
                                        className="absolute left-0 bottom-[-8px] rotate-190"
                                    />
                                    <Image
                                        src="\images\home\frame_tr_large.svg"
                                        alt="team_esa.svg"
                                        width={13}
                                        height={20}
                                        className="absolute left-[-12px] bottom-[-2px] rotate-200"
                                    />
                                </div>
                                {/* The ESA Team Arrow */}
                                <Image
                                    src="\images\home\arrow2.svg"
                                    alt="team_esa.svg"
                                    width={50}
                                    height={15}
                                />
                            </div>
                        </div>
                        <div className="w-[80%] max-w-[265px] md:max-w-none md:w-88 text-center">
                            <p className="self-start text-sm text-black mb-4">
                                ESA firmly believes that university life is not just about academic
                                studies…but it&apos;s also about having fun, and meeting new
                                friends!
                            </p>
                            <p className="self-start text-sm text-black">
                                Whether you&apos;re here to smash it at sports day, chill at pool
                                night, or game it out at arcade night — we&apos;ve got you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
