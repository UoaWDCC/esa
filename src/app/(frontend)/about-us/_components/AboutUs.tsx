import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="flex items-center justify-center min-h-screen relative px-6 md:px-0 overflow-hidden">
            <Image
                src="/images/aboutus/AboutUsImage.jpg"
                alt="about us"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="flex items-center gap-2 relative z-10">
                {/* About Us Text */}
                <div className="flex flex-col text-center md:text-start md:w-[28rem]">
                    <h3 className="hidden md:block">About Us</h3>
                    <h1 className="block mb-4 md:hidden">About Us</h1>
                    <p className="text-2xl md:text-xl tracking-[0.15em] max-w-[24rem] mx-auto md:max-w-full md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    {/* Mobile Mascot Image */}
                    <Image
                        src={'/images/logo/esa_mascot.png'}
                        priority
                        width={400}
                        height={400}
                        alt="ESA Mascot"
                        className="max-w-[18rem] translate-y-20 md:hidden block self-center"
                    />
                </div>
                {/* Desktop Mascot Image */}
                <Image
                    src={'/images/logo/esa_mascot.png'}
                    priority
                    width={400}
                    height={400}
                    alt="ESA Mascot"
                    className="max-w-[18rem] -translate-y-5 hidden md:block"
                />
            </div>
        </div>
    );
}
