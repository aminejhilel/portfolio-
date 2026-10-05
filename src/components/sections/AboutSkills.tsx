"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const StackCards = dynamic(() => import("@/components/StackCards"), {
  ssr: false,
});

export default function AboutSkills() {
  return (
    <section
      id="skills"
      className="py-28 text-white relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background Lighting Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[50%] -translate-x-1/2 w-[750px] h-[500px] bg-blue-600/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 w-full"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20">
              02. STACK TECHNIQUE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Mon Stack &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Technologies</span>
              </h2>
              <p className="text-slate-400 mt-3 text-base max-w-2xl leading-relaxed">
                Un écosystème moderne alliant langages de programmation, frameworks web Full-Stack, bases de données et outils de design UI/UX.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-blue-500/50 via-indigo-500/20 to-transparent" />
        </motion.div>

        {/* Stack Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mb-12"
        >
          <StackCards />
        </motion.div>
      </div>
    </section>
  );
}


