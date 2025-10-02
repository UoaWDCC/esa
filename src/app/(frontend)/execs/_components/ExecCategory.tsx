import React from 'react';
import ExecCard from './ExecCard';
import { Exec } from '../page';
import Title from '@/components/ui/Title';

type ExecCategoryProps = {
    title?: string;
    blurb?: string;
    execs: Exec[];
};

export default function ExecCategory({ title, blurb, execs }: ExecCategoryProps) {
    return (
        <div className="flex flex-col pb-8 items-center w-full">
            <div className="relative mx-auto text-center mb-6 inline-flex flex-col items-center">
                <Title className="my-5">{title}</Title>
                <p className="mt-3 text-sm max-w-[80%] sm:max-w-[60%] xl:max-w-[40%] mx-auto">
                    {blurb}
                </p>
            </div>

            <div className="mt-3 flex flex-wrap justify-center sm:gap-y-15 gap-y-10 gap-x-5 lg:gap-x-15 max-w-6xl">
                {execs.map((exec) => (
                    <div
                        key={exec.id}
                        className="max-w-35 md:max-w-50 lg:max-w-70 sm:max-w-auto"
                    >
                        <ExecCard exec={exec} tiltLeft={exec.tilt} />
                    </div>
                ))}
            </div>
        </div>
    );
}
