"use client";

import { motion } from "framer-motion";
import HeroCarousel from "../HeroCarousel";
import ShimmerButton from "../ui/ShimmerButton";
import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      id="hero"
      className="relative h-[95vh] w-full flex flex-col items-center justify-between overflow-hidden text-white pt-24 pb-8"
      style={{ background: "#000000" }}
      onMouseMove={(e) => {
        // Get mouse position relative to the section
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Base Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Interactive Glowing Dot Grid (Masked by Mouse Position) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ opacity: isHovering ? 0.8 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
          maskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
        }}
      />

      {/* Top Text Section */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight mb-2 font-serif" style={{ textShadow: "0 4px 24px rgba(255,255,255,0.15)" }}>
          L'idée dans votre tête,<br />
          développée avant midi.
        </h1>
      </motion.div>

      {/* The 3D Carousel */}
      <div className="w-full relative z-10 flex-1 flex items-center justify-center min-h-0 my-2">
        <HeroCarousel />
      </div>

      {/* Bottom Text Section */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          <span className="text-white font-semibold">Développement web & Design.</span> Décrivez votre vision,
          orientez-la avec vos règles, et obtenez un produit final performant, 
          adapté à tous vos besoins.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <ShimmerButton href="#projects" isPrimary={true}>
            Découvrir mes projets
          </ShimmerButton>
        </div>
      </motion.div>

    </section>
  );
}
