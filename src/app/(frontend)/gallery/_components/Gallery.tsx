import Image from "next/image"
import Polaroid from "./Polaroid"

export default function Gallery() {
    return (
        <div>
            <div className="relative w-[80vw] min-h-screen py-20 px-12">
                <Image
                    src="/images/gallery/board.png"
                    alt="Gallery Board Background"
                    fill
                    className="object-fill"
                    priority
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    <Polaroid />
                    <Polaroid />
                    <Polaroid variation="large" />
                    <Polaroid />
                    <Polaroid />
                    <Polaroid variation="large" />
                    <Polaroid variation="large" />
                    <Polaroid />
                    <Polaroid />
                </div>
            </div>
        </div>
    )
}