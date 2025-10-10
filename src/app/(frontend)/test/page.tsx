'use client'

import { Button } from '@/components/ui/Button';
import { useAuthenticatedMember } from '@/features/members/data/tanstack/useAuthenticatedMember';

const test = () => {
    const member = useAuthenticatedMember();

    return (
        <div className="bg-[#161514] p-8 text-primary-white">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p>Paragraph</p>

            <p className="text-primary-white mt-5">Text Primary White</p>
            <p className="text-primary-grey bg-primary-white">Text Primary Grey</p>
            <p className="text-primary-blue bg-primary-white">Text Primary Blue</p>
            <p className="text-accent">Text Accent</p>
            <p className="text-accent-light">Text Accent Light</p>
            <p className="text-accent-dark">Text Accent Dark</p>
            <p className="text-primary-red">Text Primary Red</p>

            <div className="flex flex-col lg:flex-row gap-5 mt-5">
                <p className="text-primary-white lg:text-primary-red">Media Query</p>
                <p className="text-primary-white lg:text-primary-red">Media Query</p>
                <p className="text-primary-white lg:text-primary-red">Media Query</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 mt-5">
                <Button>This is a test Button</Button>
                <Button href="/">This is a button with a link</Button>
            </div>

            <div className = "flex flex-col gap-5 mt-5">
                {member ? <p>Signed in as {member?.email}</p> : <p>Not signed in</p>}
            </div>
        </div>
    );
};

export default test;
