"use client";

import { motion } from "framer-motion";
import HeroCarousel from "../HeroCarousel";
import ShimmerButton from "../ui/ShimmerButton";
import TextPressure from "../TextPressure";


export default function Hero() {

  return (
    <section
      id="hero"
      className="relative h-[95vh] w-full flex flex-col items-center justify-between overflow-hidden text-white pt-24 pb-8"
    >
      {/* Top Text Section */}
      <motion.div
        className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* TextPressure Name */}
        <div className="w-full mb-3" style={{ height: 'clamp(3.5rem, 10vw, 8rem)' }}>
          <TextPressure
            text="Amine Jhilel"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#f8fafc"
            strokeColor="#7dd3fc"
            minFontSize={36}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-slate-400 text-sm sm:text-base md:text-lg tracking-[0.2em] uppercase font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Full Stack Developer &amp;{" "}
          <span className="text-sky-400">UI &amp; UX Designer</span>
        </motion.p>
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
          <span className="text-white font-semibold">Développement web &amp; Design.</span> Décrivez votre vision,
          orientez-la avec vos règles, et obtenez un produit final performant,{" "}
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
