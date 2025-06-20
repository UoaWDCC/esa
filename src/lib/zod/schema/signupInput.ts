"use client"

import { z } from "zod";

export const signupSchema = z.object({
    timestamp: z.date(),
    firstName: z.string(),
    lastName: z.string(),
    gender: z.enum(["male", "female", "other", "prefer not to say"]).default("prefer not to say"),
    email: z.string().email("Invalid email address"),
    studentID: z.string().regex(/^\d{9}$/, "Student ID must be a 9-digit number").optional(),
    upi: z.string().regex(/^[a-z]{4}\d{3}$/, "UPI must be 4 lowercase letters followed by 3 digits").optional(),
    yearOfStudy: z.enum(["1st Year", "2nd Year", "3rd Year", "4th Year+"]).optional(),
    ethnicity: z.string().optional(),
    convincedByCommitteeMember: z.string().optional(),
    membershipCardNumber: z.string().optional(),
    membershipPayment: z.string().optional(),
    paymentScreenshotLink: z.string().optional(),
    referrerName: z.string().optional(),
    notes: z.string().optional(),
});