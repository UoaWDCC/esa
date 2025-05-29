import React from 'react'
import Sponsors from './_components/Sponsors'
import WhyJoin from './_components/WhyJoin'

export default async function HomePage() {
  return (
    <div className="">
      {/* page content */}
      <div className="w-full bg-amber-100">
        place landing component here and remove background colour
      </div>
      <div className="w-full bg-blue-100">place component 1 here and remove background colour</div>
      <div className="w-full bg-[#161514]">
        <Sponsors />
      </div>
      <div className="w-full bg-[#161514]">
        <WhyJoin />
      </div>
      <div className="w-full bg-[#161514] min-h-[100px] text-white">Replace with component 4</div>
      {/* place component 4 here and remove background colour */}
    </div>
  )
}
