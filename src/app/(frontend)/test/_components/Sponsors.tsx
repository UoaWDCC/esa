import React from 'react'
import Carousel from './Carousel'
import Link from 'next/link'

import { getSponsors } from '@/actions/getSponsors'
import parseSponsors from '@/types/parsers/parseSponsors'

export default async function Sponsors() {
  const sponsors = parseSponsors(await getSponsors())

  return (
    <div className="bg-[#0C1E34] text-white py-12">
      <div className="flex flex-col items-center">
        <p className="w-[17rem] text-center tracking-widest font-medium leading-none">
          Enjoy discounts? As uni students we understand, that's why we've sponsored up for you.
          Take a look at ESA's sponsors!
        </p>
        <Link href="/sponsors" className="mt-4 mb-12 font-bold text-xl underline tracking-widest">
          Our Sponsors
        </Link>
      </div>
      <Carousel sponsors={sponsors ?? []} />
    </div>
  )
}
