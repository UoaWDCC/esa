import ContactForm from "@/app/(frontend)/contact/_components/ContactForm";
import Image from 'next/image'


export default async function ContactPage() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center lg:justify-around lg:items-center mt-[15vh] lg:px-30 gap-10 lg:gap-0">
      <div className="relative w-full lg:w-[35%] flex items-center justify-center">
          <Image
              src="/images/contact-us-image.png"
              alt="contact us image"
              height={600}
              width={400}
              className="object-cover rounded-2xl"
          />
      </div>

      <div className="w-full lg:w-[60%]">
        <ContactForm />
      </div>
    </div>
  )
}
