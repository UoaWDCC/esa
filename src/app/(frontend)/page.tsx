import React from 'react'
import Sponsors from './_components/Sponsors'
import WhoAreWe from './_components/WhoAreWe'
import WhyJoin from './_components/WhyJoin'

export default async function HomePage() {
  return (
    <div className="text-primary-grey">
      {/* page content */}
      <div className="w-full bg-amber-100">
        place landing component here and remove background colour
      </div>

      <div className="flex flex-col items-center w-full p-12">
        <WhoAreWe />
      </div>
      <div className="w-full bg-[#161514]">
        <Sponsors />
      </div>
      <div className="w-full bg-[#161514]">
        <WhyJoin />
      </div>
      <div className="w-full bg-[#161514] min-h-[100px] text-white">Replace with component 5</div>
      {/* place component 4 here and remove background colour */}
    </div>
  )
}
