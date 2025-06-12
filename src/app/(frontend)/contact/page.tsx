import ContactForm from "@/app/(frontend)/contact/_components/ContactForm";
import Image from 'next/image'


export default async function ContactPage() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-around lg:items-center mt-[13vh] lg:mt-[20vh] lg:px-30 gap-10">
      <div className="w-full lg:w-[35%] flex flex-col items-center">
        <div className="w-full aspect-[3/4] max-w-80 overflow-hidden rounded-[40px] relative">
          <Image
            src="/images/contact-us-image.png"
            alt="Contact Us Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      
      <div className="w-full lg:w-[60%]">
        <ContactForm />
      </div>
    </div>
  )
}
