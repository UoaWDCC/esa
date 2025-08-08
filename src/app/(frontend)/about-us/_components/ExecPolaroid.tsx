import Image from 'next/image';
import React from 'react';

interface ExecPolaroidProps {
    index: number;
    image: string;
}

export default function ExecPolaroid({ index, image }: ExecPolaroidProps) {
    return (
        <div className="bg-[url(/images/aboutus/ExecImageBg.png)] bg-no-repeat bg-center p-20 bg-contain scale-x-[-1] relative">
            <Image
                src={`/images/aboutus/RedPin.svg`}
                width={40}
                height={40}
                unoptimized={true}
                alt={`Pin`}
                className="absolute -top-1 right-[38%] scale-x-[-1]"
            />
            <Image
                src={image}
                width={450}
                height={450}
                alt={`Exec Polaroid ${index}`}
                className="rotate-[9deg] scale-120 translate-y-2 -translate-x-2.5"
            />
        </div>
    );
}
