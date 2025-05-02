import React from 'react'
import Carousel from './Carousel'
import Link from 'next/link'

export default function Sponsors() {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <p className="w-[15rem] text-center tracking-wide font-semibold leading-none">
          Enjoy discounts? As uni students we understand, that's why we've sponsored up for you.
          Take a look at ESA's sponsors!
        </p>
        <Link href="/sponsors" className="mt-2 mb-12 font-bold text-xl underline tracking-widest">
          Our Sponsors
        </Link>
      </div>
      <Carousel />
    </div>
  )
}
