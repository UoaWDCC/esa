"use client"

import { useForm } from "react-hook-form";
import { SignupInput, signupSchema } from "@/lib/zod/schema/signupInput";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextArea";
import FormSelect from "@/components/ui/FormSelect";

export default function SignupForm() {
    const {
        register,
        handleSubmit,
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    placeholder="Enter your first name"
                    {...register("firstName")}
                    error={errors.firstName}
                    className="w-full"
                />
                <FormInput
                    placeholder="Enter your last name"
                    {...register("lastName")}
                    error={errors.lastName}
                    className="w-full"
                />
                <FormSelect
                    placeholder="Select your gender"
                    {...register("gender")}
                    error={errors.gender}
                    options={[
                        { value: "prefer not to say", label: "Prefer not to say" },
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                        { value: "other", label: "Other" },
                    ]}
                    className="w-full"   
                />
                <FormInput
                    placeholder="Enter your email"
                    {...register("email")}
                    error={errors.email}
                    className="w-full"
                />
                <FormSelect
                    placeholder="Select your year of study"
                    {...register("yearOfStudy")}
                    error={errors.yearOfStudy}
                    options={[
                        { value: "1st Year", label: "1st Year" },
                        { value: "2nd Year", label: "2nd Year" },
                        { value: "3rd Year", label: "3rd Year" },
                        { value: "4th Year+", label: "4th Year+" },
                    ]}
                    className="w-full"
                />
                <FormInput
                    placeholder="Enter your ethnicity"
                    {...register("ethnicity")}
                    error={errors.ethnicity}
                    className="w-full"
                />
                <FormInput
                    placeholder="Enter your student ID (optional)"
                    {...register("studentID")}
                    error={errors.studentID}
                    className="w-full"
                />
                <FormInput
                    placeholder="Enter your UPI (optional)"
                    {...register("upi")}
                    error={errors.upi}
                    className="w-full"
                />
                <FormInput
                    placeholder="Enter your membership card number (optional)"
                    {...register("membershipCardNumber")}
                    error={errors.membershipCardNumber}
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
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4 disabled:opacity-50 transition-opacity"
                    disabled={isSubmitting}
                >
                    Continue to Payment
                </button>
            </form>
        </div>
    );
}