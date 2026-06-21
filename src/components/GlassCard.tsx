"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverGlow = true,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`glass-panel glass-panel-hover rounded-2xl p-6 overflow-hidden relative group ${className} ${
        hoverGlow
          ? "hover:shadow-[0_15px_35px_-10px_rgba(124,58,237,0.15)] md:hover:shadow-[0_25px_45px_-15px_rgba(124,58,237,0.22)]"
          : ""
      }`}
    >
      {/* Decorative inner gradient overlay that shines on hover - purple themed */}
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/0 via-neon-magenta/0 to-neon-blue/0 group-hover:from-neon-purple/4 group-hover:to-neon-magenta/8 transition-all duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
