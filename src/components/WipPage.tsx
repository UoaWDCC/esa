import Image from 'next/image';
import Link from 'next/link';

export default function WipPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center px-4">
            {/* Stupid fat froggy */}
            <Image
                src="/images/mascot-frog.png"
                alt="Mascot Frog"
                className="absolute bottom-0 left-0"
                width={800}
                height={800}
                style={{ pointerEvents: 'none' }}
            />

            {/* Title/text */}
            <h3 className="text-primary-red p-2"> Work In Progress </h3>

            <div className="w-full mx-auto text-center text-primary-white bg-transparent flex flex-col items-center tracking-widest">
                <p className="text-primary-white mb-2">
                    You've come across a work-in-progress-page!
                </p>
                <p className="text-primary-white mb-1">
                    This website is currently under development by WDCC and <br />
                    we are working on implementing this page
                </p>
            </div>

            <hr className="my-4 border-t border-white-600 max-w-sm w-80 h-px" />

            {/* Links to other pages */}
            <div className="flex space-x-6 text-primary-white tracking-widest">
                {' '}
                <Link href="/public" className="hover:underline mx-5">
                    Go Home
                </Link>
                <Link href="/public" className="hover:underline mx-5">
                    About Us
                </Link>
                <Link href="/contact" className="hover:underline mx-5">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
