"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  angle: number;
  speed: number;
  drift: number;
  opacity: number;
  spin: number;
  spinSpeed: number;
}

const COLORS = [
  "#ec4899", // pink
  "#a855f7", // purple
  "#d946ef", // fuchsia
  "#f97316", // orange
  "#facc15", // yellow
  "#3b82f6", // blue
  "#06b6d4", // cyan
  "#10b981", // emerald
  "#f43f5e", // rose
  "#8b5cf6", // violet
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createParticle(width: number, height: number): Particle {
  return {
    x: randomBetween(0, width),
    y: randomBetween(-height, 0),
    w: randomBetween(4, 8),
    h: randomBetween(10, 18),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    angle: randomBetween(-30, 30),
    speed: randomBetween(0.4, 1.2),
    drift: randomBetween(-0.3, 0.3),
    opacity: randomBetween(0.5, 1),
    spin: randomBetween(0, Math.PI * 2),
    spinSpeed: randomBetween(-0.03, 0.03),
  };
}

export default function FloatingParticles({ count = 120 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles spread across the full height
    particlesRef.current = Array.from({ length: count }, () => {
      const p = createParticle(canvas.width, canvas.height);
      p.y = randomBetween(0, canvas.height); // start visible
      return p;
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particlesRef.current) {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.spin);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.roundRect(-p.w / 2, -p.h / 2, p.w, p.h, p.w / 2);
        ctx.fill();
        ctx.restore();

        // Animate
        p.y += p.speed;
        p.x += p.drift;
        p.spin += p.spinSpeed;

        // Reset when off screen
        if (p.y > canvas.height + 20) {
          const fresh = createParticle(canvas.width, canvas.height);
          Object.assign(p, fresh);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.45 }}
    />
  );
}
