'use client';

import ExecCategory from './_components/ExecCategory';
import { useExecs } from '@/features/execs/data/tanstack/useExecs';
import { useMemo } from 'react';

export interface Exec {
    id: string;
    name: string;
    role: string;
    about: string;
    imageUrl: string;
    tilt: boolean;
}

export default function Execs() {
    const { data, isLoading, error } = useExecs();

    const { groups } = useMemo(() => {
        if (!data) return { groups: [] };

        const roleMap: Record<string, Exec[]> = {};

        for (const e of data) {
            const exec: Exec = {
                id: e._id,
                name: e.name,
                role: e.role,
                about: e.about,
                imageUrl: e.image,
                tilt: Math.random() < 0.5,
            };
            (roleMap[exec.role] ??= []).push(exec);
        }

        return {
            groups: Object.entries(roleMap)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([role, execs]) => ({ role, execs })),
        };
    }, [data]);

    return (
        <section className="flex flex-col items-center lg:px-[13%] md:px-[10%] px-[6%] py-28">
            <div className="flex flex-col items-center">
                <h2 className="text-primary-red">
                    Our Execs
                </h2>
                <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
                    <p className="text-primary-white mb-2">View our next and previous events here!</p>
                </div>
                <hr className="mx-auto mb-15 mt-4 w-[1200px] h-px border-0 bg-white/50" />
            </div>

            {isLoading && <p>Loading execs…</p>}
            {error && <p>Error loading execs.</p>}

            {!isLoading &&
                !error &&
                groups.map((group) => (
                    <ExecCategory
                        key={group.role}
                        title={group.role}
                        blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" /* will need to be automated at some point in the future if each category wants its own blurb */
                        execs={group.execs}
                    />
                ))}
        </section>
    );
}
