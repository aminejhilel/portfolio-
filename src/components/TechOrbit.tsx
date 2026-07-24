"use client";

import { motion } from "framer-motion";

/* ─── layout constants ─────────────────────────────────────── */
const BOX    = 380;          // SVG / container size (px)
const CX     = BOX / 2;      // centre x
const CY     = BOX / 2;      // centre y
const RADIUS = 140;          // orbit radius
const ICON   = 60;           // icon card size
const HALF   = ICON / 2;

/* ─── tech stack ───────────────────────────────────────────── */
const techs = [
  { name: "Next.js",    abbr: "N",  bg: "#0f172a", border: "#6366f1", glow: "#6366f1", angle: 270 },
  { name: "TypeScript", abbr: "TS", bg: "#1e3a5f", border: "#3b82f6", glow: "#3b82f6", angle: 330 },
  { name: "React",      abbr: "⚛",  bg: "#0c3547", border: "#22d3ee", glow: "#22d3ee", angle:  30 },
  { name: "Tailwind",   abbr: "TW", bg: "#0c3a40", border: "#06b6d4", glow: "#06b6d4", angle:  90 },
  { name: "Laravel",    abbr: "L",  bg: "#3f0a0a", border: "#f87171", glow: "#ef4444", angle: 150 },
  { name: "MySQL",      abbr: "DB", bg: "#0f2a40", border: "#60a5fa", glow: "#3b82f6", angle: 210 },
];

function polarToXY(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * r, y: CY + Math.sin(rad) * r };
}

export default function TechOrbit() {
  return (
    <div
      style={{ position: "relative", width: BOX, height: BOX, maxWidth: "100%" }}
      className="mx-auto"
    >
      {/* ── SVG connecting lines ─────────────────────────────── */}
      <svg
        width={BOX}
        height={BOX}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      >
        <defs>
          {techs.map((t) => (
            <radialGradient
              key={t.name + "-grad"}
              id={`lg-${t.name}`}
              cx="0%" cy="0%" r="100%"
            >
              <stop offset="0%"   stopColor={t.glow} stopOpacity="0.15" />
              <stop offset="100%" stopColor={t.glow} stopOpacity="0.8"  />
            </radialGradient>
          ))}
        </defs>

        {techs.map((t, i) => {
          const p = polarToXY(t.angle, RADIUS);
          return (
            <motion.line
              key={t.name}
              x1={CX} y1={CY}
              x2={p.x} y2={p.y}
              stroke={t.glow}
              strokeWidth="1"
              strokeOpacity="0.35"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            />
          );
        })}

        {/* subtle orbit ring */}
        <circle
          cx={CX} cy={CY} r={RADIUS}
          fill="none"
          stroke="rgba(99,102,241,0.08)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
      </svg>

      {/* ── Centre hub ───────────────────────────────────────── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
        style={{
          position: "absolute",
          left: CX - 40,
          top:  CY - 40,
          width: 80,
          height: 80,
          borderRadius: 20,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 0 1px rgba(99,102,241,0.4), 0 0 30px rgba(99,102,241,0.4)",
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: 32, fontWeight: 900, color: "#6366f1" }}>A</span>
      </motion.div>

      {/* ── Tech icon cards ──────────────────────────────────── */}
      {techs.map((t, i) => {
        const { x, y } = polarToXY(t.angle, RADIUS);
        return (
          <motion.div
            key={t.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: "spring", stiffness: 220 }}
            whileHover={{ scale: 1.15, zIndex: 20 }}
            title={t.name}
            style={{
              position: "absolute",
              left: x - HALF,
              top:  y - HALF,
              width: ICON,
              height: ICON,
              borderRadius: 14,
              background: t.bg,
              border: `1.5px solid ${t.border}`,
              boxShadow: `0 0 14px ${t.glow}55, inset 0 0 8px ${t.glow}22`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "default",
              zIndex: 5,
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 800, color: t.border, lineHeight: 1 }}>
              {t.abbr}
            </span>
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", marginTop: 3, letterSpacing: "0.03em" }}>
              {t.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
