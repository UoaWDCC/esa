'use client'

import React, { useEffect, useState } from 'react'
import Card from './_components/Card'
import LoadingThreeDotsPulse from './_components/Loading'
import { AnimatePresence, motion } from 'motion/react'
import { Shadows_Into_Light } from 'next/font/google'

const shadowsIntoLight = Shadows_Into_Light({
  weight: '400',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-shadows-into-light',
})

export default function Page() {
  const [loading, setLoading] = useState(true)
  const [showList, setShowList] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`${shadowsIntoLight.variable} flex justify-center items-center h-screen bg-eerie-black p-12`}
    >
      {loading ? <LoadingThreeDotsPulse /> : null}

      <AnimatePresence initial={false}>
        {!loading ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ opacity: 0, scale: 0 }}
            key="container"
            className="flex justify-center items-center relative w-full h-full bg-[url(/assets/babyme.jpg)] bg-cover bg-center rounded-3xl p-12 border border-spring-green"
            onAnimationStart={() => {
              setTimeout(() => {
                setShowList(true)
              }, 300)
            }}
          >
            <Card showList={showList} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
