"use client";

import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";
import TypewriterText from "@/components/TypewriterText";
import ShimmerButton from "../ui/ShimmerButton";
import GradientText from "@/components/GradientText";
import { useRef, useState, useCallback } from "react";

/* ── Load Particles client-only (WebGL) ── */
const Particles = dynamic(() => import("@/components/Particles"), {
  ssr: false,
});

/* ─── Framer Motion variants ─── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.4 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ─── Click burst ─── */
interface Burst {
  id: number;
  x: number;
  y: number;
  particles: { angle: number; dist: number; color: string }[];
}
const BURST_COLORS = ["#002FA7", "#1a4fc4", "#3a6fd8", "#ffffff", "#5585e0", "#adc0ff"];

export default function Hero() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const burstId = useRef(0);

  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const id = burstId.current++;
    const x = e.clientX;
    const y = e.clientY;
    const particles = Array.from({ length: 18 }, (_, i) => ({
      angle: (i / 18) * Math.PI * 2,
      dist: 60 + Math.random() * 60,
      color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
    }));
    setBursts((prev) => [...prev, { id, x, y, particles }]);
    setTimeout(() => setBursts((prev) => prev.filter((b) => b.id !== id)), 900);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-white"
      style={{ background: "#000000" }}
      onClick={handleClick}
    >
      {/* ── OGL Particles background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleCount={1000}
          particleSpread={10}
          speed={0.08}
          particleColors={["#002FA7", "#1a4fc4", "#3a6fd8", "#ffffff", "#5585e0"]}
          moveParticlesOnHover={true}
          particleHoverFactor={0.4}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.5}
          cameraDistance={20}
          disableRotation={false}
          pixelRatio={typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1}
          className="w-full h-full"
        />
      </div>

      {/* Ambient blobs */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full mix-blend-screen filter blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "#002FA7" }}
        animate={{ x: [0, 50, -20, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[10%] w-96 h-96 rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "#1a4fc4" }}
        animate={{ x: [0, -40, 18, 0], y: [0, 50, -25, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Click burst particles */}
      {bursts.map((burst) =>
        burst.particles.map((p, i) => (
          <motion.div
            key={`${burst.id}-${i}`}
            className="fixed w-2 h-2 rounded-full pointer-events-none z-50"
            style={{
              left: burst.x,
              top: burst.y,
              backgroundColor: p.color,
              boxShadow: `0 0 8px ${p.color}, 0 0 16px ${p.color}55`,
            }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
            animate={{
              x: Math.cos(p.angle) * p.dist,
              y: Math.sin(p.angle) * p.dist,
              opacity: 0,
              scale: 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))
      )}

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pointer-events-none"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black tracking-wider mb-6 leading-tight uppercase"
          style={{ fontFamily: "var(--font-orbitron), 'Orbitron', sans-serif" }}
        >
          <GradientText
            colors={["#002FA7", "#ffffff", "#adc0ff", "#002FA7", "#7ba0ee"]}
            animationSpeed={4}
            showBorder={false}
            className="pb-2"
          >
            Bonjour, je suis Amine Jhilel
          </GradientText>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl mb-10 min-h-[40px] flex justify-center"
          style={{ color: "#adc0ff" }}
        >
          <TypewriterText
            phrases={[
              "Full-Stack Developer",
              "UI & UX Designer",
              "Specializing in performant web apps",
            ]}
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto mt-4"
        >
          <ShimmerButton href="#projects" isPrimary={true}>
            Explore My Work
          </ShimmerButton>

          <ShimmerButton href="#contact" isPrimary={false}>
            Get In Touch
          </ShimmerButton>
        </motion.div>
      </motion.div>

    </section>
  );
}
