import SignupForm from './_components/SignupForm';
import Image from 'next/image';

export default function SignupPage() {
    return (
        <div>
            <div className='absolute left-0 top-0 w-full h-full -z-5'>
                <Image
                    src={'/images/signup/background_star.png'}
                    alt="ESA Signup"
                    width={700}
                    height={700}
                    className="absolute left-[20%] -translate-x-[80%] -bottom-65 -z-10 hidden md:block"
                />
                <Image
                    src={'/images/signup/background_star_mobile.png'}
                    alt="ESA Signup"
                    width={400}
                    height={400}
                    className="absolute right-[40%] translate-x-[80%] -rotate-180 -bottom-60 -z-10 md:hidden block"
                />
            </div>

            <div className="flex flex-col my-30 space-y-4 items-center justify-center relative">
                <h2 className="underline">Join us!</h2>
                <p>Fill out our quick sign-up form below:</p>
                <SignupForm />
            </div>
        </div>
    );
}
