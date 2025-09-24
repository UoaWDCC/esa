import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="flex items-center justify-center min-h-screen relative md:px-0 overflow-hidden">
            <Image
                src="/images/aboutus/AboutUsImage.jpg"
                alt="about us"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="flex items-center gap-[10%] relative z-10 lg:px-[13%] md:px-[10%] px-[6%]">
                {/* About Us Text */}
                <div className="flex flex-col text-center md:text-start w-full min-w-80">
                    <h2>ABOUT US</h2>
                    <p className="tracking-[0.15em]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                {/* About Us Image */}
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
