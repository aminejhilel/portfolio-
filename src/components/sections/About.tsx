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
                  style={{ background: 'rgba(0,255,0,0.12)', border: '1px solid rgba(0,255,0,0.25)' }}
                >
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Expérience</div>
                  <div className="font-semibold text-white">3+ Années</div>
                </div>
              </div>
              {/* Projets badge */}
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                  background: 'rgba(0,255,0,0.07)',
                  border: '1px solid rgba(0,255,0,0.2)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(0,255,0,0.12)', border: '1px solid rgba(0,255,0,0.25)' }}
                >
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Projets</div>
                  <div className="font-semibold text-white">20+ Complétés</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl group cursor-default">
              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#002FA7] to-[#000a2e] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />
              
              <div 
                className="absolute inset-[3px] bg-black rounded-3xl overflow-hidden z-10"
                style={{
                  border: '1px solid rgba(0,47,167,0.35)',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)'
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Amine Jhilel"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

