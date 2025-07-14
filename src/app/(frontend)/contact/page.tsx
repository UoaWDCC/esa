import ContactForm from "@/app/(frontend)/contact/_components/ContactForm";
import Image from "next/image";

export default async function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-dvh pt-[15vh] pb-10 px-6">
      
      {/* Image container */}
      <div className="relative w-full max-w-[400px] mb-8 md:mb-0 md:mr-12 md:aspect-[3/4]">
        <Image
          src="/images/contact-us-image.png"
          alt="contact us image"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Form container */}
      <div className="w-full max-w-xl">
        <ContactForm />
      </div>

    </div>
  );
}
