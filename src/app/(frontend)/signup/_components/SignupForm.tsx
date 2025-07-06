"use client";

import { useForm } from "react-hook-form";
import { SignupInput, signupSchema } from "@/lib/zod/schema/signupInput";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextArea";
import FormSelect from "@/components/ui/FormSelect";
import { useState } from "react";
import {Button} from "@/components/ui/Button";
import {ChevronRight} from "lucide-react";

export default function SignupForm() {
    const [step, setStep] = useState(1);

    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignupInput>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            timestamp: new Date(),
            membershipPayment: "Bank Transferred",
            paymentScreenshotLink: "",
        },
    });

    const onSubmit = async (data: SignupInput) => {
        try {
            await createMember(data);
            alert("Signup successful!");
            reset();
        } catch (error: any) {
            alert(error.message);
        }
    };

    const createMember = async (data: SignupInput) => {
        const response = await fetch("/api/members", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(
                error.message ||
                "Signup failed. Member already exists or an error occurred."
            );
        }

        return response;
    };

    return (
        <div className="flex justify-center p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: 30}}
                            transition={{duration: 0.3}}
                            className="flex pl-20 pr-5 border-white border rounded-4xl w-fit"
                        >
                            <div className="py-10">
                                <div className="flex justify-between gap-x-15">
                                    <FormInput
                                        label="First Name"
                                        placeholder="Enter Here"
                                        {...register("firstName")}
                                        error={errors.firstName}
                                        className="w-full placeholder:text-gray"
                                    />
                                    <FormInput
                                        label="Last Name"
                                        placeholder="Enter Here"
                                        {...register("lastName")}
                                        error={errors.lastName}
                                        className="w-full placeholder:text-gray"
                                    />
                                </div>
                                <FormInput
                                    label="Enter your Email Address"
                                    placeholder="Enter Here"
                                    {...register("email")}
                                    error={errors.email}
                                    className="w-full placeholder:text-gray"
                                />
                                <div className="flex justify-between">
                                    <FormSelect
                                        label="Year of Study"
                                        placeholder="Choose Dropdown"
                                        {...register("yearOfStudy")}
                                        error={errors.yearOfStudy}
                                        options={[
                                            {value: "1st Year", label: "1st Year"},
                                            {value: "2nd Year", label: "2nd Year"},
                                            {value: "3rd Year", label: "3rd Year"},
                                            {value: "4th Year+", label: "4th Year+"},
                                        ]}
                                        className="w-full text-gray-300"
                                    />
                                    <FormInput
                                        label="UPI (Optional)"
                                        placeholder="Enter your UPI"
                                        {...register("upi")}
                                        error={errors.upi}
                                        className="w-full placeholder:text-gray"
                                    />
                                </div>
                                <FormInput
                                    label="Membership Card Number (Optional)"
                                    placeholder="Enter Card Number"
                                    {...register("membershipCardNumber")}
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
                                            "firstName",
                                            "lastName",
                                            "email",
                                            "yearOfStudy",
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
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, x: -30}}
                            transition={{duration: 0.3}}
                            className="space-y-4"
                        >
                            <FormInput
                                placeholder="Enter your ethnicity"
                                {...register("ethnicity")}
                                error={errors.ethnicity}
                                className="w-full"
                            />
                            <FormSelect
                                placeholder="Select your gender"
                                {...register("gender")}
                                error={errors.gender}
                                options={[
                                    {value: "prefer not to say", label: "Prefer not to say"},
                                    {value: "male", label: "Male"},
                                    {value: "female", label: "Female"},
                                    {value: "other", label: "Other"},
                                ]}
                                className="w-full"
                            />
                            <FormInput
                                placeholder="Enter the name of ESA committee member that convinced you to sign-up (optional)"
                                {...register("convincedByCommitteeMember")}
                                error={errors.convincedByCommitteeMember}
                                className="w-full"
                            />
                            <FormInput
                                placeholder="Enter the full name of person who referred you (optional)"
                                {...register("referrerName")}
                                error={errors.referrerName}
                                className="w-full"
                            />
                            <FormTextarea
                                placeholder="Enter any notes (optional)"
                                {...register("notes")}
                                error={errors.notes}
                                className="w-full"
                            />

                            <div className="flex justify-between gap-4">
                                <button
                                    type="button"
                                    className="w-1/2 bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition"
                                    onClick={() => setStep(1)}
                                >
                                    Back
                                </button>

                                <button
                                    type="submit"
                                    className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
                                    disabled={isSubmitting}
                                >
                                    Continue to Payment
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}
