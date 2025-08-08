import Image from 'next/image';
import React from 'react';

export default function AboutUs() {
    return (
        <div className="flex items-center justify-center bg-[url(/images/aboutus/AboutUsImage.jpg)] bg-cover bg-no-repeat bg-center min-h-screen">
            <div className="flex items-center px-65">
                {/* About Us Text */}
                <div className="flex flex-col flex-1">
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
                    width={500}
                    height={500}
                    alt="ESA Mascot"
                    className="w-[20rem] flex-initial"
                />
            </div>
        </div>
    );
}
