"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function SquigglyArrow() {
    const controls = useAnimation();

    useEffect(() => {
        const loop = async () => {
            while (true) {
            await controls.start({ d: path2, transition: { duration: 2, ease: "easeInOut" } });
            await controls.start({ d: path1, transition: { duration: 2, ease: "easeInOut" } });
            }
        };
        loop();
    }, [controls]);
    
     return (
    <motion.svg
      viewBox="0 0 100 100"
      width="100"
      height="100"
      initial={{ y: 0 }}
      animate={{
        y: [0, 20, 0], 
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror", // smooth back and forth
        ease: "linear", // constant speed
      }}
    >
      <motion.path
        fill="none"
        stroke="white"
        strokeWidth="4"
        initial={{ d: path1 }}
        animate={controls}
      />
    </motion.svg>
  );
}

const path1 =
  "M10,50 C30,20 70,80 90,50"; // initial smooth wave
const path2 =
  "M10,50 C30,80 70,20 90,50"; // inverted wave

