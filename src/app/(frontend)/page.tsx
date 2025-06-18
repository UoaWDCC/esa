import React from 'react';
import Sponsors from './_components/Sponsors';
import Hero from '@/app/(frontend)/_components/Hero'

export default async function HomePage() {
  return (
    <div className="">
      {/* page content */}
      <div className="w-full bg-amber-100">
        <Hero />
      </div>

      <div className="w-full bg-blue-100">place component 1 here and remove background colour</div>

      <div className="w-full bg-red-100">place component 2 here and remove background colour</div>

      <div className="w-full bg-[#161514]">
        <Sponsors />
      </div>
    </div>
  )
}
