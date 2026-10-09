'use client';

import { useEffect, useRef } from 'react';

export default function DotGridBackground({ children }: { children: React.ReactNode }) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let rafId: number;
    let targetX = -9999;
    let targetY = -9999;
    let currentX = -9999;
    let currentY = -9999;
    let isActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isActive) {
        isActive = true;
        glow.style.opacity = '0.75';
        loop();
      }
    };

    const handleMouseLeave = () => {
      isActive = false;
      glow.style.opacity = '0';
      targetX = -9999;
      targetY = -9999;
      cancelAnimationFrame(rafId);
    };

    const loop = () => {
      // Smooth lerp toward cursor — no React state, pure DOM
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      glow.style.maskImage = `radial-gradient(circle 280px at ${currentX}px ${currentY}px, black, transparent)`;
      glow.style.webkitMaskImage = `radial-gradient(circle 280px at ${currentX}px ${currentY}px, black, transparent)`;

      const dx = Math.abs(targetX - currentX);
      const dy = Math.abs(targetY - currentY);
      if (dx > 0.5 || dy > 0.5) {
        rafId = requestAnimationFrame(loop);
      } else {
        // Settled — stop the loop to save CPU
        isActive = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-full w-full">
      {/* Static dot grid — pure CSS, zero JS */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glowing dot grid — moved by DOM ref, no React re-renders */}
      <div
        ref={glowRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0,
          backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
          transition: 'opacity 0.3s ease',
          willChange: 'mask-image',
        }}
      />

      {/* Page content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
