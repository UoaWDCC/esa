import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
    return (
        <div className="flex items-center justify-center bg-[url(/images/aboutus/AboutUsImage.jpg)] bg-cover bg-no-repeat bg-center min-h-screen relative">
            <div className="flex items-center">
                {/* About Us Text */}
                <div className="flex flex-col w-[29rem]">
                    <h3>ABOUT US</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
                        adipisci distinctio pariatur, deserunt perferendis temporibus nesciunt
                        veritatis amet at, provident fugit. Labore veniam id dolor debitis earum
                        quibusdam.
                    </p>
                </div>
                {/* About Us Image */}
                <Image
                    src={'/images/logo/esa_mascot.png'}
                    width={400}
                    height={400}
                    alt="ESA Mascot"
                    className="max-w-[20rem]"
                />
            </div>
        </div>
    );
}
