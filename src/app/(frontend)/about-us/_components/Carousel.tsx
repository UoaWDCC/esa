import React, { useEffect, useState } from "react";
import ExecPolaroid from "./ExecPolaroid";
import { AnimatePresence, motion, Variants } from "framer-motion";

interface CarouselProps {
  Data: string[];
  onCenterChange?: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ Data, onCenterChange }) => {
  if (!Data || Data.length === 0) return null;

  const [FlowDirection, setFlowDirection] = useState(true);
  const [CenterId, setCenterId] = useState(0);
  const [LeftId, setLeftId] = useState(Data.length - 1);
  const [RightId, setRightId] = useState(Data.length > 1 ? 1 : 0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    onCenterChange?.(CenterId);
  }, [CenterId, onCenterChange]);

  const nextBtn = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setLeftId((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
    setCenterId((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
    setRightId((prev) => (prev === Data.length - 1 ? 0 : prev + 1));
    setFlowDirection(true);
  };

  const prevBtn = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setFlowDirection(false);
    setLeftId((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
    setCenterId((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
    setRightId((prev) => (prev === 0 ? Data.length - 1 : prev - 1));
  };

  // Use ExecPolaroid for polaroid style
  const variants: Variants = {
    center: {
      x: "0.5rem",
      y: 5,
      opacity: 1,
      scale: 1,
      zIndex: 5,
      transition: { type: "spring", duration: 1 },
    },
    left: {
      x: "-7rem",
      y: -20,
      opacity: 1,
      scale: 0.9,
      zIndex: 4,
      transition: { type: "spring", duration: 1 },
    },
    right: {
      x: "7rem",
      y: -20,
      opacity: 1,
      scale: 0.9,
      zIndex: 3,
      transition: { type: "spring", duration: 1 },
    },
    rightHidden: { x: "7rem", scale: 0, opacity: 0 },
    leftHidden: { x: "-7rem", scale: 0, opacity: 0 },
  };

  return (
    <motion.div className="grid place-content-center rounded-[2rem]">
      <motion.div className="relative w-60 h-52">
        <AnimatePresence initial={false}>
          <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? "center" : "leftHidden"}
            animate="left"
            exit="leftHidden"
            className="absolute cursor-pointer"
            onClick={() => { if (!isAnimating) prevBtn(); }}
            style={{ pointerEvents: isAnimating ? 'none' : 'auto' }}
          >
            {/* Polaroid style for left */}
            <ExecPolaroid index={LeftId} image={Data[LeftId]} />
          </motion.div>
          <motion.div
            key={CenterId}
            variants={variants}
            initial={FlowDirection ? "right" : "left"}
            animate="center"
            onAnimationComplete={() => setIsAnimating(false)}
            className="absolute"
            drag={isAnimating ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (isAnimating) return;
              if (info.offset.x < -50) nextBtn();
              else if (info.offset.x > 50) prevBtn();
            }}
            style={{ touchAction: 'pan-x' }}
          >
            <ExecPolaroid index={CenterId} image={Data[CenterId]} />
          </motion.div>
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? "rightHidden" : "center"}
            animate="right"
            exit="rightHidden"
            className="absolute cursor-pointer"
            onClick={() => { if (!isAnimating) nextBtn(); }}
            style={{ pointerEvents: isAnimating ? 'none' : 'auto' }}
          >
            {/* Polaroid style for right */}
            <ExecPolaroid index={RightId} image={Data[RightId]} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
