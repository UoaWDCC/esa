import Image from 'next/image';
import ContactForm from '@/app/(frontend)/contact/_components/ContactForm';

export default function ContactPage() {
    return (
        <section className="mx-auto mt-16 flex flex-col md:flex-row items-center justify-center h-dvh px-5">
            <div className="mb-8 w-auto md:mb-0 md:mr-8 md:w-auto max-w-md">
                <Image
                    src="/images/contact-us-image.png"
                    alt="Contact us image"
                    height={600}
                    width={500}
                    className="object-cover rounded-2xl md:aspect-[3/4]"
                    priority
                />
            </div>
            <ContactForm />
        </section>
    );
}
