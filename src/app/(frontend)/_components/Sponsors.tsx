import React from 'react'
import Carousel from './Carousel'
import Link from 'next/link'

import { getSponsors } from '@/actions/getSponsors'
import parseSponsors from '@/types/parsers/parseSponsors'
import Image from 'next/image'

export default async function Sponsors() {
  const sponsors = parseSponsors(await getSponsors())

  return (
    <div className="py-12 text-primary-white">
      <div className="flex flex-col items-center gap-5 mb-12 ">
        <div className="relative">
          <Link
            href="/sponsors"
            className="bg-[#A92622] px-4.5 py-2 rounded-2xl text-2xl font-reservoir-grunge tracking-wider"
          >
            Our Sponsors
          </Link>
          <div className="absolute items-center right-[-16.25rem] top-[-2.2rem] gap-1.5 hidden lg:flex">
            <Image
              width={90}
              height={90}
              alt="Arrow pointing to sponsors"
              src="/SponsorsArrow.svg"
              unoptimized={true}
              className=""
            />
            <p className="font-super-jellyfish translate-y-[-0.2rem]">CLICK FOR MORE DETAILS!</p>
          </div>
        </div>

        <p className="w-[80%] text-center text-base/tight font-smeltex-medium tracking-[0.15em] lg:text-lg/tight lg:w-[28.5rem]">
          Enjoy discounts? As uni students we understand, that's why we've sponsored up for you.
          Take a look at ESA's sponsors!
        </p>
      </div>
      <Carousel sponsors={sponsors ?? []} />
    </div>
  )
}
