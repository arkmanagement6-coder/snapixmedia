"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const cursorX = useMotionValue(-150);
  const cursorY = useMotionValue(-150);

  // Configuration for bouncy, organic tracking feel
  const springConfig = { damping: 35, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset by 150px (half of 300px width/height) to center the radial glow
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-30 h-[300px] w-[300px] rounded-full bg-radial from-neon-purple/10 via-neon-cyan/5 to-transparent blur-[70px] will-change-transform hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
}
