import FrogBackground from '@/components/backgrounds/FrogBackground';
import {Button} from "@/components/ui/Button";

export default function notFound() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center text-center px-4">
            <FrogBackground />
            
            {/* Title/body text */}
            <h3 className="text-primary-red p-2"> 404 - Page Not Found </h3>
            
            <div className="w-full mx-auto text-center text-primary-white flex flex-col items-center tracking-widest">
                <p className="text-primary-white mb-1">
                    Oh no! It Looks like the page you&apos;re looking for doesn&apos;t exist.
                </p>
            </div>

            <Button className="mt-5" href="/" size="default">
                Return to Homepage
            </Button>
        </div>
    );
}
