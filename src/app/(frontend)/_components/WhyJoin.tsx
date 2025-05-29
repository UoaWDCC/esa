// Import React and Next.js Image component
import React from 'react'
import Image from 'next/image'

// Import global styles (including Tailwind)
import 'src/styles/global.css'

// SVG for the title box decoration
const heading_svg = (
  <svg
    width="744"
    height="422"
    viewBox="0 0 744 422"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="scale-x-165 scale-y-95"
  >
    <path
      d="M38.324 81.5158C49.973 183.535 51.9605 243.337 50.6411 352.801C302.325 339.095 443.413 336.352 695.032 340.5C692.577 214.161 695.445 141.736 704.683 11C409.874 26.3428 269.535 35.5189 75.2755 53.1863C79.2038 190.632 80.9494 268.813 70.0321 410.5C327.414 381.189 476.443 371.831 732.532 368.5C720.532 249.5 721.076 172.563 729.317 47.9515C332.004 63.2336 164.281 75.7003 2.91211 107.69"
      stroke="white"
      strokeWidth="9"
    />
  </svg>
)

const WhyJoin = () => {
  return (
    // Root container with background image and content overlay
    <div id="root" className="relative min-h-[1043px] overflow-hidden">
      {/* Background Image using Next.js Image component */}
      <Image
        src="/assets/why_join.jpg"
        alt="Background"
        fill
        layout="reponsive"
        className="relative brightness-35 object-cover"
      />
      {/* Content overlay */}
      <div id="content" className="relative inset-x-30 inset-y-55">
        {/* Title box with SVG decoration and heading */}
        <div id="title-box" className="relative inset-x-20">
          <div className="absolute inset-x-5 -inset-y-18 scale-45 origin-top-left ">
            {heading_svg}
          </div>
          <span className="relative text-red-500 text-4xl font-reservoir-grunge">
            Why Join Esa?
          </span>
        </div>

        {/* First body text section */}
        <div id="body-text-one" className="mt-30 max-w-[760px]">
          <p className="text-white text-2xl font-smeltex-medium">
            We&apos;re doing things our way - fresh events, fun people, and a vibe that feels like
            your favourite hangout spot. Kinda new, kinda nostalgic, always a good time.
          </p>
        </div>
        {/* Second body text section */}
        <div id="body-text-two" className="mt-6 max-w-[760px]">
          <p className="text-white text-2xl font-smeltex-medium">
            Lorem ipsum dolor sit amet consecutetur. Elementum gravida egestas id consecutetur
            volutpat id nec consecutetur. Pretium pellentesque a consecutetur urna
          </p>
        </div>

        {/* Join button */}
        <div id="join-button" className="mt-8">
          <button className="bg-[#ffc857] text-black rounded-3xl px-6 py-1 font-smeltex-medium hover:bg-yellow-400 cursor-pointer transition">
            Join The ESA Family!
          </button>
        </div>
      </div>
      {/*Film Strip image right-hand side of the page */}
      <Image
        src="/assets/film_strip.png"
        alt="Film Strip"
        width="758"
        height="1072"
        layout=""
        className="absolute right-0 -top-[29px] origin-top-right"
      />
    </div>
  )
}

export default WhyJoin
