'use client';
import Image from 'next/image';
import Title from '@/components/ui/Title';

export default function WhoAreWe() {
    return (
        <div className="w-full flex justify-center md:w-auto relative lg:px-[15%] md:px-[10%] px-[6%] mt-50 mb-28">
            {/* bottom right frame*/}
            <Image
                src="/images/home/frame.png"
                alt="top left frame"
                width={60}
                height={60}
                className="absolute hidden md:block right-50 -bottom-20 w-[5.5%] max-[1600px]:right-35 max-[1180px]:right-20"
            />

            {/* top left frame */}
            <Image
                src="/images/home/frame.png"
                alt="bottom right frame"
                width={60}
                height={60}
                className="absolute hidden md:block -top-14 left-50 scale-x-[-1] scale-y-[-1] w-[5.5%] -rotate-18 max-[1600px]:left-35 max-[1180px]:left-20"
            />

            {/* main box component */}
            <div className="flex items-center justify-center py-9 px-10 md:px-[8%] md:pl-[5%] md:py-[5%] gap-6 rounded-[3.5em] md:rounded-[6em] bg-primary-white">
                {/* background */}
                <div className="absolute inset-0 bg-[url('/images/home/liquid_marbling_background.png')] bg-cover bg-center opacity-7 rounded-[3.5em] md:rounded-[5em] border lg:mx-[15%] md:mx-[10%] mx-[6%]" />

                {/* Who are we image */}
                <Image
                    src="/images/home/team_photo.png"
                    alt="team photo"
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "auto" }}
                    sizes="100vw"
                    className="hidden md:block min-w-70 max-w-120"
                />

                {/* Right side text */}
                <div className="z-10 flex flex-col items-center gap-4 mb-auto">
                    <div className="relative">
                        {/* title */}
                        <h3 className="bg-primary-red-400 rounded-xl text-white px-5 py-2 mt-[15%] mb-[4%]">
                            Who are we?
                        </h3>
                        {/* arrow */}
                        <Image
                            src="/images/home/arrow.png"
                            alt="arrow"
                            width={105}
                            height={105}
                            className="absolute top-[6rem] max-[1820px]:left-[-8rem] max-[1482px]:left-[-6rem] left-[-10rem] block w-[35%] max-[1820px]:w-[28%] max-[1482px]:w-[20%] max-[1310px]:hidden"
                        />
                        {/* mobile arrow */}
                        <Image
                            src="/images/home/arrow3.svg"
                            alt="arrow3.svg"
                            width={39}
                            height={100}
                            className="absolute top-[7rem] left-[-2.5rem] md:hidden"
                        />
                    </div>

                    {/* description */}
                    <p className="max-w-72 mb-[4%] text-center text-black leading-6">
                        ESA Social Club is your go-to community for fun, connection and a little
                        friendly competition.
                    </p>
                    {/* content image */}
                    <div className="md:hidden relative w-full flex justify-center pl-3">
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
                                width={0}
                                height={0}
                                style={{ width: "100%", height: "auto" }}
                                sizes="100vw"
                                className="w-full max-w-[120px] h-auto object-contain"
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
                    <div className="flex flex-col w-full tracking-widest gap-4">
                        <p className="text-black mb-[4%]">
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
