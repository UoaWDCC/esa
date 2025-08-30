import Image from "next/image"

export default function Gallery() {
    return (
        <div className="relative w-[90vw] min-h-screen">
        <Image
            src="/images/gallery/board.png"
            alt="Gallery Board Background"
            fill
            className="object-fill"
            priority
        />
        <div className="relative z-10">
            {/* Content goes here */}
        </div>
</div>
    )
}