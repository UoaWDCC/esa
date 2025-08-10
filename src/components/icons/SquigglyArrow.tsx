"use client"
import { motion } from "framer-motion";

export default function SquigglyArrow() {
    
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
        { /* Squiggle Line */}
        <motion.path
            fill="none"
            stroke="white"
            strokeWidth="4"
            initial={{ d: path1 }}
            animate={{ d: [path1, path2, path1] }}
            transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    </motion.svg>
  );
}

const path1 = "M10,50 C30,20 70,80 90,50"; // initial wave 
const path2 = "M10,50 C30,80 70,20 90,50"; // inverted wave


