'use client';

import { useForm } from 'react-hook-form';
import { SignupInput, signupSchema } from '@/lib/zod/schema/signupInput';
import { motion, AnimatePresence } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/components/ui/FormInput';
import FormTextarea from '@/components/ui/FormTextArea';
import FormSelect from '@/components/ui/FormSelect';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArrowUp from '@/components/icons/ArrowUp';

export default function SignupForm() {
    const [step, setStep] = useState(1);
    const Arr = ['', ''];

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignupInput>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            timestamp: new Date(),
            membershipPayment: "Stripe",
            paymentScreenshotLink: "N/A",
        },
    });

    const checkCanCreate = async (data: SignupInput) => {
        try {
            const response = await fetch('/api/members/can-create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            return result.canCreate;
        } catch (error: any) {
            console.error("Error checking if member can be created:", error);
            alert(error.message);
            return false;
        }
    }

    // This function handles the form submission (upon clicking the "Continue to Payment" button).
    // For now it just creates the member in the database. In the future, it will also handle the payment process.
    const onSubmit = async (data: SignupInput) => {
        // Check if the member can be created
        const canCreate = await checkCanCreate(data);
        if (!canCreate) {
            alert("You have already signed up for the ESA membership for this year. If you think this is a mistake, please contact us.");
            return;
        }

        // If the member can be created, proceed to create the payment session
        try {
            const response = await fetch('/api/payment/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()
            console.log("Payment session result:", result)

            if (!response.ok) throw new Error(result.message || "Failed to start payment")

            window.location.href = result.url // TODO: Change this 
        
            reset();
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-center px-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border-white border rounded-[4rem] flex items-center justify-center bg-primary-grey"
            >
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.3 }}
                            className="flex pl-10 md:pl-20 pr-2 md:pr-5 w-fit"
                        >
                            <div className="py-10">
                                <div className="md:flex md:justify-between gap-x-15">
                                    <FormInput
                                        label="First Name"
                                        placeholder="Enter Here"
                                        {...register('firstName')}
                                        error={errors.firstName}
                                        className="w-full placeholder:text-gray"
                                    />
                                    <FormInput
                                        label="Last Name"
                                        placeholder="Enter Here"
                                        {...register('lastName')}
                                        error={errors.lastName}
                                        className="w-full placeholder:text-gray"
                                    />
                                </div>
                                <FormInput
                                    label="Enter your Email Address"
                                    placeholder="Enter Here"
                                    {...register('email')}
                                    error={errors.email}
                                    className="w-full placeholder:text-gray"
                                />
                                <div className="md:flex md:justify-between">
                                    <FormSelect
                                        label="Year of Study"
                                        placeholder="Choose Dropdown"
                                        {...register('yearOfStudy')}
                                        error={errors.yearOfStudy}
                                        options={[
                                            { value: '1st Year', label: '1st Year' },
                                            { value: '2nd Year', label: '2nd Year' },
                                            { value: '3rd Year', label: '3rd Year' },
                                            { value: '4th Year+', label: '4th Year+' },
                                        ]}
                                        className="w-full"
                                    />
                                    <FormInput
                                        label="UPI (Optional)"
                                        placeholder="Enter your UPI"
                                        {...register('upi')}
                                        error={errors.upi}
                                        className="w-full placeholder:text-gray"
                                    />
                                </div>
                                <FormInput
                                    label="Membership Card Number (Optional)"
                                    placeholder="Enter Card Number"
                                    {...register('membershipCardNumber')}
                                    error={errors.membershipCardNumber}
                                    className="w-full placeholder:text-gray"
                                />
                            </div>

                            <div className="flex justify-end items-center pl-2 md:pl-5">
                                <button
                                    type="button"
                                    className="h-fit hover:cursor-pointer"
                                    onClick={async () => {
                                        const valid = await trigger([
                                            'firstName',
                                            'lastName',
                                            'email',
                                            'yearOfStudy',
                                        ]);
                                        if (valid) setStep(2);
                                    }}
                                >
                                    <ChevronRight className="w-10 h-10 md:w-[45px] md:h-[45px]" />
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="flex w-fit items-center pl-2 md:pl-5 pr-10 md:pr-20"
                        >
                            <button
                                type="button"
                                className="hover:cursor-pointer h-fit pr-2 md:pr-5"
                                onClick={() => setStep(1)}
                            >
                                <ChevronLeft className="w-10 h-10 md:w-[45px] md:h-[45px]" />
                            </button>
                            <div className="flex flex-col justify-center py-10">
                                <div className="md:flex md:justify-between gap-x-15">
                                    <FormInput
                                        label="Ethnicity"
                                        placeholder="Enter Here"
                                        {...register('ethnicity')}
                                        error={errors.ethnicity}
                                        className="w-full placeholder:text-gray"
                                    />
                                    <FormSelect
                                        label="Gender"
                                        placeholder="Choose Dropdown"
                                        {...register('gender')}
                                        error={errors.gender}
                                        options={[
                                            {
                                                value: 'prefer not to say',
                                                label: 'Prefer not to say',
                                            },
                                            { value: 'male', label: 'Male' },
                                            { value: 'female', label: 'Female' },
                                            { value: 'other', label: 'Other' },
                                        ]}
                                        className="w-full"
                                    />
                                </div>
                                <FormInput
                                    label="Which ESA Committee Member convinced you to sign-up? (Optional)"
                                    placeholder="Enter the name of ESA committee member that convinced you to sign-up (optional)"
                                    {...register('convincedByCommitteeMember')}
                                    error={errors.convincedByCommitteeMember}
                                    className="w-full placeholder:text-gray"
                                />
                                <FormInput
                                    label="Person who referred you (Optional)"
                                    placeholder="Enter Full Name Here"
                                    {...register('referrerName')}
                                    error={errors.referrerName}
                                    className="w-full placeholder:text-gray"
                                />
                                <FormTextarea
                                    label="Notes (Optional)"
                                    placeholder="Enter Notes Here"
                                    {...register('notes')}
                                    error={errors.notes}
                                    className="w-full placeholder:text-gray"
                                    rows={1}
                                />
                                <Button
                                    type="submit"
                                    className="w-fit mx-auto flex items-center gap-x-2"
                                    disabled={isSubmitting}
                                >
                                    Continue to Payment
                                    <ArrowUp className="size-3" />
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
            <div className="flex flex-row mt-2 gap-2 justify-center">
                {Arr.map((_, index) => (
                    <div
                        key={index}
                        className={`rounded-full w-3 h-3 ${step === index + 1 ? 'bg-primary-red-800' : 'bg-white'}`}
                    />
                ))}
            </div>
        </div>
    );
}
