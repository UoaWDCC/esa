'use client';
import Image from 'next/image';
import Title from '@/components/ui/Title';

export default function WhoAreWe() {
    return (
        <div className="w-full flex justify-center md:w-auto relative">
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
            <div className="flex items-center justify-center py-9 px-12 gap-6 rounded-[3.5em] md:rounded-[5em] bg-primary-white">
                {/* background */}
                <div className="absolute inset-0 bg-[url('/images/home/liquid_marbling_background.png')] bg-cover bg-center opacity-7 rounded-[3.5em] md:rounded-[5em] border" />

                {/* Who are we image */}
                <Image
                    src="/images/home/team_photo.png"
                    alt="team photo"
                    width={320}
                    height={320}
                    className="hidden md:block"
                />

                {/* Right side text */}
                <div className="z-10 flex flex-col items-center gap-4">
                    <div className="relative">
                        {/* title */}
                        <Title className="bg-primary-red-400 rounded-xl px-5 py-2">
                            Who are we?
                        </Title>
                        {/* arrow */}
                        <Image
                            src="/images/home/arrow.png"
                            alt="arrow"
                            width={105}
                            height={105}
                            className="absolute top-[2rem] left-[-8rem] hidden lg:block w-[42%]"
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
                    <p className="max-w-72 mb-2 text-center text-black leading-6">
                        ESA Social Club is your go-to community for fun, connection and a little
                        friendly competition.
                    </p>
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
                    <div className="flex flex-col max-w-110 tracking-widest gap-4">
                        <p className="text-black">
                            Whether you&apos;re here to smash it at sports day, chill at pool night,
                            or game it out at arcade night — we’ve got you.
                        </p>
                        <p className="text-black">
                            ESA firmly believes that university life is not just about academic
                            studies … but it’s also about having fun, and meeting new friends!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
