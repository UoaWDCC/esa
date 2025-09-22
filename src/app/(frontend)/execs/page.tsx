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
        <main className="flex flex-col items-center px-[5%] md:px-[10%]">
            <div className="flex flex-col items-center font-bold mt-35 md:mt-25">
                <p className="text-primary-red-400 text-4xl md:text-5xl font-reservoir-grunge ">
                    Our Execs
                </p>
                <p className="text-xs md:text-md font-medium font-roboto-mono mt-2">
                    View our past and previous executives here!
                </p>
                <hr className="my-6 border-2 w-[75vw] min-w-[300px] max-w-[900px] border-primary-grey-light" />
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
        </main>
    );
}
