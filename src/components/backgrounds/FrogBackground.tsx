import Image from 'next/image';

export default function FrogBackground() {
    return (
        <Image
            src="/images/mascot-frog.png"
            alt="Mascot Frog"
            className="absolute bottom-0 left-0"
            width={800}
            height={800}
            style={{ pointerEvents: 'none' }}
        />
    );
}
