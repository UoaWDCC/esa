import React from 'react';
import TopTear from './TopTear';
import BotTear from './BotTear';
import Link from 'next/link';
import ExecCard from './ExecCard';

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

            <div className="w-full flex flex-wrap justify-center gap-5">
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

            <Link
                href={'/execs'}
                className="bg-accent text-black rounded-2xl py-1 px-6 font-roboto-mono"
            >
                Meet More Execs
            </Link>

            <TopTear />
            <BotTear />
        </div>
    );
}
