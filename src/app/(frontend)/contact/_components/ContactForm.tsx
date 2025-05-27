"use client";

import { useForm } from "react-hook-form";
import { ContactInput, contactSchema } from "@/lib/zod/schema/contactInput";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";

export default function ContactForm() {
    const [sent, setSent] = useState(false);

    const form = useForm<ContactInput>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: ContactInput) {
        // implement
        // probably use webforms
    }

    return (
        <>
        {/*TODO implement!!*/}
        </>
    );
}