"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ShimmerButton from "../ui/ShimmerButton";
import { GraduationCap } from "lucide-react";

const AeroShards = dynamic(() => import("../AeroShards"), { ssr: false });
const DepthText = dynamic(() => import("../DepthText"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white px-6"
      style={{ paddingTop: "80px" }}
    >
      {/* AeroShards animated 3D background */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.9 }}>
        <AeroShards
          shardColor="#1e3fd8"
          accentColor="#38bdf8"
          backgroundColor="transparent"
          placement="full"
          material="glass"
          count={1200}
          shardSize={1}
          speed={0.8}
          glow={0.4}
          grain={0.05}
          mouseInteraction={true}
          mouseStrength={0.7}
          markers="plus"
          pulseOnClick={true}
          holdToGather={true}
          parallax={0.6}
          onError={(e) => console.warn("AeroShards WebGPU:", e)}
        />
      </div>

      {/* Dark vignette overlay so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        style={{ gap: "1.5rem" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
            style={{
              background: "rgba(59,130,246,0.12)",
              border: "1px solid rgba(59,130,246,0.35)",
              color: "#93c5fd",
            }}
          >
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            Aujourd&apos;hui étudiant en Licence à SupMTI
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          className="relative w-full max-w-4xl flex items-center justify-center my-2 select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <DepthText
            text="Amine Jhilel"
            layers={30}
            depth={2.2}
            faceColor="#ffffff"
            depthColor="#1e3fd8"
            fontSize="clamp(2.5rem, 6.5vw, 5.2rem)"
            fontWeight={900}
            tilt={8}
            autoOrbit={true}
            orbitSpeed={0.3}
            pointerTracking={true}
            hoverPush={0.25}
            float={true}
            shadow={true}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase font-light"
          style={{ color: "#94a3b8" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Full Stack Developer &amp;{" "}
          <span className="text-sky-400 font-medium">UI &amp; UX Designer</span>
        </motion.p>

        {/* Divider */}
        <motion.div
          className="w-16 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,47,167,0.6), transparent)" }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-slate-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <span className="text-white font-semibold">Développement web &amp; Design.</span>{" "}
          Aujourd&apos;hui étudiant en <span className="text-sky-300 font-medium">Licence à SupMTI</span>, je conçois des solutions numériques modernes, performantes et adaptées à tous vos besoins.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 pt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <ShimmerButton href="#projects" isPrimary={true}>
            Découvrir mes projets
          </ShimmerButton>
          <a
            href="#about"
            className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/5"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#94a3b8",
            }}
          >
            En savoir plus →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#334155" }}>Scroll</span>
        <motion.div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(0,47,167,0.4), transparent)" }}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
