import SignupForm from './_components/SignupForm';
import Image from 'next/image';

export default function SignupPage() {
    return (
<div className="relative overflow-hidden h-full">
    <div className="flex flex-col my-30 space-y-4 items-center justify-center relative">
        <h2 className="underline">Join us!</h2>
        <p>Fill out our quick sign-up form below:</p>
        <SignupForm />
    </div>

    <div className="absolute left-0 top-230 w-full -z-10">
        <Image
        src={"/images/signup/background_star.png"}
        alt={"ESA Signup"}
        width={700}
        height={700}
        className={"absolute left-[20%] -translate-x-[80%] -top-[750px] hidden md:block"}
        />
        <Image
        src="/images/signup/background_star_mobile.png"
        alt={"ESA Signup"}
        width={400}
        height={400}
        className={"absolute right-[40%] translate-x-[80%] -rotate-180 bottom-[-60px] md:hidden block select-none -z-5"}
        />
    </div>
</div>

    );
}
