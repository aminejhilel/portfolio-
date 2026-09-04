"use client";

import React, { useState } from "react";
import {
  SiHtml5, SiCss, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs,
  SiPhp, SiPython, SiLaravel, SiMysql, SiSqlite,
  SiFigma, SiDocker, SiGitlab, SiGithub, SiJira, SiPostman,
  SiTypescript, SiNodedotjs, SiMongodb, SiGit, SiC, SiCplusplus
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

const RestApiIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const TECH_ICONS: Record<string, { icon: React.ReactNode; color: string }> = {
  "C":              { icon: <SiC className="w-5 h-5" />,             color: "#A8B9CC" },
  "C++":            { icon: <SiCplusplus className="w-5 h-5" />,     color: "#00599C" },
  "C#":             { icon: <TbBrandCSharp className="w-5 h-5" />,   color: "#239120" },
  "PHP":            { icon: <SiPhp className="w-5 h-5" />,           color: "#777BB4" },
  "Python":         { icon: <SiPython className="w-5 h-5" />,        color: "#3776AB" },
  "JavaScript":     { icon: <SiJavascript className="w-5 h-5" />,    color: "#F7DF1E" },
  "HTML5":          { icon: <SiHtml5 className="w-5 h-5" />,         color: "#E44D26" },
  "CSS3":           { icon: <SiCss className="w-5 h-5" />,          color: "#1572B6" },
  "Tailwind CSS":   { icon: <SiTailwindcss className="w-5 h-5" />,   color: "#06B6D4" },
  "React.js":       { icon: <SiReact className="w-5 h-5" />,         color: "#61DAFB" },
  "Next.js":        { icon: <SiNextdotjs className="w-5 h-5" />,     color: "#FFFFFF" },
  "Node.js":        { icon: <SiNodedotjs className="w-5 h-5" />,     color: "#339933" },
  "Laravel":        { icon: <SiLaravel className="w-5 h-5" />,       color: "#FF2D20" },
  "Filament":       { icon: <SiLaravel className="w-5 h-5" />,       color: "#FF6B35" },
  "REST API":       { icon: <RestApiIcon />,                         color: "#00FF7F" },
  "MySQL":          { icon: <SiMysql className="w-5 h-5" />,         color: "#4479A1" },
  "SQL Server":     { icon: <DiMsqlServer className="w-5 h-5" />, color: "#CC292B" },
  "SQLite":         { icon: <SiSqlite className="w-5 h-5" />,        color: "#003B57" },
  "Figma":          { icon: <SiFigma className="w-5 h-5" />,         color: "#F24E1E" },
  "Prototypage":    { icon: <SiFigma className="w-5 h-5" />,         color: "#A259FF" },
  "Wireframing":    { icon: <SiFigma className="w-5 h-5" />,         color: "#1ABCFE" },
  "Recherche Utilisateur":  { icon: <SiFigma className="w-5 h-5" />, color: "#0ACF83" },
  "Git/GitHub":     { icon: <SiGithub className="w-5 h-5" />,        color: "#FFFFFF" },
  "Docker":         { icon: <SiDocker className="w-5 h-5" />,        color: "#2496ED" },
  "VS Code":        { icon: <VscVscode className="w-5 h-5" />,        color: "#007ACC" },
  
  // Legacy backups
  "HTML":           { icon: <SiHtml5 className="w-5 h-5" />,         color: "#E44D26" },
  "CSS":            { icon: <SiCss className="w-5 h-5" />,          color: "#1572B6" },
  "SQL":            { icon: <SiMysql className="w-5 h-5" />,         color: "#4479A1" },
  "Prototyping":    { icon: <SiFigma className="w-5 h-5" />,         color: "#A259FF" },
  "User Research":  { icon: <SiFigma className="w-5 h-5" />,         color: "#0ACF83" },
  "GitLab CI/CD":   { icon: <SiGitlab className="w-5 h-5" />,       color: "#FC6D26" },
  "Jira":           { icon: <SiJira className="w-5 h-5" />,          color: "#0052CC" },
  "Postman":        { icon: <SiPostman className="w-5 h-5" />,       color: "#FF6C37" },
  "TypeScript":     { icon: <SiTypescript className="w-5 h-5" />,    color: "#3178C6" },
  "MongoDB":        { icon: <SiMongodb className="w-5 h-5" />,       color: "#47A248" },
  "Git":            { icon: <SiGit className="w-5 h-5" />,           color: "#F05032" },
};

type Pill = {
  name: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
};

export default function SkillOrb({
  centralIcon,
  skills,
  iconColor,
  iconBg,
  iconBorder,
}: {
  centralIcon: React.ReactNode;
  skills: Pill[];
  iconColor: string;
  iconBg: string;
  iconBorder: string;
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const radius = 115;
  const centralIconRadius = 38;
  const svgSize = 290;
  const svgCenter = svgSize / 2;

  return (
    <div className="w-full flex items-center justify-center font-sans py-2 overflow-visible">
      <style>{`
        @keyframes float-orb {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50%       { transform: translate(-50%, -50%) translateY(-5px); }
        }
        .float-orb { animation: float-orb 4s ease-in-out infinite; }

        @keyframes breathing-glow-blue {
          0%, 100% { box-shadow: 0 0 14px 0px rgba(0,47,167,0.45); }
          50%       { box-shadow: 0 0 28px 8px rgba(0,47,167,0.2); }
        }
        .breathing-glow-blue { animation: breathing-glow-blue 3s ease-in-out infinite; }
      `}</style>

      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        {/* SVG connecting lines */}
        <svg width={svgSize} height={svgSize} className="absolute top-0 left-0 pointer-events-none">
          {skills.map((skill, i) => {
            const angle = (-90 + i * (360 / skills.length)) * (Math.PI / 180);
            const x1 = svgCenter + centralIconRadius * Math.cos(angle);
            const y1 = svgCenter + centralIconRadius * Math.sin(angle);
            const x2 = svgCenter + (radius - 38) * Math.cos(angle);
            const y2 = svgCenter + (radius - 38) * Math.sin(angle);
            const hovered = hoveredId === i;
            const techColor = TECH_ICONS[skill.name]?.color ?? "#002FA7";
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={hovered ? techColor : "rgba(255,255,255,0.12)"}
                strokeWidth={hovered ? 2 : 1}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Central Icon */}
        <div
          className="absolute z-10 breathing-glow-blue rounded-2xl"
          style={{
            left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: 72, height: 72,
            background: iconBg,
            border: `1.5px solid ${iconBorder}`,
          }}
        >
          <div className={`w-full h-full flex items-center justify-center ${iconColor}`}>
            {centralIcon}
          </div>
        </div>

        {/* Orbiting Skill Icons */}
        {skills.map((skill, i) => {
          const angle = (-90 + i * (360 / skills.length)) * (Math.PI / 180);
          const x = svgCenter + radius * Math.cos(angle);
          const y = svgCenter + radius * Math.sin(angle);
          const hovered = hoveredId === i;
          const tech = TECH_ICONS[skill.name];
          const techColor = tech?.color ?? "#002FA7";

          return (
            <div
              key={i}
              className="absolute z-20 cursor-default"
              style={{ left: x, top: y }}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`float-orb flex flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 transition-all duration-300 ${hovered ? "scale-110" : ""}`}
                style={{
                  transform: hovered
                    ? "translate(-50%,-50%) scale(1.12)"
                    : "translate(-50%,-50%)",
                  width: 72,
                  background: hovered ? "rgba(0,0,0,0.95)" : "rgba(10,10,10,0.85)",
                  border: hovered
                    ? `1.5px solid ${techColor}`
                    : "1px solid rgba(255,255,255,0.1)",
                  boxShadow: hovered
                    ? `0 0 18px 4px ${techColor}44`
                    : "none",
                  animationDelay: `${i * 0.25}s`,
                }}
              >
                <span style={{ color: techColor }}>
                  {tech?.icon ?? null}
                </span>
                <span
                  className="text-center leading-none font-medium"
                  style={{
                    color: hovered ? techColor : "rgba(255,255,255,0.75)",
                    fontSize: "9px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
