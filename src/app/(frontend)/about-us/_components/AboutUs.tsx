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
                    <h3>ABOUT US</h3>
                    <p className="tracking-[0.15em]">
                        ESA brings students together to connect, share, and celebrate culture.
                        Whether you're from an Eastern background or just curious, everyone’s
                        welcome to join the fun!
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
