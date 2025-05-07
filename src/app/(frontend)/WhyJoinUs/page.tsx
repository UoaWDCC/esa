import { useState } from 'react'

export default function ESAPromoPage() {
  return (
    <div className="bg-gradient-to-b from-blue-800 via-blue-600 to-blue-800 min-h-screen p-4 flex items-center justify-center">
      <div className="flex flex-col gap-30 bg-white rounded-3xl w-full max-w-2xl px-20 py-10 relative overflow-hidden">
        <div className="mb-8">
          <h1 className="text-4xl text-black font-bold mb-2">Why Join ESA?</h1>
          <p className="text-gray-700">
            We're doing things our way — fresh events, fun people, and a vibe that feels like your
            favourite hangout spot. Kinda new, kinda nostalgic, always a good time.
          </p>
        </div>

        <div className="relative flex flex-wrap justify-between">
          <div className="bg-yellow-50 p-3 pb-8 shadow-md  mb-8 max-w-xs">
            <div className="bg-green-200 w-48 h-32"></div>
            <p className="text-center text-black mt-2 text-sm">Join a wide community!</p>
          </div>

          <div className="bg-yellow-50 p-3 pb-8 shadow-md  mb-8 max-w-xs">
            <div className="bg-blue-200 w-48 h-32"></div>
            <p className="text-center text-black mt-2 text-sm">Club events!</p>
          </div>

          <div className="bg-yellow-50 p-3 pb-8 shadow-md  mb-8 max-w-xs">
            <div className="bg-red-200 w-48 h-32"></div>
            <p className="text-center text-black mt-2 text-sm">Join in fun games!</p>
          </div>

          <div className="bg-yellow-50 p-3 pb-8 shadow-md  mb-8 max-w-xs">
            <div className="bg-purple-200 w-48 h-32"></div>
            <p className="text-center text-black mt-2 text-sm">Meet new friends!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
