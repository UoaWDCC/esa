import React from 'react'
import Card from './_components/Card'

export default function Page() {
  return (
    <div className="h-screen bg-neutral-950 p-12">
      <div className="flex justify-center items-center relative w-full h-full bg-[url(/assets/babyme.jpg)] bg-cover bg-center rounded-3xl">
        <Card />
      </div>
    </div>
  )
}
