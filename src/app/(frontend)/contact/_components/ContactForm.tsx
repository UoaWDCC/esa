"use client";

import { useForm } from "react-hook-form";
import { ContactInput, contactSchema } from "@/lib/zod/schema/contactInput";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
        console.log(values);
    }

    return (
        <div className="w-full mx-auto text-center text-primary-white bg-transparent flex flex-col items-center">
            <h3 className="underline underline-offset-4 mb-2">
                Let’s have a chat!
            </h3>
            <p className="mb-6 text-xs max-w-[60%]">
                We’d love to hear from you! You can contact us with the
                form below or send us an email or a call!
            </p>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 w-full max-w-lg px-5"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your name"
                                        {...field}
                                        className="h-[45px] text-base bg-transparent border border-primary-white rounded-full placeholder:text-primary-white px-4"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your email"
                                        {...field}
                                        className="h-[45px] text-base bg-transparent border border-primary-white rounded-full placeholder:text-primary-white px-4"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Write your message"
                                        className="h-[148px] overflow-y-auto text-base bg-transparent border border-primary-white rounded-xl placeholder:text-primary-white px-4 py-2"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end mt-1">
                        <button
                            type="submit"
                            className="flex items-center gap-x-2 text-xs bg-accent text-black font-semibold rounded-full px-4 py-2 hover:brightness-110 transition"
                        >
                            Send
                            <ArrowUp className="size-3" />
                        </button>
                    </div>
                </form>
            </Form>

            <div className="mt-7 px-5 text-xs text-left w-full max-w-lg">
                <div className="flex px-3 border-b border-primary-white justify-between">
                    <span className="max-w-lg">Email</span>
                    <span className="max-w-lg">sdkfj@asadljcf.com</span>
                </div>
                <div className="flex px-3 border-b border-primary-white justify-between mt-2">
                    <span className="max-w-lg">Contact number</span>
                    <span className="max-w-lg">90812 2134</span>
                </div>
            </div>
        </div>
    );
}
