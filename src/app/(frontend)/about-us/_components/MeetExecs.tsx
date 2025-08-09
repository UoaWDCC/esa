import React from 'react';
import Image from 'next/image';
import TopTear from './TopTear';
import BotTear from './BotTear';
import ExecCard from './ExecCard';
import { Button } from '@/components/ui/Button';

const execs = [
    {
        id: 1,
        name: 'Maternus',
        role: 'Co-President',
        about: 'Lorem ipsum dolor sit amet consectetur. Nisi venenatis nisl vitae tincidunt eu quis bibendum. Tincidunt nisl mattis cursus volutpat commodo venenatis euismod egestas. ',
        image: '/images/aboutus/MeetExecTest.jpg', // Remove from folder once integrated
        isImportant: true,
    },
    {
        id: 2,
        name: 'Maternus',
        role: 'Co-President',
        about: 'Lorem ipsum dolor sit amet consectetur. Nisi venenatis nisl vitae tincidunt eu quis bibendum. Tincidunt nisl mattis cursus volutpat commodo venenatis euismod egestas. ',
        image: '/images/aboutus/MeetExecTest.jpg', // Remove from folder once integrated
        isImportant: true,
    },
    {
        id: 3,
        name: 'Maternus',
        role: 'Co-President',
        about: 'Lorem ipsum dolor sit amet consectetur. Nisi venenatis nisl vitae tincidunt eu quis bibendum. Tincidunt nisl mattis cursus volutpat commodo venenatis euismod egestas. ',
        image: '/images/aboutus/MeetExecTest.jpg', // Remove from folder once integrated
        isImportant: true,
    },
    {
        id: 4,
        name: 'Maternus',
        role: 'Co-President',
        about: 'Lorem ipsum dolor sit amet consectetur. Nisi venenatis nisl vitae tincidunt eu quis bibendum. Tincidunt nisl mattis cursus volutpat commodo venenatis euismod egestas. ',
        image: '/images/aboutus/MeetExecTest.jpg', // Remove from folder once integrated
        isImportant: false,
    },
];

export default function MeetExecs() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 min-h-screen relative z-50 pt-25 pb-20">
            <h3 className="bg-primary-red-400 px-6 py-1 rounded-2xl">Meet The Execs</h3>

            <div className="w-full flex flex-wrap justify-center gap-5 z-50">
                {execs.map((exec, index) => {
                    if (exec.isImportant) {
                        return (
                            <ExecCard
                                key={exec.id}
                                index={index}
                                name={exec.name}
                                role={exec.role}
                                about={exec.about}
                                image={exec.image}
                            />
                        );
                    }
                })}
            </div>

            <Button href="/execs">Meet More Execs</Button>

            <Image
                src="/images/aboutus/path.svg"
                unoptimized={true}
                width={400}
                height={400}
                alt=""
                className="absolute right-0 top-45"
            />

            <TopTear />
            <BotTear />
        </div>
    );
}
