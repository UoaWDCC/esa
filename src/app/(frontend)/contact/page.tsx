import Image from 'next/image';
import ContactForm from '@/app/(frontend)/contact/_components/ContactForm';

export default function ContactPage() {
    return (
        <section className="relative flex justify-center lg:px-[13%] md:px-[10%] px-[6%] h-full py-28 w-full">
            <div className="flex flex-col md:flex-row items-stretch xl:items-center w-full">
                <div className="mb-8 md:mb-0 md:mr-8 flex-1 flex md:w-[38%] lg:w-[40%] w-full">
                    <Image
                        src="/images/contact-us-image.png"
                        alt="Contact us image"
                        height={0}
                        width={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="object-cover rounded-2xl w-full h-full md:aspect-[3/4]"
                        priority
                    />
                </div>
                <div className="w-full md:w-[62%] lg:w-[60%] overflow-hidden">
                    <ContactForm />
                </div>
            </div>
            {/* Background star */}
            <div className="absolute -bottom-50 -right-70 -z-10">
                <Image
                  src="/images/signup/background_star.png"
                  alt="background star red"
                  width={700}
                  height={700}
                />
            </div>
        </section>
    );
}
