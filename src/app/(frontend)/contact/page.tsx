import ContactForm from "@/app/(frontend)/contact/_components/ContactForm";


export default async function ContactPage() {
  return (
    <div className="flex w-full lg:flex-row flex-col">

        {/* page content */}
        <div className="w-full bg-amber-800">
            place map component and remove background colour
         </div>

        <div className="w-full bg-blue-500">
            <ContactForm />
        </div>

    </div>
  )
}
