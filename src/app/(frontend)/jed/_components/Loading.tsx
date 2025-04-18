'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function LoadingThreeDotsPulse() {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
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
      transition={{ staggerChildren: 0.2 }}
      exit={{ opacity: 0, scale: 0 }}
      className="flex justify-center items-center gap-4"
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-spring-green will-change-transform shadow-md shadow-spring-green/20"
        variants={dotVariants}
      />
      <motion.div
        className="w-4 h-4 rounded-full bg-spring-green will-change-transform shadow-md shadow-spring-green/20"
        variants={dotVariants}
      />
      <motion.div
        className="w-4 h-4 rounded-full bg-spring-green will-change-transform shadow-md shadow-spring-green/20"
        variants={dotVariants}
      />
    </motion.div>
  )
}
