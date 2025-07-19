import { z } from "zod";

export const signupSchema = z.object({
    timestamp: z.date(),
    firstName: z.string().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
    lastName: z.string().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
    gender: z.enum(["male", "female", "other", "prefer not to say"], {
        // This is done so that the error message shown when an option is not selected is more user-friendly
        // instead of the default "Invalid enum value". This is because the placeholder option is not a valid enum value,
        // but i still want to show it as an option in the select dropdown to explain what the field is for.
        // If a label is added above the select dropdown, then this can be removed.
        errorMap: () => ({ message: "Please select a valid gender option" }),
    }),
    email: z.string().email("Invalid email address"),
    studentID: z.string().regex(/^\d{9}$/, "Student ID must be a 9-digit number").optional().or(z.literal("")),
    upi: z.string().regex(/^[a-z]{4}\d{3}$/, "UPI must be 4 lowercase letters followed by 3 digits").optional().or(z.literal("")),
    yearOfStudy: z.enum(["1st Year", "2nd Year", "3rd Year", "4th Year+"], {
        errorMap: () => ({ message: "Please select a valid year of study" }),
    }),
    ethnicity: z.string().min(1, "Ethnicity is required"),
    convincedByCommitteeMember: z.string().optional(),
    membershipCardNumber: z.string().regex(/^\d+$/, "Membership card number must be an integer").optional().or(z.literal("")),
    membershipPayment: z.string().optional(),
    paymentScreenshotLink: z.string().optional(),
    referrerName: z.string().optional(),
    notes: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupSchema>;