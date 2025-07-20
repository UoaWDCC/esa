import { Button } from '@/components/ui/Button';
import FrogBackground from './backgrounds/FrogBackground';

export default function WipPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center px-4">
            <FrogBackground />

            {/* Title/body text */}
            <h3 className="text-primary-red p-2"> Work In Progress </h3>

            <div className="mx-auto text-center text-primary-white flex flex-col items-center tracking-widest md:w-[40%] w-full">
                <p className="text-primary-white mb-2">
                    You&apos;ve come across a work-in-progress-page!
                </p>
                <p className="text-primary-white mb-1">
                    This website is currently under development and
                    we are working on implementing this page.
                </p>
            </div>

            {/* Links to other pages */}
            <Button className="mt-5" href="/" size="default">
                Return to Homepage
            </Button>
        </div>
    );
}
