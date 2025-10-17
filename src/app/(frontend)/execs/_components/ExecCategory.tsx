import React from 'react';
import ExecCard from './ExecCard';
import { Exec } from '../page';
import Title from '@/components/ui/Title';
import Image from 'next/image';

type ExecCategoryProps = {
    title?: string;
    blurb?: string;
    execs: Exec[];
};

export default function ExecCategory({ title, blurb, execs }: ExecCategoryProps) {
    return (
        <div className="relative flex flex-col pb-8 items-center w-full container">
            <div className="relative mx-auto text-center mb-6 inline-flex flex-col items-center">
                <Title className="my-5">{title}</Title>
                <p className="mt-3 text-sm max-w-[80%] sm:max-w-[60%] xl:max-w-[40%] mx-auto">
                    {blurb}
                </p>
            </div>

            <div className="mt-3 flex flex-wrap justify-center sm:gap-y-15 gap-y-10 gap-x-5 lg:gap-x-15 max-w-6xl">
                {execs.map((exec) => (
                    <div key={exec.id} className="max-w-35 md:max-w-50 lg:max-w-70 sm:max-w-auto">
                        <ExecCard exec={exec} tiltLeft={exec.tilt} />
                    </div>
                ))}
            </div>

            {/* Background star */}
            <div className="absolute left-[-40%] -z-10 overflow-hidden object-contain">
                <Image
                    src="/images/signup/background_star.png"
                    alt="background star red"
                    width={700}
                    height={700}
                    className="w-[650px]"
                />
            </div>

            <div className="absolute right-[-30%] bottom-[-7.5%] -z-10 object-contain">
                <Image
                    src="/images/signup/background_star.png"
                    alt="background star red"
                    width={700}
                    height={700}
                    className="w-[450px] deg-[40]"
                />
            </div>
        </div>
    );
}
