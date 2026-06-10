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
          ? "hover:shadow-[0_15px_30px_-10px_rgba(59,130,246,0.15)] md:hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.2)]"
          : ""
      }`}
    >
      {/* Decorative inner gradient overlay that shines on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/0 via-neon-purple/0 to-neon-cyan/0 group-hover:from-neon-blue/2 group-hover:to-neon-purple/5 transition-all duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
