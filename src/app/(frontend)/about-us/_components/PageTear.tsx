import React from 'react';
import Image from 'next/image';

interface PageTearProps {
    mirrorY?: boolean;
    isTop?: boolean;
}

export default function PageTear({ mirrorY = false, isTop = false }: PageTearProps) {
    return (
        <div
            className={`absolute w-full h-24 md:h-40 lg:h-48 xl:h-52 z-51 ${mirrorY ? 'scale-y-[-1]' : ''} ${isTop ? 'top-[-1px]' : 'bottom-[-1px]'}`}
        >
            <Image src="/images/aboutus/PageTear.png" alt="" fill={true} />
        </div>
    );
}
