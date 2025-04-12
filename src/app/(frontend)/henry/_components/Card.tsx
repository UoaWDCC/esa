import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const links = [
  {
    text: 'Github',
    link: 'https://github.com/hgao080',
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/henry-ming-gao/',
  },
  {
    text: 'Instagram',
    link: 'https://www.instagram.com/ming._.tofu/',
  },
]

export default function Card() {
  return (
    <div className="flex flex-col items-center bg-neutral-800 p-8 text-white rounded-lg">
      <Image
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/c5a9df33-4e9e-4df6-8dba-c3746041b95e-profile_image-300x300.png"
        width={80}
        height={80}
        alt="Henry's Profile Image"
        className="rounded-full"
      />

      <div className="flex flex-col items-center my-4">
        <h1 className="text-2xl font-semibold ">Henry Gao</h1>
        <p className="text-lime-400 text-xs">Auckland, New Zealand</p>
      </div>

      <p className="text-xs text-neutral-400 mb-4">"Full-stack developer and retired gamer"</p>

      <div className="flex flex-col gap-2 w-full">
        {links.map((link) => (
          <a
            target="_blank"
            href={link.link}
            rel="noopener noreferrer"
            key={link.text}
            className="bg-neutral-700 w-full text-center rounded-md py-1 text-sm font-semibold tracking-wide"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
}
