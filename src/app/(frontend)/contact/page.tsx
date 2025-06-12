import ContactForm from "@/app/(frontend)/contact/_components/ContactForm";


export default async function ContactPage() {
  return (
    <div className="flex w-full lg:flex-row flex-col mt-[14vh] justify-around">

        {/* page content */}
        <div className="bg-amber-800">
            place map component and remove background colour
         </div>

        <div className="">
            <ContactForm />
        </div>

    </div>
  )
}
