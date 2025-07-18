import React from 'react'
import Carousel from './Carousel'
import Link from 'next/link'

import { getSponsors } from '@/actions/getSponsors'
import parseSponsors from '@/types/parsers/parseSponsors'
import Image from 'next/image'
import Title from "@/components/ui/Title";

export default async function Sponsors() {
  const sponsors = parseSponsors(await getSponsors())

  return (
    <div className="py-12 text-primary-white">
      <div className="flex flex-col items-center gap-5 mb-12 ">
        <div className="relative">
          <Link
            href="/sponsors"
          >
            <Title className="tracking-wider">
              Our Sponsors
            </Title>
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
          Enjoy discounts? As uni students we understand, that&apos;s why we&apos;ve sponsored up for you.
          Take a look at ESA&apos;s sponsors!
        </p>
      </div>
      <Carousel sponsors={sponsors ?? []} />
    </div>
  )
}
