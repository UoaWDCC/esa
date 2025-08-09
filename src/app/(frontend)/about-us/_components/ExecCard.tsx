import React from 'react';
import ExecPolaroid from './ExecPolaroid';

export interface ExecCardProps {
    index: number;
    name: string;
    role: string;
    about: string;
    image: string;
}

export default function ExecCard({ index, name, role, about, image }: ExecCardProps) {
    return (
        <div className="flex flex-col items-center gap-5">
            <ExecPolaroid index={index} image={image} />
            <div className="flex flex-col items-center w-[20rem]">
                <h4 className="text-2xl font-semibold -mb-1">{name}</h4>
                <p className="text-sm font-smeltex-medium">{role}</p>
                <div className="h-[1px] w-[80%] bg-white mb-5"></div>
                <p className="text-center max-w-md text-sm">{about}</p>
            </div>
        </div>
    );
}
