import React from 'react';
import ExecCard from './ExecCard';
import { Exec } from '../page';

type ExecCategoryProps = {
    title?: string;
    blurb?: string;
    execs: Exec[];
};

export default function ExecCategory({ title, blurb, execs }: ExecCategoryProps) {
    const lastIndex = execs.length - 1;
    const isOdd = execs.length % 2 === 1;

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

            {/* Card grid / flex container */}
            <div className="mt-3 grid grid-cols-2 gap-y-10 gap-x-10 sm:gap-y-10 sm:gap-x-20 lg:gap-x-30">
                {execs.map((exec, i) => {
                    const shouldCenter = isOdd && i === lastIndex;
                    return (
                        /* identifies last card in the category and centers it while mantaining the same size as other cards */
                        <div
                            key={exec.id}
                            className={
                                `${shouldCenter ? 'col-span-2 flex justify-center mx-auto' : ''}` +
                                ' max-w-45 sm:max-w-auto'
                            }
                        >
                            <ExecCard exec={exec} tiltLeft={exec.tilt} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
