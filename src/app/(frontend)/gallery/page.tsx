import Gallery from './_components/Gallery';
import Image from 'next/image';

export default function GalleryPage() {
    return (
        <div className="relative flex flex-col px-0 md:px-[6%] py-28 items-center min-h-screen min-w-full overflow-hidden container">
            <h2 className="text-primary-red px-[20vw]">Gallery</h2>
            <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
                <p className="text-primary-white mb-2">View our event images here!</p>
            </div>
            <hr className="relative mx-auto mt-4 w-[1200px] h-px border-0 bg-white/50 mb-15" />
            <Gallery />

            {/* Background star */}
            <div className="absolute left-0 -z-10">
                <Image
                    src="/images/signup/background_star.png"
                    alt="background star red"
                    width={700}
                    height={700}
                    className="w-[450px] deg-[40]"
                />
            </div>

            <div className="absolute -right-70 -bottom-70 -z-10 object-contain">
                <Image
                    src="/images/signup/background_star_white.png"
                    alt="background star red"
                    width={700}
                    height={700}
                    className="w-[650px]"
                />
            </div>
        </div>
    );
}
