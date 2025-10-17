import SignupForm from './_components/SignupForm';
import Image from 'next/image';

export default function SignupPage() {
    return (
        <div className="relative flex flex-col mx-auto items-center container">
            <div className="relative flex flex-col my-30 space-y-4 items-center justify-center">
                <h2 className="underline">Join us!</h2>
                <p>Fill out our quick sign-up form below:</p>
                <SignupForm />
            </div>

            {/* Background star */}
            <div className="absolute hidden md:block -left-50 -bottom-60 -z-10 object-contain">
                <Image
                    src="/images/signup/background_star.png"
                    alt="background star red"
                    width={700}
                    height={700}
                    className="w-[650px]"
                />
            </div>

            <div className="absolute md:hidden -right-40 -bottom-30 -z-10 object-contain">
                <Image
                    src="/images/signup/background_star.png"
                    alt="background star red"
                    width={700}
                    height={700}
                    className="w-[450px] deg-[40]"
                />
            </div>
        </div>
    );
}
