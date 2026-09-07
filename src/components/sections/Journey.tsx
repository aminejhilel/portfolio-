"use client";

import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import { useState, useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  Award,
  Sparkles,
  Calendar,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Layers,
  ChevronRight,
} from "lucide-react";

/* ─── Types ─── */
export type JourneyCategory = "all" | "education" | "experience";

export type BadgeKind = "diploma" | "stage" | "cert" | "bac";

export interface TimelineItem {
  id: string;
  category: "education" | "experience";
  period: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badges: { label: string; kind: BadgeKind }[];
  side: "left" | "right";
  accentColor: string;
  icon: typeof GraduationCap;
}

/* ─── Data ─── */
const TIMELINE: TimelineItem[] = [
  {
    id: "emig-diploma",
    category: "education",
    period: "2024 – 2026",
    title: "Diplôme en Développement Web & Réseaux",
    subtitle: "École EMIG — Accréditée & Reconnue par l'État",
    description:
      "Formation diplômante supérieure dans une école accréditée par l'État marocain. Spécialisation approfondie en développement Full-Stack, ingénierie réseaux et cybersécurité.",
    highlights: [
      "Développement Web Full-Stack (Next.js, React, Node.js, Python)",
      "Administration des Systèmes Linux & Architecture Réseau",
      "Cybersécurité, sécurité applicative et bonnes pratiques IT",
      "Projets pratiques et développement d'outils modernes",
    ],
    badges: [
      { label: "Diplôme d'État", kind: "diploma" },
      { label: "EMIG", kind: "diploma" },
      { label: "Full-Stack", kind: "cert" },
      { label: "Cybersécurité", kind: "cert" },
      { label: "Linux & Python", kind: "cert" },
    ],
    side: "left",
    accentColor: "#3b82f6",
    icon: GraduationCap,
  },
  {
    id: "stage-fastbencar-2",
    category: "experience",
    period: "2025 – 2026",
    title: "Stage Professionnel · II",
    subtitle: "FastBenCar — Location de Voiture (1 mois)",
    description:
      "Deuxième stage au sein de FastBenCar avec une autonomie accrue. Contribution au développement et à l'optimisation des flux numériques de gestion des véhicules et réservations.",
    highlights: [
      "Optimisation des processus numériques de réservation et suivi",
      "Gestion et maintenance de la base de données flotte automobile",
      "Support technique aux utilisateurs internes et assistance clients",
    ],
    badges: [
      { label: "Stage Pro", kind: "stage" },
      { label: "1 Mois", kind: "stage" },
      { label: "FastBenCar", kind: "stage" },
      { label: "Gestion Flotte", kind: "stage" },
    ],
    side: "right",
    accentColor: "#6366f1",
    icon: Briefcase,
  },
  {
    id: "stage-fastbencar-1",
    category: "experience",
    period: "2024 – 2025",
    title: "Stage Professionnel · I",
    subtitle: "FastBenCar — Location de Voiture (1 mois)",
    description:
      "Premier stage pratique d'immersion professionnelle. Découverte du fonctionnement opérationnel d'une entreprise et utilisation d'outils de gestion informatisés.",
    highlights: [
      "Utilisation et prise en main des applications de gestion d'agence",
      "Gestion de la relation client et préparation des contrats",
      "Accompagnement de l'équipe dans le suivi quotidien",
    ],
    badges: [
      { label: "Stage Pro", kind: "stage" },
      { label: "1 Mois", kind: "stage" },
      { label: "FastBenCar", kind: "stage" },
    ],
    side: "left",
    accentColor: "#06b6d4",
    icon: Building2,
  },
  {
    id: "baccalaureat",
    category: "education",
    period: "2021 – 2022",
    title: "Baccalauréat Scientifique / Technique",
    subtitle: "Lycée — Maroc",
    description:
      "Obtention du Baccalauréat, concrétisant une appétence marquée pour la logique, la résolution de problèmes et l'informatique.",
    highlights: [
      "Solides bases en raisonnement scientifique et algorithmique",
      "Étape fondamentale vers les études supérieures en informatique",
    ],
    badges: [{ label: "BAC", kind: "bac" }],
    side: "right",
    accentColor: "#8b5cf6",
    icon: Award,
  },
];

/* ─── Badge Colors & Styles ─── */
const BADGE_STYLES: Record<BadgeKind, { bg: string; border: string; text: string; glow: string }> = {
  bac: {
    bg: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.35)",
    text: "#d8b4fe",
    glow: "rgba(139,92,246,0.25)",
  },
  stage: {
    bg: "rgba(99,102,241,0.14)",
    border: "rgba(99,102,241,0.38)",
    text: "#c7d2fe",
    glow: "rgba(99,102,241,0.25)",
  },
  diploma: {
    bg: "rgba(59,130,246,0.16)",
    border: "rgba(59,130,246,0.45)",
    text: "#bfdbfe",
    glow: "rgba(59,130,246,0.3)",
  },
  cert: {
    bg: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.35)",
    text: "#a5f3fc",
    glow: "rgba(6,182,212,0.25)",
  },
};

/* ─── Metric Cards Data ─── */
const METRICS = [
  {
    value: "2+ Ans",
    title: "Formation Spécialisée",
    sub: "Développement Web & Réseaux EMIG",
    icon: GraduationCap,
    color: "#3b82f6",
  },
  {
    value: "2 Stages",
    title: "Expérience Terrain",
    sub: "FastBenCar Location De Voiture",
    icon: Briefcase,
    color: "#6366f1",
  },
  {
    value: "Accrédité",
    title: "Diplôme d'État",
    sub: "École Reconnue par l'État Marocain",
    icon: ShieldCheck,
    color: "#06b6d4",
  },
];

/* ─── Card Component ─── */
function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });
  const IconComponent = item.icon;

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col md:flex-row items-center w-full my-6"
    >
      {/* Layout alignment container */}
      <div
        className={`w-full flex items-center justify-between ${
          item.side === "right" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Card Box */}
        <div
          className={`w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 ${
            item.side === "right" ? "md:mr-0" : "md:ml-0"
          }`}
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
            style={{
              background:
                "linear-gradient(145deg, rgba(13, 19, 36, 0.75) 0%, rgba(6, 10, 20, 0.85) 100%)",
              border: `1px solid ${isHovered ? `${item.accentColor}66` : "rgba(255, 255, 255, 0.08)"}`,
              backdropFilter: "blur(16px)",
              boxShadow: isHovered
                ? `0 12px 36px -8px ${item.accentColor}33, 0 0 20px rgba(0,0,0,0.6)`
                : "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Cursor Spotlight Glow Overlay */}
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: isHovered
                  ? `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${item.accentColor}1c, transparent 80%)`
                  : "none",
              }}
            />

            {/* Glowing Corner Background Graphic */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none filter blur-2xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
              style={{ background: item.accentColor }}
            />

            {/* Header: Period Pill & Icon */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider"
                style={{
                  background: `${item.accentColor}18`,
                  border: `1px solid ${item.accentColor}44`,
                  color: item.accentColor,
                  boxShadow: `0 0 12px ${item.accentColor}20`,
                }}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.period}</span>
              </div>

              {/* Icon Badge */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${item.accentColor}1a`,
                  border: `1px solid ${item.accentColor}35`,
                  color: item.accentColor,
                }}
              >
                <IconComponent className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-blue-100 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm font-medium text-slate-400 mb-3 flex items-center gap-1.5">
              <span>{item.subtitle}</span>
            </p>

            {/* Description */}
            <p className="text-sm text-slate-300/85 leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Highlights List */}
            {item.highlights && item.highlights.length > 0 && (
              <div className="mb-5 space-y-2 bg-slate-950/40 rounded-xl p-3.5 border border-white/5">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: item.accentColor }}
                    />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
              {item.badges.map((badge, i) => {
                const s = BADGE_STYLES[badge.kind];
                return (
                  <motion.span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide"
                    style={{
                      background: s.bg,
                      border: `1px solid ${s.border}`,
                      color: s.text,
                      boxShadow: `0 0 8px ${s.glow}`,
                    }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {badge.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Center Node Marker */}
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.15 }}
            className="relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer group"
            style={{
              background: "#030712",
              border: `2px solid ${item.accentColor}`,
              boxShadow: `0 0 20px ${item.accentColor}66, inset 0 0 10px ${item.accentColor}33`,
            }}
          >
            {/* Center Icon inside Node */}
            <IconComponent
              className="w-4 h-4 transition-transform duration-300 group-hover:scale-125"
              style={{ color: item.accentColor }}
            />

            {/* Animated Ambient Pulse Ring */}
            <motion.div
              className="absolute -inset-1 rounded-full pointer-events-none"
              style={{ border: `1px solid ${item.accentColor}` }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState<JourneyCategory>("all");

  const filteredItems = TIMELINE.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <section
      id="journey"
      className="relative py-28 overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full filter blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full" ref={sectionRef}>
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20">
              03. PARCOURS
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Mon Parcours & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">Expériences</span>
              </h2>
              <p className="text-slate-400 mt-3 text-base max-w-2xl leading-relaxed">
                De l&apos;obtention du Baccalauréat jusqu&apos;à la spécialisation en développement Full-Stack &amp; Réseaux — un chemin axé sur la pratique et les compétences techniques.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md shrink-0">
              {[
                { id: "all", label: "Tous", icon: Layers },
                { id: "education", label: "Éducation", icon: GraduationCap },
                { id: "experience", label: "Stages", icon: Briefcase },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as JourneyCategory)}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabGlow"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      <TabIcon className="w-3.5 h-3.5" />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-blue-500/50 via-indigo-500/20 to-transparent" />
        </motion.div>

        {/* Metrics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {METRICS.map((m, idx) => {
            const MIcon = m.icon;
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl p-4 flex items-center gap-4 bg-slate-900/40 border border-white/5 backdrop-blur-sm group hover:border-white/15 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${m.color}15`,
                    border: `1px solid ${m.color}30`,
                    color: m.color,
                  }}
                >
                  <MIcon className="w-6 h-6" />
                </div>
                <div>
                  <div
                    className="text-xl font-black tracking-tight"
                    style={{ color: m.color }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-white mb-0.5">{m.title}</div>
                  <div className="text-[11px] text-slate-400">{m.sub}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto mt-6">
          {/* Glowing Center Line Beam */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5">
            <div className="w-full h-full bg-gradient-to-b from-blue-600 via-indigo-500 to-violet-600 opacity-60 rounded-full" />
            <motion.div
              className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-indigo-400 origin-top shadow-[0_0_12px_#3b82f6]"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Cards Grid */}
          <div className="relative z-10">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


