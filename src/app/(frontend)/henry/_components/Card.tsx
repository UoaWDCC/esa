'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { IoIosClose } from 'react-icons/io'

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
  const [isCardVisible, setIsCardVisible] = useState(true)

  return (
    <>
      <AnimatePresence initial={false}>
        {isCardVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="card"
            className="relative flex flex-col items-center bg-neutral-800 p-8 text-white rounded-lg scale-125"
          >
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              className="absolute top-2 right-2 hover:cursor-pointer"
              onClick={() => setIsCardVisible(false)}
            >
              <IoIosClose size={24} />
            </motion.div>

            <Image
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/c5a9df33-4e9e-4df6-8dba-c3746041b95e-profile_image-300x300.png"
              width={80}
              height={80}
              alt="Henry's Profile Image"
              className="rounded-full"
            />

            <div className="flex flex-col items-center my-4 text-center">
              <h1 className="text-2xl font-semibold ">Henry Gao</h1>
              <p className="text-lime-400 text-xs">Auckland, New Zealand</p>
            </div>

            <p className="text-xs text-neutral-400 mb-4 text-center">
              "Full-stack developer and retired gamer"
            </p>

            <div className="flex flex-col gap-2 w-full">
              {links.map((link) => (
                <motion.a
                  target="_blank"
                  href={link.link}
                  rel="noopener noreferrer"
                  key={link.text}
                  className="bg-neutral-700 w-full text-center rounded-md py-1 text-sm font-semibold tracking-wide hover:cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="button"
            className="absolute text-white bottom-7 right-10 hover:cursor-pointer bg-neutral-800 px-6 py-1 rounded-xl tracking-wide font-semibold scale-125"
            onClick={() => setIsCardVisible(true)}
          >
            Open
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
