import Link from 'next/link';
import FrogBackground from '@/components/backgrounds/FrogBackground';

export default function notFound() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center px-4">
            <FrogBackground />
            
            {/* Title/body text */}
            <h3 className="text-primary-red p-2"> 404 - Page Not Found </h3>
            
            <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
                <p className="text-primary-white mb-2">
                    Oh no!
                </p>
                <p className="text-primary-white mb-1">
                    Looks like the page you&apos;re looking for doesn&apos;t exist.
                </p>
            </div>

            <div className="w-64 h-px bg-white opacity-50 my-4"></div>

            <div className="flex space-x-6 text-white">
                <Link href="/" className="hover:underline">Go Home</Link>
                <Link href="/about-us" className="hover:underline">About Us</Link>
                <Link href="/contact" className="hover:underline">Contact Us</Link>
            </div>
        </div>
    );
}
