"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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
  tag: string;
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
    tag: "SYS & ALGO // 01",
    title: "Langages de Programmation",
    subtitle: "Solides bases algorithmiques & orientées objet",
    category: "langages",
    accentColor: "#3b82f6",
    iconBg: "rgba(59,130,246,0.15)",
    iconBorder: "rgba(59,130,246,0.35)",
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
    tag: "CLIENT & UI // 02",
    title: "Front-End & UI Web",
    subtitle: "Interfaces réactives, dynamiques & performantes",
    category: "frontend",
    accentColor: "#a855f7",
    iconBg: "rgba(168,85,247,0.15)",
    iconBorder: "rgba(168,85,247,0.35)",
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
    tag: "SERVER & API // 03",
    title: "Back-End & APIs",
    subtitle: "Architecture serveur robuste & services REST",
    category: "backend",
    accentColor: "#d946ef",
    iconBg: "rgba(217,70,239,0.15)",
    iconBorder: "rgba(217,70,239,0.35)",
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
    tag: "DATA & SQL // 04",
    title: "Bases de Données",
    subtitle: "Modélisation relationnelle & optimisation SQL",
    category: "databases",
    accentColor: "#10b981",
    iconBg: "rgba(16,185,129,0.15)",
    iconBorder: "rgba(16,185,129,0.35)",
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
    tag: "PRODUCT // 05",
    title: "UI & UX Design",
    subtitle: "Prototypage immersif & ergonomie utilisateur",
    category: "design",
    accentColor: "#ec4899",
    iconBg: "rgba(236,72,153,0.15)",
    iconBorder: "rgba(236,72,153,0.35)",
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
    tag: "INFRA & TOOLS // 06",
    title: "DevOps & Outils",
    subtitle: "Versionning, conteneurisation & environnement de dev",
    category: "devops",
    accentColor: "#8b5cf6",
    iconBg: "rgba(139,92,246,0.15)",
    iconBorder: "rgba(139,92,246,0.35)",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredCards =
    activeCategory === "all"
      ? CARDS
      : CARDS.filter((card) => card.category === activeCategory);

  // Keep index within bounds when filtering
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const scrollToCard = useCallback((index: number) => {
    const target = Math.max(0, Math.min(index, filteredCards.length - 1));
    setCurrentIndex(target);
    if (containerRef.current) {
      const children = containerRef.current.children;
      if (children[target]) {
        (children[target] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [filteredCards.length]);

  const scroll = (direction: "left" | "right") => {
    const next = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    scrollToCard(next);
  };

  // Sync scroll on manual drag
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 360;
    const index = Math.round(container.scrollLeft / cardWidth);
    if (index !== currentIndex && index >= 0 && index < filteredCards.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {/* ─── Control Bar: Categories & View Switcher ─── */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-950/70 p-3 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto py-1 px-1 hide-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 shrink-0 ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md shadow-blue-600/30 border border-blue-400/30"
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

        {/* View Mode Toggle Button */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-white/10 shrink-0">
          <button
            onClick={() => setViewMode("orb")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "orb"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/30 border border-blue-400/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Orbit className="w-3.5 h-3.5" />
            <span>Circular Gallery</span>
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "grid"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-500/30 border border-blue-400/20"
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
          /* ─── Circular 3D Curved Carousel View ─── */
          <motion.div
            key="orb-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="relative group/slider select-none"
            style={{ perspective: "1400px" }}
          >
            {/* Scroll Navigation Buttons */}
            {filteredCards.length > 1 && (
              <>
                <button
                  onClick={() => scroll("left")}
                  disabled={currentIndex === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 z-40 p-3.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-xl ${
                    currentIndex === 0
                      ? "opacity-30 cursor-not-allowed bg-slate-900/60 border border-white/5 text-slate-500"
                      : "opacity-90 hover:opacity-100 bg-slate-900/90 border border-blue-500/40 text-white hover:bg-blue-600 hover:scale-110 shadow-blue-950/60"
                  }`}
                  aria-label="Previous card"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => scroll("right")}
                  disabled={currentIndex === filteredCards.length - 1}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 z-40 p-3.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-xl ${
                    currentIndex === filteredCards.length - 1
                      ? "opacity-30 cursor-not-allowed bg-slate-900/60 border border-white/5 text-slate-500"
                      : "opacity-90 hover:opacity-100 bg-slate-900/90 border border-blue-500/40 text-white hover:bg-blue-600 hover:scale-110 shadow-blue-950/60"
                  }`}
                  aria-label="Next card"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Slider Container with 3D Circular Bend stage */}
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-6 sm:gap-8 snap-x snap-mandatory hide-scrollbar py-6 px-4 md:px-12 items-center"
              style={{
                transformStyle: "preserve-3d",
                scrollBehavior: "smooth",
              }}
            >
              {filteredCards.map((card, index) => {
                const diff = index - currentIndex;
                const isFocused = diff === 0;

                // 3D Circular Bend transforms (like CircularGallery cylinder arc)
                const rotateY = diff * -7; // Cylindrical arc rotation
                const translateZ = isFocused ? 0 : -Math.min(Math.abs(diff) * 45, 120);
                const translateY = isFocused ? 0 : -Math.min(Math.abs(diff) * 6, 18);
                const scale = isFocused ? 1.02 : Math.max(0.92, 1 - Math.abs(diff) * 0.05);
                const opacity = isFocused ? 1 : Math.max(0.65, 1 - Math.abs(diff) * 0.2);

                return (
                  <motion.div
                    key={card.id}
                    layout
                    onClick={() => scrollToCard(index)}
                    animate={{
                      rotateY,
                      z: translateZ,
                      y: translateY,
                      scale,
                      opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    className={`flex-none w-[310px] sm:w-[350px] md:w-[380px] snap-center p-6 rounded-3xl relative overflow-hidden group cursor-pointer transition-all duration-500 ${
                      isFocused ? "ring-1" : ""
                    }`}
                    style={{
                      background:
                        "linear-gradient(155deg, rgba(14, 23, 45, 0.88) 0%, rgba(7, 12, 24, 0.96) 100%)",
                      border: isFocused
                        ? `1.5px solid ${card.accentColor}90`
                        : `1px solid ${card.accentColor}30`,
                      backdropFilter: "blur(24px)",
                      boxShadow: isFocused
                        ? `0 20px 50px -15px ${card.accentColor}40, 0 0 35px -8px ${card.accentColor}30, inset 0 1px 1px 0 rgba(255,255,255,0.2)`
                        : `0 12px 36px -12px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.06)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Glowing Top Specular Rim */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${card.accentColor}, transparent)`,
                        opacity: isFocused ? 1 : 0.4,
                      }}
                    />

                    {/* Ambient Neon Radial Backlight */}
                    <div
                      className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full pointer-events-none transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, ${card.accentColor}25 0%, transparent 70%)`,
                        opacity: isFocused ? 1 : 0.4,
                      }}
                    />

                    {/* Card Header: Tag, Title & Icon */}
                    <div className="flex items-start justify-between gap-3 mb-3 relative z-10">
                      <div>
                        <span
                          className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-1.5"
                          style={{
                            background: `${card.accentColor}18`,
                            color: card.accentColor,
                            border: `1px solid ${card.accentColor}33`,
                          }}
                        >
                          {card.tag}
                        </span>
                        <h3 className="text-lg md:text-xl font-extrabold text-white tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {card.subtitle}
                        </p>
                      </div>

                      <div
                        className="p-2.5 rounded-2xl shrink-0 transition-all duration-300 group-hover:scale-110 shadow-lg"
                        style={{
                          background: card.iconBg,
                          border: `1px solid ${card.iconBorder}`,
                          boxShadow: `0 0 20px -4px ${card.accentColor}44`,
                        }}
                      >
                        {card.icon}
                      </div>
                    </div>

                    {/* Divider with Accent Glow */}
                    <div
                      className="w-full h-px my-2"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${card.accentColor}40, transparent)`,
                      }}
                    />

                    {/* Skill Orb Graphics */}
                    <div className="flex items-center justify-center w-full mt-2 relative z-10">
                      <div className="scale-[0.88] sm:scale-95 md:scale-100 origin-center">
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
                );
              })}
            </div>

            {/* Bottom Navigation Track & Dots */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md">
                {filteredCards.map((card, i) => (
                  <button
                    key={card.id}
                    onClick={() => scrollToCard(i)}
                    className="relative transition-all duration-300 flex items-center justify-center"
                    style={{
                      width: currentIndex === i ? "24px" : "8px",
                      height: "8px",
                    }}
                    aria-label={`Go to ${card.title}`}
                  >
                    <span
                      className="w-full h-full rounded-full transition-all duration-300"
                      style={{
                        background:
                          currentIndex === i
                            ? card.accentColor
                            : "rgba(255,255,255,0.2)",
                        boxShadow:
                          currentIndex === i
                            ? `0 0 10px ${card.accentColor}`
                            : "none",
                      }}
                    />
                  </button>
                ))}
              </div>
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
                    "linear-gradient(145deg, rgba(13, 19, 36, 0.75) 0%, rgba(6, 10, 20, 0.9) 100%)",
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
