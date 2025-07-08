import SignupForm from './_components/SignupForm';

export default function SignupPage() {
    return (
        <div>
            <div className="flex flex-col my-30 space-y-4 items-center justify-center">
                <h2 className="underline">Join us!</h2>
                <p>Fill out our quick sign-up form below:</p>
                <SignupForm />
            </div>
        </div>
    );
}
