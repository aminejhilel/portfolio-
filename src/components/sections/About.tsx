"use client";

import { motion } from "framer-motion";
import { User, Code, Palette, Zap } from "lucide-react";
import Image from "next/image";

export default function About() {


  return (
    <section id="about" className="py-24 text-white relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-8%] w-[480px] h-[480px] bg-blue-800/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-blue-700/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 w-full"
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-sm font-bold tracking-widest"
              style={{ color: "rgba(0,47,167,0.8)" }}
            >
              01.
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">À propos de Moi</h2>
          </div>
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, rgba(0,47,167,0.5), transparent)",
            }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Développeur Full-Stack &amp; Designer UI/UX
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Je suis Amine Jhilel, passionné par la création d'expériences numériques immersives. Mon approche combine une expertise technique solide avec une sensibilité aiguë pour le design.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Que ce soit pour concevoir une architecture backend complexe ou pour peaufiner les micro-interactions d'une interface utilisateur, je m'efforce toujours de livrer des produits de haute qualité.
            </p>

            <div className="flex gap-4">
              {/* Expérience badge */}
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                  background: 'rgba(0,47,167,0.07)',
                  border: '1px solid rgba(0,47,167,0.22)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,47,167,0.12)', border: '1px solid rgba(0,47,167,0.25)' }}
                >
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Expérience</div>
                  <div className="font-semibold text-white">1+ An</div>
                </div>
              </div>
              {/* Projets badge */}
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                  background: 'rgba(0,47,167,0.07)',
                  border: '1px solid rgba(0,47,167,0.22)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,47,167,0.12)', border: '1px solid rgba(0,47,167,0.25)' }}
                >
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Projets</div>
                  <div className="font-semibold text-white">10+ Complétés</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Photo with Futuristic Animated Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center group cursor-pointer">
              {/* 1. Ambient Background Neon Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 opacity-25 blur-3xl group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

              {/* 2. Outer Pulsing Radar Aura */}
              <motion.div
                className="absolute inset-[-14px] rounded-full border border-blue-500/20 pointer-events-none"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* 3. Rotating Tech Orbit Ring with Conic Gradient */}
              <motion.div
                className="absolute inset-[-6px] rounded-full p-[2px] overflow-hidden pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #6366f1, #06b6d4, transparent 65%, #3b82f6)",
                  boxShadow: "0 0 25px rgba(59, 130, 246, 0.45)",
                }}
              />

              {/* 4. Glassmorphism Metallic Border Ring */}
              <div
                className="relative w-full h-full rounded-full p-2.5 backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 47, 167, 0.18) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  boxShadow:
                    "0 20px 50px rgba(0, 0, 0, 0.75), inset 0 0 18px rgba(59, 130, 246, 0.25)",
                }}
              >
                {/* 5. Inner Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950 border border-blue-500/30">
                  <Image
                    src="/amine-profile.jpg"
                    alt="Amine Jhilel"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  {/* Subtle Dark Vignette & Specular Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* 6. Floating Status Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-3 bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-500/40 text-[11px] font-bold text-white flex items-center gap-2 shadow-xl shadow-blue-950/60 z-20 group-hover:border-cyan-400/60 transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="tracking-wide">Développeur Full-Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

