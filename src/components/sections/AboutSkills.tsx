"use client";

import { motion } from "framer-motion";
import StackCards from "@/components/StackCards";

export default function AboutSkills() {
  return (
    <section
      id="skills"
      className="py-24 text-white relative overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[700px] h-[500px] bg-blue-700/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col">
        {/* Header */}
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
              02.
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Mon Stack Technique</h2>
          </div>
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, rgba(0,47,167,0.5), transparent)",
            }}
          />
          <p className="text-slate-400 mt-4 text-sm md:text-base">
            Les outils et technologies que j&apos;utilise au quotidien pour donner vie à vos projets.
          </p>
        </motion.div>

        {/* Stack Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full mb-24"
        >
          <StackCards />
        </motion.div>
      </div>
    </section>
  );
}

