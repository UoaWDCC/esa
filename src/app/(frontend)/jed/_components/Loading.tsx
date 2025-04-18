'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function LoadingThreeDotsPulse() {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="flex justify-center items-center gap-[20px]"
    >
      <motion.div
        className="w-[20px] h-[20px] rounded-[50%] bg-spring-green will-change-transform"
        variants={dotVariants}
      />
      <motion.div
        className="w-[20px] h-[20px] rounded-[50%] bg-spring-green will-change-transform"
        variants={dotVariants}
      />
      <motion.div
        className="w-[20px] h-[20px] rounded-[50%] bg-spring-green will-change-transform"
        variants={dotVariants}
      />
    </motion.div>
  )
}
