"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const PROJECTS = [
  "/projects/maraguide.jpg",
  "/projects/emig.png",
  "/projects/fastbencar.png",
  "/projects/grandmasternoir.png",
  "/projects/facetrackai.svg",
];

// Duplicate more times to get a very smooth dense curve
const duplicatedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS];
const totalImages = duplicatedProjects.length; // 25 images
const radius = 1300; // Larger radius = softer arc, more images fit

export default function HeroCarousel() {
  const rotation = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Custom buttery smooth animation using requestAnimationFrame
  useAnimationFrame((t, delta) => {
    // If hovered, slow down dramatically for a premium feel
    const speed = isHovered ? 0.3 : 1.2;
    // We add to the rotation based on delta time to keep it frame-rate independent
    rotation.set(rotation.get() + speed * (delta / 50));
  });

  return (
    <div 
      className="relative w-full h-full overflow-hidden flex items-center justify-center [perspective:1400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
        style={{
          rotateY: rotation,
          rotateX: -4, // Very slight tilt upwards so you can feel the 3D depth
          zIndex: 10
        }}
      >
        {duplicatedProjects.map((src, i) => {
          const angle = (360 / totalImages) * i;
          return (
            <div
              key={i}
              className="absolute w-[180px] h-[250px] md:w-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-[#050505] group"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${-radius}px)`,
                backfaceVisibility: "hidden", 
                // Premium soft shadow and inner border highlight
                boxShadow: "0 24px 48px -12px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.15)"
              }}
            >
              <Image 
                src={src} 
                alt={`Project ${i}`} 
                fill 
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                style={{ 
                  filter: "brightness(0.8) contrast(1.1)",
                }}
              />
              {/* Highlight overlay that appears on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
            </div>
          );
        })}
      </motion.div>
      
      {/* Premium vignette fade for the left/right and top/bottom edges */}
      <div className="absolute inset-0 z-20 pointer-events-none" 
           style={{
             background: 'linear-gradient(90deg, #000000 0%, transparent 25%, transparent 75%, #000000 100%)'
           }} 
      />
      <div className="absolute inset-0 z-20 pointer-events-none" 
           style={{
             background: 'linear-gradient(180deg, #000000 0%, transparent 15%, transparent 85%, #000000 100%)'
           }} 
      />
    </div>
  );
}
