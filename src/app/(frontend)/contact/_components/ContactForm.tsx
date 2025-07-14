"use client";

import { useForm } from "react-hook-form";
import { ContactInput, contactSchema } from "@/lib/zod/schema/contactInput";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import ArrowUp from "@/components/icons/ArrowUp";
import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextArea";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-lg px-5">
        <FormInput
          placeholder="Enter your name"
          {...register("name")}
          error={errors.name}
          className="w-full"
        />
        <FormInput
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email}
          className="w-full"
        />
        <FormTextarea
          placeholder="Write your message"
          {...register("message")}
          error={errors.message}
          className="w-full"
        />
        <div className="w-full flex justify-end">
          <Button type="submit" disabled={isSubmitting} className="flex flex-row items-center gap-x-2">
            {isSubmitting ? "Submitting..." : (
              <>
                Send
                <ArrowUp className="size-3" />
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="mt-7 px-5 text-xs text-left w-full max-w-lg">
        <div className="flex px-3 border-b border-primary-white justify-between">
          <span className="max-w-lg">Email</span>
          <span className="max-w-lg">uoaesa@gmail.com</span>
        </div>
        <div className="flex px-3 border-b border-primary-white justify-between mt-2">
          <span className="max-w-lg">Contact number</span>
          <span className="max-w-lg">020 4180 2771</span>
        </div>
      </div>
    </div>
  );
}
