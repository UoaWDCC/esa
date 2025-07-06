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
            membershipPayment: 'Bank Transferred',
            paymentScreenshotLink: '',
        },
    });

    const onSubmit = async (data: SignupInput) => {
        try {
            await createMember(data);
            alert('Signup successful!');
            reset();
        } catch (error: any) {
            alert(error.message);
        }
    };

    const createMember = async (data: SignupInput) => {
        const response = await fetch('/api/members', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(
                error.message || 'Signup failed. Member already exists or an error occurred.',
            );
        }

        return response;
    };

    return (
        <div className="flex flex-col justify-center p-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border-white border rounded-4xl flex items-center justify-center"
            >
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.3 }}
                            className="flex pl-20 pr-5 w-fit"
                        >
                            <div className="py-10">
                                <div className="flex justify-between gap-x-15">
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
                                <div className="flex justify-between">
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

                            <div className="flex justify-end items-center pl-5">
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
                                    <ChevronRight size={45} />
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
                            className="flex w-fit items-center pl-5 pr-20"
                        >
                            <button
                                type="button"
                                className="hover:cursor-pointer h-fit pr-5"
                                onClick={() => setStep(1)}
                            >
                                <ChevronLeft size={45} />
                            </button>
                            <div className="flex flex-col justify-center py-10">
                                <div className="flex justify-between gap-x-15">
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
                                    className="w-fit mx-auto"
                                    disabled={isSubmitting}
                                >
                                    Continue to Payment
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
