"use client";

import { useAnimationFrame, useMotionValue, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const PROJECTS = [
  "/projects/maraguide.jpg",
  "/projects/emig.png",
  "/projects/fastbencar.png",
  "/projects/grandmasternoir.png",
  "/projects/facetrackai.svg",
];

// 3 duplicates instead of 5 — sufficient for seamless loop
const duplicatedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];
const totalImages = duplicatedProjects.length; // 15 images
const radius = 900;

export default function HeroCarousel() {
  const rotation = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  useAnimationFrame((_t, delta) => {
    const speed = isHoveredRef.current ? 0.25 : 1.0;
    rotation.set(rotation.get() + speed * (delta / 50));
  });

  return (
    <div
      className="relative w-full h-full overflow-hidden flex items-center justify-center [perspective:1200px]"
      onMouseEnter={() => { setIsHovered(true); isHoveredRef.current = true; }}
      onMouseLeave={() => { setIsHovered(false); isHoveredRef.current = false; }}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
        style={{ rotateY: rotation, rotateX: -4, zIndex: 10 }}
      >
        {duplicatedProjects.map((src, i) => {
          const angle = (360 / totalImages) * i;
          return (
            <div
              key={i}
              className="absolute w-[160px] h-[220px] md:w-[260px] md:h-[360px] rounded-2xl overflow-hidden border border-white/5 bg-[#050505]"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${-radius}px)`,
                backfaceVisibility: "hidden",
                boxShadow: "0 16px 32px -8px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <Image
                src={src}
                alt={`Project ${i % PROJECTS.length}`}
                fill
                sizes="260px"
                className="object-cover"
                style={{ filter: "brightness(0.8) contrast(1.05)" }}
                loading="lazy"
              />
            </div>
          );
        })}
      </motion.div>

      {/* Edge fades */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #000 0%, transparent 22%, transparent 78%, #000 100%)' }}
      />
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(180deg, #000 0%, transparent 12%, transparent 88%, #000 100%)' }}
      />
    </div>
  );
}
