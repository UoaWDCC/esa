import Image from 'next/image';
import PageTear from './PageTear';

export default function AboutUs() {
    return (
        <div className="flex items-center justify-center relative md:px-0">
            <Image
                src="/images/aboutus/AboutUsImage.jpg"
                alt="about us"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="flex justify-center items-center gap-[10%] relative z-10 lg:px-[13%] md:px-[10%] px-[6%] w-full lg:mt-50 lg:mb-80 mt-40 md:mb-50 mb-30">
                {/* About Us Text */}
                <div className="flex flex-col text-center md:text-start md:w-[28rem]">
                    <h3 className="hidden md:block">About Us</h3>
                    <h1 className="block mb-4 md:hidden">About Us</h1>
                    <p className="text-2xl md:text-xl tracking-[0.15em] max-w-[24rem] mx-auto md:max-w-full md:mx-0">
                        ESA brings students together to connect, share, and celebrate culture.
                        Whether you're from an Eastern background or just curious, everyone’s
                        welcome to join the fun!
                    </p>
                    {/* Mobile Mascot Image (separate one to put in the flex-col structure) */}
                    <Image
                        src={'/images/logo/esa_mascot.png'}
                        priority
                        width={400}
                        height={400}
                        alt="ESA Mascot"
                        className="max-w-[18rem] translate-y-5 md:hidden block self-center"
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

            <PageTear />
        </div>
    );
}
