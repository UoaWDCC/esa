import Image from 'next/image';
import { Exec } from '../page';

type ExecCardProps = {
    exec: Exec;
    tiltLeft: boolean;
};

export default function ExecCard({ exec, tiltLeft }: ExecCardProps) {
    const { name, role, about } = exec;
    const tiltDeg = tiltLeft ? '-3deg' : '3deg';

    return (
        <article className="flex flex-col items-center mx-auto">
            <div className="relative inline-block overflow-visible">
                <div
                    className="relative bg-white rounded-2xl p-2 z-10"
                    style={{ transform: `rotate(${tiltDeg})` }}
                >
                    {/* Image */}
                    <div className="w-[90%] mx-auto mt-[5%] bg-primary-white aspect-square">
                        <Image
                            src={exec.imageUrl}
                            alt={`${name} portrait`}
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Name & role */}
                    <div className="px-3 py-2 text-black">
                        <p className="font-bold">{name}</p>
                        <p className="text-xs">{role}</p>
                    </div>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200 pointer-events-none" />
            </div>

            {/* Optional bio */}
            <p className="hidden md:inline text-xs text-center mt-5">{about}</p>
        </article>
    );
}
