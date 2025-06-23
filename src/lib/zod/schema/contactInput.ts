"use client";

import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, "Name is required").max(50),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

export type ContactInput = z.infer<typeof contactSchema>;