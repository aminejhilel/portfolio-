"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

/* ─── Types ─── */
type BadgeKind = "diploma" | "stage" | "cert" | "bac";

interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  badges: { label: string; kind: BadgeKind }[];
  side: "left" | "right";
}

/* ─── Data ─── */
const TIMELINE: TimelineItem[] = [
  {
    period: "2021 – 2022",
    title: "Baccalauréat",
    subtitle: "Lycée – Maroc",
    description:
      "Obtention du Baccalauréat, première étape clé d'un parcours orienté vers les technologies et le numérique.",
    badges: [{ label: "BAC", kind: "bac" }],
    side: "left",
  },
  {
    period: "2022 – 2023",
    title: "Stage Professionnel · 6 mois",
    subtitle: "FastBenCar — Location de Voiture",
    description:
      "Stage pratique de 6 mois au sein de FastBenCar, agence de location de voiture. Développement de compétences en gestion client, suivi de flotte et outils numériques de l'entreprise.",
    badges: [
      { label: "Stage", kind: "stage" },
      { label: "6 mois", kind: "stage" },
    ],
    side: "right",
  },
  {
    period: "2023 – 2024",
    title: "Stage Professionnel · 6 mois",
    subtitle: "FastBenCar — Location de Voiture",
    description:
      "Deuxième stage chez FastBenCar, avec des responsabilités élargies. Contribution au développement d'outils internes et optimisation des processus de gestion des réservations.",
    badges: [
      { label: "Stage", kind: "stage" },
      { label: "6 mois", kind: "stage" },
    ],
    side: "left",
  },
  {
    period: "2024 – 2026",
    title: "Diplôme en Développement Web & Réseaux",
    subtitle: "École EMIG — Accréditée & Reconnue par l'État",
    description:
      "Formation diplômante dans une école accréditée et reconnue par l'État marocain. Spécialisation en développement Full-Stack, réseaux et cybersécurité. Obtention de certifications en ligne complémentaires.",
    badges: [
      { label: "Diplôme", kind: "diploma" },
      { label: "EMIG", kind: "diploma" },
      { label: "Cybersécurité", kind: "cert" },
      { label: "Python", kind: "cert" },
      { label: "Linux", kind: "cert" },
    ],
    side: "right",
  },
];

/* ─── Badge colors ─── */
const BADGE_STYLES: Record<BadgeKind, { bg: string; border: string; text: string; glow: string }> = {
  bac: {
    bg: "rgba(0,47,167,0.12)",
    border: "rgba(0,47,167,0.35)",
    text: "#ffffff",
    glow: "rgba(0,47,167,0.2)",
  },
  stage: {
    bg: "rgba(26,79,196,0.12)",
    border: "rgba(26,79,196,0.35)",
    text: "#adc0ff",
    glow: "rgba(26,79,196,0.2)",
  },
  diploma: {
    bg: "rgba(0,47,167,0.15)",
    border: "rgba(0,47,167,0.45)",
    text: "#c8d8ff",
    glow: "rgba(0,47,167,0.3)",
  },
  cert: {
    bg: "rgba(0,47,167,0.1)",
    border: "rgba(0,47,167,0.3)",
    text: "#7ba0ee",
    glow: "rgba(0,47,167,0.18)",
  },
};

/* ─── Icon per kind ─── */
const DOT_COLORS: Record<BadgeKind, string> = {
  bac: "#002FA7",
  stage: "#1a4fc4",
  diploma: "#3a6fd8",
  cert: "#ffffff",
};

function getDotColor(item: TimelineItem) {
  const first = item.badges[0]?.kind ?? "stage";
  return DOT_COLORS[first];
}

/* ─── Variants ─── */
const sectionVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = (side: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: side === "left" ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

/* ─── Card ─── */
function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const dotColor = getDotColor(item);

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-0 ${
        item.side === "right" ? "flex-row-reverse" : "flex-row"
      } w-full`}
    >
      {/* Card */}
      <motion.div
        className={`w-[calc(50%-2.5rem)] ${item.side === "right" ? "mr-10" : "ml-10"}`}
        variants={cardVariants(item.side)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="relative rounded-2xl p-6 group cursor-default"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0,47,167,0.08) 100%)",
            border: "1px solid rgba(0,47,167,0.22)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
          }}
          whileHover={{
            scale: 1.025,
            boxShadow: `0 0 30px ${dotColor}30, 0 4px 40px rgba(0,0,0,0.5)`,
            borderColor: `${dotColor}55`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {/* Corner glow */}
          <motion.div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${
                item.side === "left" ? "100%" : "0%"
              } 0%, ${dotColor}18, transparent 60%)`,
            }}
          />

          {/* Period pill */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold mb-3 tracking-widest"
            style={{
              background: `${dotColor}18`,
              border: `1px solid ${dotColor}44`,
              color: dotColor,
              boxShadow: `0 0 12px ${dotColor}22`,
            }}
          >
            {item.period}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-1 leading-tight">{item.title}</h3>

          {/* Subtitle */}
          <p className="text-sm text-slate-400 mb-3 font-medium">{item.subtitle}</p>

          {/* Description */}
          <p className="text-sm text-slate-300/80 leading-relaxed mb-4">{item.description}</p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {item.badges.map((badge, i) => {
              const s = BADGE_STYLES[badge.kind];
              return (
                <motion.span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wide"
                  style={{
                    background: s.bg,
                    border: `1px solid ${s.border}`,
                    color: s.text,
                    boxShadow: `0 0 8px ${s.glow}`,
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {badge.label}
                </motion.span>
              );
            })}
          </div>

          {/* Connector arrow */}
          <div
            className={`absolute top-8 ${
              item.side === "left"
                ? "-right-3 border-l-[12px] border-l-blue-700/20"
                : "-left-3 border-r-[12px] border-r-blue-700/20"
            } border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent`}
          />
        </motion.div>
      </motion.div>

      {/* Center dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <motion.div
          className="relative w-5 h-5 rounded-full border-2 flex items-center justify-center"
          style={{
            background: `${dotColor}30`,
            borderColor: dotColor,
            boxShadow: `0 0 16px ${dotColor}80, 0 0 4px ${dotColor}`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: dotColor }}
          />
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${dotColor}` }}
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="journey"
      className="relative py-28 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-800 rounded-full filter blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-700 rounded-full filter blur-[160px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={sectionRef}
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-sm font-bold tracking-widest"
              style={{ color: "rgba(0,47,167,0.8)" }}
            >
              03.
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Mon Parcours</h2>
          </div>
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, rgba(0,47,167,0.5), transparent)",
            }}
          />
          <p className="text-slate-400 mt-4 text-sm md:text-base max-w-2xl">
            De l&apos;obtention du Bac jusqu&apos;au diplôme en développement — une trajectoire
            construite par la pratique et la passion du numérique.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 mt-8 z-10">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="w-full h-full origin-top"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, #1a4fc4 20%, #002FA7 80%, transparent 100%)",
              }}
              variants={lineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            />
          </div>

          {/* Cards */}
          <motion.div
            className="flex flex-col gap-16"
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {TIMELINE.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </motion.div>

          {/* Bottom cap dot */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 rounded-full"
            style={{
              background: "linear-gradient(135deg, #002FA7, #1a4fc4)",
              boxShadow: "0 0 12px rgba(0,47,167,0.7)",
            }}
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.8, type: "spring", stiffness: 400 }}
          />
        </div>
      </div>
    </section>
  );
}

