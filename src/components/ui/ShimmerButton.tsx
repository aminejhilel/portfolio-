"use client";

import React from "react";
import { motion } from "framer-motion";

interface ShimmerButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
}

export default function ShimmerButton({ href, children, className = "", isPrimary = true }: ShimmerButtonProps) {
  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <div className={`flex items-center justify-center font-sans ${className}`}>
      <style>{customCss}</style>
      <motion.a
        href={href}
        className={`relative inline-flex items-center justify-center p-[1.5px] rounded-full overflow-hidden group ${
          isPrimary ? "bg-red-950/40" : "bg-red-950/20"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from var(--angle), transparent 25%, ${isPrimary ? '#ef4444' : '#dc2626'}, transparent 50%)`,
            animation: "shimmer-spin 2.5s linear infinite",
          }}
        />
        <span
          className={`relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 rounded-full transition-colors duration-300 font-bold ${
            isPrimary 
              ? "text-white bg-[#5c0a0a] group-hover:bg-[#881010]" 
              : "text-[#fca5a5] bg-black group-hover:bg-[#1f0505]"
          }`}
          style={{
            boxShadow: isPrimary ? "0 0 20px rgba(220,38,38,0.3)" : "none"
          }}
        >
          {children}
        </span>
      </motion.a>
    </div>
  );
}
