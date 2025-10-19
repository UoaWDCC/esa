import React from 'react';
import ExecPolaroid from './ExecPolaroid';

export interface ExecCardProps {
    index: number;
    firstName: string;
    lastName?: string;
    about?: string;
    image?: string;
    roles?: string[];
}

export default function ExecCard({
    index = 0,
    firstName = '',
    lastName = '',
    about = '',
    image = '',
    roles = [],
}: ExecCardProps) {
    const visibleName = `${firstName} ${lastName}`.trim() || firstName || 'Unnamed';

    return (
        <div className="flex flex-col items-center gap-5">
            <ExecPolaroid index={index} image={image || '/images/placeholder.png'} />
            <div className="flex flex-col items-center w-[20rem]">
                <h4 className="text-2xl font-semibold -mb-1">{visibleName}</h4>
                {roles.length > 0 && (
                    <p className="text-sm text-center mt-1 text-muted-foreground">
                        {roles.join(', ')}
                    </p>
                )}
                <div className="h-[1px] w-[80%] bg-white mb-5 mt-3"></div>
                <p className="text-center max-w-md text-sm">{about}</p>
            </div>
        </div>
    );
}
