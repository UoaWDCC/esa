import React from 'react'
import Sponsors from './_components/Sponsors'

export default async function HomePage() {
  return (
    <div className="">
      {/* page content */}
      <div className="w-full bg-amber-100">
        place landing component here and remove background colour
      </div>

      <div className="w-full bg-blue-100">place component 1 here and remove background colour</div>

      <div className="w-full bg-red-100">place component 2 here and remove background colour</div>

      <div className="w-full">
        <Sponsors />
      </div>
    </div>
  )
}
