import React from 'react'
import Carousel from './Carousel'
import Link from 'next/link'

import { getSponsors } from '@/actions/getSponsors'
import parseSponsors from '@/types/parsers/parseSponsors'

export default async function Sponsors() {
  const sponsors = parseSponsors(await getSponsors())

  return (
    <div className="bg-[#0C1E34] text-white py-12">
      <div className="flex flex-col items-center gap-2 mb-12 text-xl">
        <Link href="/sponsors" className="font-bold bg-[#A92622] px-4 py-1 rounded-2xl">
          Our Sponsors
        </Link>
        <p className="w-[28rem] text-center font-medium leading-none">
          Enjoy discounts? As uni students we understand, that's why we've sponsored up for you.
          Take a look at ESA's sponsors!
        </p>
      </div>
      <Carousel sponsors={sponsors ?? []} />
    </div>
  )
}
