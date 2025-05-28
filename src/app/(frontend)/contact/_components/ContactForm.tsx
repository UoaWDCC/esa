"use client";

import { useForm } from "react-hook-form";
import { ContactInput, contactSchema } from "@/lib/zod/schema/contactInput";
import {useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form, FormControl, FormField, FormItem, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import ArrowUp from "@/components/icons/ArrowUp";

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
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Enter your name"
                                    {...field}
                                    className="h-[35px] text-lg bg-primary-grey border border-white rounded-4xl text-primary-white placeholder:text-primary-white"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email"
                                    {...field}
                                    className="h-[35px] text-lg bg-primary-grey border border-white rounded-4xl text-primary-white placeholder:text-primary-white"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    placeholder="Write your message"
                                    className="min-h-[148px] text-lg bg-primary-grey border border-white rounded-xl text-primary-white placeholder:text-primary-white"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <button
                    className="flex flex-row bg-accent-light items-center gap-x-2 rounded-4xl px-3 py-1 hover:cursor-pointer"
                    type="submit"
                >
                    Send
                    <ArrowUp className="size-3"/>
                </button>
            </form>
        </Form>
    );
}