import ContactForm from "@/app/(frontend)/contact/_components/ContactForm";
import Image from 'next/image'


export default async function ContactPage() {
  return (
      <div className="flex flex-col md:flex-row justify-center items-center h-dvh">
          <div className="mx-5 mb-7 md:mb-0">
              <Image
                src="/images/contact-us-image.png"
                alt="contact us image"
                height={600}
                width={400}
                className="object-cover rounded-2xl md:aspect-[3/4]"
              />
          </div>
          <ContactForm />
      </div>
  )
}
