'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactInput, contactSchema } from '@/lib/zod/schema/contactInput';
import ArrowUp from '@/components/icons/ArrowUp';
import FormInput from '@/components/ui/FormInput';
import FormTextarea from '@/components/ui/FormTextArea';
import { Button } from '@/components/ui/Button';
import ThankYou from './ThankYou';
import Image from 'next/image';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

    async function onSubmit(values: ContactInput) {
        try {
            // send form data to Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: "869b1607-6451-4661-b68c-27a1738c0bcc",
                    name: values.name,
                    email: values.email,
                    message: values.message,
                }),
            });

            // get resonse and check if it was successful
            const result = await response.json();
            if (result.success) {
                setSent(true);
            } else {
                console.error('Failed:', result.message);
            }
        } catch (error) {
            console.error('Unexpected error:', error);
        }
    }

    return (
        <div className="text-center text-primary-white flex flex-col items-center w-full">

            {/* Background star */}
            <div className="absolute top-[100%] md:top-[60%] lg:top-[50%] right-[-10%] -z-10 overflow-hidden">
                <Image
                    src="/images/signup/background_star.png"
                    alt="background star red"
                    width={700}
                    height={700}
                    className="w-[650px]"
                    />
            </div>
            
            <h3 className="underline underline-offset-4 mb-2">Let’s have a chat!</h3>
            <p className="mb-6 max-w-[60%]">
                We’d love to hear from you! You can contact us with the form below or send us an
                email or a call!
            </p>
            {!sent ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-lg px-5">
                    <FormInput
                        placeholder="Enter your name"
                        {...register('name')}
                        error={errors.name}
                        className="w-full"
                    />
                    <FormInput
                        placeholder="Enter your email"
                        {...register('email')}
                        error={errors.email}
                        className="w-full"
                    />
                    <FormTextarea
                        placeholder="Write your message"
                        {...register('message')}
                        error={errors.message}
                        className="w-full"
                    />
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex flex-row items-center gap-x-2"
                    >
                        {isSubmitting ? (
                            'Submitting...'
                        ) : (
                            <>
                                Send
                                <ArrowUp className="size-3" />
                            </>
                        )}
                    </Button>
                </form>
            ) : (
                <ThankYou />
            )}

            <div className="mt-7 px-5 text-left w-full max-w-lg">
                <div className="flex px-3 border-b border-primary-white justify-between">
                    <span className="max-w-lg">Email</span>
                    <span className="max-w-lg">uoaesa@gmail.com</span>
                </div>
                <div className="flex px-3 border-b border-primary-white justify-between mt-2">
                    <span className="max-w-lg">Contact number</span>
                    <span className="max-w-lg">020 4180 2771</span>
                </div>
            </div>
        </div>
    );
}
