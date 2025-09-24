import React from 'react';
import ExecCard from './ExecCard';
import { Exec } from '../page';

type ExecCategoryProps = {
    title?: string;
    blurb?: string;
    execs: Exec[];
};

export default function ExecCategory({ title, blurb, execs }: ExecCategoryProps) {
    return (
        <div className="flex flex-col py-8 px-10 items-center">
            <div className="relative mx-auto text-center mb-6 inline-flex flex-col items-center">
                <p className="font-reservoir-grunge text-3xl bg-primary-red-400 px-4 pt-2 pb-1 rounded-2xl">
                    {title}
                </p>
                <p className="mt-3 text-sm max-w-[80%] sm:max-w-[60%] xl:max-w-[40%] mx-auto">
                    {blurb}
                </p>
            </div>

            <div className="mt-3 flex flex-wrap justify-center gap-y-10 gap-x-10 lg:gap-x-15 max-w-2xl [@media(min-width:1921px)]:max-w-5xl">
                {execs.map((exec) => (
                    <div
                        key={exec.id}
                        className="max-w-45 sm:max-w-auto"
                    >
                        <ExecCard exec={exec} tiltLeft={exec.tilt} />
                    </div>
                ))}
            </div>
        </div>
    );
}
