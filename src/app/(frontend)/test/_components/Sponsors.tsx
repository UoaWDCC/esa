import React from 'react'
import Carousel from './Carousel'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

// To ask:
// red line cause of typescript how to fix
// Vector has weird lines can use JPEG instead to fix this so have to reupload images and I think there is dupe in storage? Check this
// Better way than manually creating all the sponsors. Maybe write some route but lowk kinda too much work or make some1 else task

export default async function Sponsors() {
  const payload = await getPayload({ config })
  const sponsors = await payload.find({
    collection: 'sponsor',
    depth: 1,
    pagination: false,
    sort: 'name',
  })

  console.log(sponsors.docs)

  return (
    <div className="bg-[#0C1E34] text-white py-12">
      <div className="flex flex-col items-center">
        <p className="w-[15rem] text-center tracking-wide font-semibold leading-none">
          Enjoy discounts? As uni students we understand, that's why we've sponsored up for you.
          Take a look at ESA's sponsors!
        </p>
        <Link href="/sponsors" className="mt-2 mb-12 font-bold text-xl underline tracking-widest">
          Our Sponsors
        </Link>
      </div>
      <Carousel sponsors={sponsors.docs} />
    </div>
  )
}
