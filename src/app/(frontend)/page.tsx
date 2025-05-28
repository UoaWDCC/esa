import React from 'react'
import Sponsors from './_components/Sponsors'
import WhoAreWe from './_components/WhoAreWe'

export default async function HomePage() {
  return (
    <div className="text-primary-grey">
      {/* page content */}
      <div className="w-full bg-amber-100">
        place landing component here and remove background colour
      </div>

      <div className="w-full bg-blue-100">
        <WhoAreWe />
      </div>

      <div className="w-full bg-red-100">place component 2 here and remove background colour</div>

      <div className="w-full bg-[#161514]">
        <Sponsors />
      </div>
    </div>
  )
}
