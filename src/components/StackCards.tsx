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
    accentColor: "#ef4444",
    iconBg: "rgba(239,68,68,0.15)",
    iconBorder: "rgba(239,68,68,0.35)",
    iconColor: "text-red-400",
    icon: <Code2 className="w-6 h-6 text-red-400" />,
    pills: [
      { name: "C", colorClass: "text-red-300", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
      { name: "C++", colorClass: "text-rose-400", bgClass: "bg-rose-600/10", borderClass: "border-rose-600/30" },
      { name: "C#", colorClass: "text-red-400", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
      { name: "PHP", colorClass: "text-orange-400", bgClass: "bg-orange-500/10", borderClass: "border-orange-500/30" },
      { name: "Python", colorClass: "text-yellow-400", bgClass: "bg-yellow-500/10", borderClass: "border-yellow-500/30" },
      { name: "JavaScript", colorClass: "text-amber-300", bgClass: "bg-amber-400/10", borderClass: "border-amber-400/30" },
    ],
  },
  {
    id: "frontend",
    tag: "CLIENT & UI // 02",
    title: "Front-End & UI Web",
    subtitle: "Interfaces réactives, dynamiques & performantes",
    category: "frontend",
    accentColor: "#f43f5e",
    iconBg: "rgba(244,63,94,0.15)",
    iconBorder: "rgba(244,63,94,0.35)",
    iconColor: "text-rose-400",
    icon: <Layout className="w-6 h-6 text-rose-400" />,
    pills: [
      { name: "HTML5", colorClass: "text-orange-400", bgClass: "bg-orange-500/10", borderClass: "border-orange-500/30" },
      { name: "CSS3", colorClass: "text-rose-400", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" },
      { name: "Tailwind CSS", colorClass: "text-red-300", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
      { name: "React.js", colorClass: "text-rose-300", bgClass: "bg-rose-400/10", borderClass: "border-rose-400/30" },
      { name: "Next.js", colorClass: "text-slate-200", bgClass: "bg-slate-500/10", borderClass: "border-slate-500/30" },
    ],
  },
  {
    id: "backend",
    tag: "SERVER & API // 03",
    title: "Back-End & APIs",
    subtitle: "Architecture serveur robuste & services REST",
    category: "backend",
    accentColor: "#dc2626",
    iconBg: "rgba(220,38,38,0.15)",
    iconBorder: "rgba(220,38,38,0.35)",
    iconColor: "text-red-400",
    icon: <Server className="w-6 h-6 text-red-400" />,
    pills: [
      { name: "Node.js", colorClass: "text-emerald-400", bgClass: "bg-emerald-500/10", borderClass: "border-emerald-500/30" },
      { name: "Laravel", colorClass: "text-red-400", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
      { name: "Filament", colorClass: "text-amber-400", bgClass: "bg-amber-500/10", borderClass: "border-amber-500/30" },
      { name: "REST API", colorClass: "text-rose-400", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" },
    ],
  },
  {
    id: "databases",
    tag: "DATA & SQL // 04",
    title: "Bases de Données",
    subtitle: "Modélisation relationnelle & optimisation SQL",
    category: "databases",
    accentColor: "#e11d48",
    iconBg: "rgba(225,29,72,0.15)",
    iconBorder: "rgba(225,29,72,0.35)",
    iconColor: "text-rose-400",
    icon: <Database className="w-6 h-6 text-rose-400" />,
    pills: [
      { name: "MySQL", colorClass: "text-rose-300", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" },
      { name: "SQL Server", colorClass: "text-red-400", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
      { name: "SQLite", colorClass: "text-orange-300", bgClass: "bg-orange-500/10", borderClass: "border-orange-500/30" },
    ],
  },
  {
    id: "design",
    tag: "PRODUCT // 05",
    title: "UI & UX Design",
    subtitle: "Prototypage immersif & ergonomie utilisateur",
    category: "design",
    accentColor: "#b91c1c",
    iconBg: "rgba(185,28,28,0.15)",
    iconBorder: "rgba(185,28,28,0.35)",
    iconColor: "text-red-400",
    icon: <Palette className="w-6 h-6 text-red-400" />,
    pills: [
      { name: "Figma", colorClass: "text-rose-400", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" },
      { name: "Prototypage", colorClass: "text-red-400", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
      { name: "Wireframing", colorClass: "text-rose-300", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" },
      { name: "Recherche Utilisateur", colorClass: "text-red-300", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
    ],
  },
  {
    id: "devops",
    tag: "INFRA & TOOLS // 06",
    title: "DevOps & Outils",
    subtitle: "Versionning, conteneurisation & environnement de dev",
    category: "devops",
    accentColor: "#991b1b",
    iconBg: "rgba(153,27,27,0.15)",
    iconBorder: "rgba(153,27,27,0.35)",
    iconColor: "text-red-400",
    icon: <Wrench className="w-6 h-6 text-red-400" />,
    pills: [
      { name: "Git/GitHub", colorClass: "text-slate-200", bgClass: "bg-slate-800/40", borderClass: "border-slate-700/50" },
      { name: "Docker", colorClass: "text-rose-400", bgClass: "bg-rose-500/10", borderClass: "border-rose-500/30" },
      { name: "VS Code", colorClass: "text-red-400", bgClass: "bg-red-500/10", borderClass: "border-red-500/30" },
    ],
  },
];

/* Single Tech Card in Grid View */
const ALL_TECH_ITEMS = [
  { name: "React.js", category: "Front-End", color: "#f43f5e", icon: <SiReact /> },
  { name: "Next.js", category: "Front-End", color: "#FFFFFF", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", category: "Front-End", color: "#ef4444", icon: <SiTailwindcss /> },
  { name: "Node.js", category: "Back-End", color: "#22c55e", icon: <SiNodedotjs /> },
  { name: "Laravel", category: "Back-End", color: "#dc2626", icon: <SiLaravel /> },
  { name: "Python", category: "Langages", color: "#eab308", icon: <SiPython /> },
  { name: "JavaScript", category: "Langages", color: "#f59e0b", icon: <SiJavascript /> },
  { name: "PHP", category: "Langages", color: "#f97316", icon: <SiPhp /> },
  { name: "MySQL", category: "Bases de données", color: "#e11d48", icon: <SiMysql /> },
  { name: "SQL Server", category: "Bases de données", color: "#b91c1c", icon: <DiMsqlServer /> },
  { name: "Figma", category: "UI/UX Design", color: "#f43f5e", icon: <SiFigma /> },
  { name: "Docker", category: "DevOps", color: "#dc2626", icon: <SiDocker /> },
  { name: "Git/GitHub", category: "DevOps", color: "#FFFFFF", icon: <SiGithub /> },
  { name: "VS Code", category: "DevOps", color: "#ef4444", icon: <VscVscode /> },
  { name: "C++", category: "Langages", color: "#e11d48", icon: <SiCplusplus /> },
  { name: "C#", category: "Langages", color: "#991b1b", icon: <TbBrandCSharp /> },
  { name: "HTML5", category: "Front-End", color: "#f97316", icon: <SiHtml5 /> },
  { name: "CSS3", category: "Front-End", color: "#ef4444", icon: <SiCss /> },
  { name: "SQLite", category: "Bases de données", color: "#f43f5e", icon: <SiSqlite /> },
  { name: "C", category: "Langages", color: "#e5e7eb", icon: <SiC /> },
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
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-black/80 p-3 rounded-2xl border border-red-950/40 backdrop-blur-xl shadow-2xl">
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
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-rose-700 rounded-xl shadow-md shadow-red-600/30 border border-red-400/30"
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
        <div className="flex items-center gap-1 bg-black/90 p-1 rounded-xl border border-white/10 shrink-0">
          <button
            onClick={() => setViewMode("orb")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "orb"
                ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-sm shadow-red-500/30 border border-red-400/20"
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
                ? "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-sm shadow-red-500/30 border border-red-400/20"
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
                      ? "opacity-30 cursor-not-allowed bg-black/60 border border-white/5 text-slate-500"
                      : "opacity-90 hover:opacity-100 bg-black/90 border border-red-500/40 text-white hover:bg-red-600 hover:scale-110 shadow-red-950/60"
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
                      ? "opacity-30 cursor-not-allowed bg-black/60 border border-white/5 text-slate-500"
                      : "opacity-90 hover:opacity-100 bg-black/90 border border-red-500/40 text-white hover:bg-red-600 hover:scale-110 shadow-red-950/60"
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

                // 3D Circular Bend transforms
                const rotateY = diff * -7;
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
                        "linear-gradient(155deg, rgba(20, 5, 7, 0.9) 0%, rgba(8, 3, 4, 0.97) 100%)",
                      border: isFocused
                        ? `1.5px solid ${card.accentColor}99`
                        : `1px solid ${card.accentColor}33`,
                      backdropFilter: "blur(24px)",
                      boxShadow: isFocused
                        ? `0 20px 50px -15px ${card.accentColor}44, 0 0 35px -8px ${card.accentColor}35, inset 0 1px 1px 0 rgba(255,255,255,0.2)`
                        : `0 12px 36px -12px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.06)`,
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
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/90 border border-red-950/50 backdrop-blur-md">
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
                    "linear-gradient(145deg, rgba(20, 6, 8, 0.8) 0%, rgba(8, 2, 3, 0.95) 100%)",
                  border: "1px solid rgba(220,38,38,0.15)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}88`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px -6px ${item.color}44`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(220,38,38,0.15)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
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
