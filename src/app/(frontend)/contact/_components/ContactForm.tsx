"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInput, contactSchema } from "@/lib/zod/schema/contactInput";
import ArrowUp from "@/components/icons/ArrowUp";
import FormInput from "@/components/ui/FormInput";
import FormTextArea from "@/components/ui/FormTextArea";
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
    <section className="flex flex-col items-center text-center text-primary-white bg-transparent w-full max-w-sm">
      <h3 className="mb-2 text-2xl underline underline-offset-4">Let’s have a chat!</h3>

      <div className="text-[14px]  w-full">
        <p className="mb-6 px-4">
          We’d love to hear from you! You can contact us with the form below or send us an email or call.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1 w-full px-4">
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
          <FormTextArea
            placeholder="Write your message"
            {...register("message")}
            error={errors.message}
            className="w-full"
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting} className="flex items-center gap-x-2">
              {isSubmitting ? "Submitting..." : (
                <>
                  Send
                  <ArrowUp className="size-3" />
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="mt-7 px-4 text-left space-y-2">
          <InfoRow label="Email" value="uoaesa@gmail.com" />
          <InfoRow label="Contact number" value="020 4180 2771" />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-primary-white py-1 px-3">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
