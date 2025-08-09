'use client';

import React from 'react';
import Image from 'next/image';
import TopTear from './TopTear';
import BotTear from './BotTear';
import ExecCard from './ExecCard';
import { Button } from '@/components/ui/Button';
import { useExecs } from '@/features/execs/data/tanstack/useExecs';

export default function MeetExecs() {
    const { data: execs } = useExecs();

    return (
        <div className="flex flex-col items-center justify-center gap-10 min-h-screen relative z-50 pt-25 pb-20">
            <h3 className="bg-primary-red-400 px-6 py-1 rounded-2xl">Meet The Execs</h3>

            <div className="w-full flex flex-wrap justify-center gap-5 z-50">
                {(execs ?? [])
                    .filter((e) => e.isImportant)
                    .map((exec, index) => {
                        return (
                            <ExecCard
                                key={exec._id}
                                index={index}
                                name={exec.name}
                                role={exec.role}
                                about={exec.about}
                                image={exec.image}
                            />
                        );
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
