"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillOrb from "./SkillOrb";
import {
  Code2,
  Layout,
  Server,
  Database,
  Palette,
  Wrench,
  Grid,
  Orbit,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiLaravel,
  SiMysql,
  SiSqlite,
  SiFigma,
  SiDocker,
  SiGithub,
  SiC,
  SiCplusplus,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

type Pill = {
  name: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
};

type CategoryKey =
  | "all"
  | "langages"
  | "frontend"
  | "backend"
  | "databases"
  | "design"
  | "devops";

type CardData = {
  id: CategoryKey;
  title: string;
  subtitle: string;
  category: CategoryKey;
  accentColor: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  pills: Pill[];
};

const CATEGORIES: { id: CategoryKey; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "Toutes", icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: "langages", label: "Langages", icon: <Code2 className="w-3.5 h-3.5" /> },
  { id: "frontend", label: "Front-End", icon: <Layout className="w-3.5 h-3.5" /> },
  { id: "backend", label: "Back-End", icon: <Server className="w-3.5 h-3.5" /> },
  { id: "databases", label: "Bases de Données", icon: <Database className="w-3.5 h-3.5" /> },
  { id: "design", label: "UI & UX", icon: <Palette className="w-3.5 h-3.5" /> },
  { id: "devops", label: "DevOps & Outils", icon: <Wrench className="w-3.5 h-3.5" /> },
];

const CARDS: CardData[] = [
  {
    id: "langages",
    title: "Langages de Programmation",
    subtitle: "Solides bases algorithmiques & orientées objet",
    category: "langages",
    accentColor: "#3b82f6",
    iconBg: "rgba(59,130,246,0.12)",
    iconBorder: "rgba(59,130,246,0.3)",
    iconColor: "text-blue-400",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    pills: [
      { name: "C", colorClass: "text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" },
      { name: "C++", colorClass: "text-blue-500", bgClass: "bg-blue-600/10", borderClass: "border-blue-600/30" },
      { name: "C#", colorClass: "text-purple-400", bgClass: "bg-purple-500/10", borderClass: "border-purple-500/30" },
      { name: "PHP", colorClass: "text-indigo-400", bgClass: "bg-indigo-500/10", borderClass: "border-indigo-500/30" },
      { name: "Python", colorClass: "text-yellow-400", bgClass: "bg-yellow-500/10", borderClass: "border-yellow-500/30" },
      { name: "JavaScript", colorClass: "text-yellow-300", bgClass: "bg-yellow-400/10", borderClass: "border-yellow-400/30" },
    ],
  },
  {
    id: "frontend",
    title: "Front-End & UI Web",
    subtitle: "Interfaces réactives, dynamiques & performantes",
    category: "frontend",
    accentColor: "#a855f7",
    iconBg: "rgba(168,85,247,0.12)",
    iconBorder: "rgba(168,85,247,0.3)",
    iconColor: "text-purple-400",
    icon: <Layout className="w-6 h-6 text-purple-400" />,
    pills: [
      { name: "HTML5", colorClass: "text-orange-400", bgClass: "bg-orange-500/10", borderClass: "border-orange-500/30" },
      { name: "CSS3", colorClass: "text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" },
      { name: "Tailwind CSS", colorClass: "text-cyan-400", bgClass: "bg-cyan-500/10", borderClass: "border-cyan-500/30" },
      { name: "React.js", colorClass: "text-cyan-300", bgClass: "bg-cyan-400/10", borderClass: "border-cyan-400/30" },
      { name: "Next.js", colorClass: "text-slate-200", bgClass: "bg-slate-500/10", borderClass: "border-slate-500/30" },
    ],
  },
  {
    id: "backend",
    title: "Back-End & APIs",
    subtitle: "Architecture serveur robuste & services REST",
    category: "backend",
    accentColor: "#d946ef",
    iconBg: "rgba(217,70,239,0.12)",
    iconBorder: "rgba(217,70,239,0.3)",
    iconColor: "text-fuchsia-400",
    icon: <Server className="w-6 h-6 text-fuchsia-400" />,
    pills: [
      { name: "Node.js", colorClass: "text-green-400", bgClass: "bg-green-500/10", borderClass: "border-green-500/30" },
      { name: "Laravel", colorClass: "text-red-400", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
      { name: "Filament", colorClass: "text-yellow-400", bgClass: "bg-yellow-500/10", borderClass: "border-yellow-500/30" },
      { name: "REST API", colorClass: "text-indigo-400", bgClass: "bg-indigo-500/10", borderClass: "border-indigo-500/30" },
    ],
  },
  {
    id: "databases",
    title: "Bases de Données",
    subtitle: "Modélisation relationnelle & optimisation SQL",
    category: "databases",
    accentColor: "#10b981",
    iconBg: "rgba(16,185,129,0.12)",
    iconBorder: "rgba(16,185,129,0.3)",
    iconColor: "text-emerald-400",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    pills: [
      { name: "MySQL", colorClass: "text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" },
      { name: "SQL Server", colorClass: "text-red-400", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
      { name: "SQLite", colorClass: "text-cyan-400", bgClass: "bg-cyan-500/10", borderClass: "border-cyan-500/30" },
    ],
  },
  {
    id: "design",
    title: "UI & UX Design",
    subtitle: "Prototypage immersif & ergonomie utilisateur",
    category: "design",
    accentColor: "#ec4899",
    iconBg: "rgba(236,72,153,0.12)",
    iconBorder: "rgba(236,72,153,0.3)",
    iconColor: "text-pink-400",
    icon: <Palette className="w-6 h-6 text-pink-400" />,
    pills: [
      { name: "Figma", colorClass: "text-pink-400", bgClass: "bg-pink-500/10", borderClass: "border-pink-500/30" },
      { name: "Prototypage", colorClass: "text-pink-400", bgClass: "bg-pink-500/10", borderClass: "border-pink-500/30" },
      { name: "Wireframing", colorClass: "text-pink-400", bgClass: "bg-pink-500/10", borderClass: "border-pink-500/30" },
      { name: "Recherche Utilisateur", colorClass: "text-pink-400", bgClass: "bg-pink-500/10", borderClass: "border-pink-500/30" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Outils",
    subtitle: "Versionning, conteneurisation & environnement de dev",
    category: "devops",
    accentColor: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.12)",
    iconBorder: "rgba(139,92,246,0.3)",
    iconColor: "text-violet-400",
    icon: <Wrench className="w-6 h-6 text-violet-400" />,
    pills: [
      { name: "Git/GitHub", colorClass: "text-slate-200", bgClass: "bg-slate-700/40", borderClass: "border-slate-600/50" },
      { name: "Docker", colorClass: "text-cyan-400", bgClass: "bg-cyan-500/10", borderClass: "border-cyan-500/30" },
      { name: "VS Code", colorClass: "text-blue-400", bgClass: "bg-blue-500/10", borderClass: "border-blue-500/30" },
    ],
  },
];

/* Single Tech Card in Grid View */
const ALL_TECH_ITEMS = [
  { name: "React.js", category: "Front-End", color: "#61DAFB", icon: <SiReact /> },
  { name: "Next.js", category: "Front-End", color: "#FFFFFF", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", category: "Front-End", color: "#06B6D4", icon: <SiTailwindcss /> },
  { name: "Node.js", category: "Back-End", color: "#339933", icon: <SiNodedotjs /> },
  { name: "Laravel", category: "Back-End", color: "#FF2D20", icon: <SiLaravel /> },
  { name: "Python", category: "Langages", color: "#3776AB", icon: <SiPython /> },
  { name: "JavaScript", category: "Langages", color: "#F7DF1E", icon: <SiJavascript /> },
  { name: "PHP", category: "Langages", color: "#777BB4", icon: <SiPhp /> },
  { name: "MySQL", category: "Bases de données", color: "#4479A1", icon: <SiMysql /> },
  { name: "SQL Server", category: "Bases de données", color: "#CC292B", icon: <DiMsqlServer /> },
  { name: "Figma", category: "UI/UX Design", color: "#F24E1E", icon: <SiFigma /> },
  { name: "Docker", category: "DevOps", color: "#2496ED", icon: <SiDocker /> },
  { name: "Git/GitHub", category: "DevOps", color: "#FFFFFF", icon: <SiGithub /> },
  { name: "VS Code", category: "DevOps", color: "#007ACC", icon: <VscVscode /> },
  { name: "C++", category: "Langages", color: "#00599C", icon: <SiCplusplus /> },
  { name: "C#", category: "Langages", color: "#239120", icon: <TbBrandCSharp /> },
  { name: "HTML5", category: "Front-End", color: "#E44D26", icon: <SiHtml5 /> },
  { name: "CSS3", category: "Front-End", color: "#1572B6", icon: <SiCss /> },
  { name: "SQLite", category: "Bases de données", color: "#003B57", icon: <SiSqlite /> },
  { name: "C", category: "Langages", color: "#A8B9CC", icon: <SiC /> },
];

export default function StackCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [viewMode, setViewMode] = useState<"orb" | "grid">("orb");

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.85;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredCards = CARDS.filter(
    (card) => activeCategory === "all" || card.category === activeCategory
  );

  return (
    <div className="relative w-full max-w-7xl mx-auto space-y-8">
      {/* ─── Control Bar: Categories & View Switcher ─── */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-950/60 p-2.5 rounded-2xl border border-white/10 backdrop-blur-xl">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto py-1 px-1 hide-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryGlow"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 shadow-md shadow-blue-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {cat.icon}
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle Button (Constellations vs Grille) */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-white/10 shrink-0">
          <button
            onClick={() => setViewMode("orb")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "orb"
                ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>Constellations</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "grid"
                ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Grille Pro</span>
          </button>
        </div>
      </div>

      {/* ─── View Mode Content ─── */}
      <AnimatePresence mode="wait">
        {viewMode === "orb" ? (
          /* ─── Orb Slider View ─── */
          <motion.div
            key="orb-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="relative group/slider"
          >
            {/* Scroll Navigation Buttons */}
            {filteredCards.length > 3 && (
              <>
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-30 p-3 rounded-full bg-slate-900/90 border border-blue-500/30 text-white backdrop-blur-md opacity-80 hover:opacity-100 transition-all hover:bg-blue-600 hover:scale-110 shadow-lg shadow-blue-950/50"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-30 p-3 rounded-full bg-slate-900/90 border border-blue-500/30 text-white backdrop-blur-md opacity-80 hover:opacity-100 transition-all hover:bg-blue-600 hover:scale-110 shadow-lg shadow-blue-950/50"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Slider Container */}
            <div
              ref={containerRef}
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory hide-scrollbar py-3 px-1"
            >
              {filteredCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center p-6 rounded-3xl relative overflow-hidden group transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(13, 19, 36, 0.75) 0%, rgba(6, 10, 20, 0.85) 100%)",
                    border: `1px solid ${card.accentColor}33`,
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${card.accentColor}88`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px -10px ${card.accentColor}40, 0 8px 32px rgba(0,0,0,0.5)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${card.accentColor}33`;
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)";
                  }}
                >
                  {/* Glowing Top Radial Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${card.accentColor}18, transparent 70%)`,
                    }}
                  />

                  {/* Card Header Title */}
                  <div className="flex items-center justify-between gap-3 mb-2 relative z-10">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{card.subtitle}</p>
                    </div>

                    <div
                      className="p-2 rounded-xl shrink-0"
                      style={{
                        background: card.iconBg,
                        border: `1px solid ${card.iconBorder}`,
                      }}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Skill Orb Graphics */}
                  <div className="flex items-center justify-center w-full mt-2">
                    <div className="scale-[0.85] sm:scale-95 md:scale-100 origin-center">
                      <SkillOrb
                        centralIcon={card.icon}
                        skills={card.pills}
                        iconColor={card.iconColor}
                        iconBg={card.iconBg}
                        iconBorder={card.iconBorder}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          /* ─── Grid View Matrix ─── */
          <motion.div
            key="grid-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {ALL_TECH_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(13, 19, 36, 0.7) 0%, rgba(6, 10, 20, 0.85) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}66`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px -6px ${item.color}33`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                }}
              >
                {/* Brand Color Ambient Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${item.color}15, transparent 75%)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}33`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <div className="font-bold text-white text-sm tracking-tight mb-1">
                  {item.name}
                </div>
                <div className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

