import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
    return (
        <div className="flex items-center justify-center bg-[url(/images/aboutus/AboutUsImage.jpg)] bg-cover bg-no-repeat bg-center min-h-screen relative px-6 md:px-0">
            <div className="flex items-center gap-2">
                {/* About Us Text */}
                <div className="flex flex-col text-center md:text-start md:w-[28rem]">
                    <h3>ABOUT US</h3>
                    <p className="text-xl tracking-[0.15em]">
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
