"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  imageUrl,
  liveLink,
  githubLink,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-2xl p-5 flex flex-col h-full"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(18px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          '0 0 40px rgba(0,47,167,0.25), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,47,167,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
      }}
    >
      {/* Subtle gradient top-left highlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(0,47,167,0.15) 0%, transparent 60%)',
        }}
      />

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl mb-5 bg-slate-800/50 shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 to-transparent" />
      </div>

      {/* Text */}
      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed flex-1">{description}</p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-full"
            style={{
              color: '#adc0ff',
              background: 'rgba(0,47,167,0.15)',
              border: '1px solid rgba(0,47,167,0.4)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer links */}
      <div
        className="flex justify-between items-center pt-4 mt-auto"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Code className="w-4 h-4 mr-1.5" />
            Code
          </a>
        ) : (
          <span />
        )}

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium transition-colors duration-200"
            style={{ color: '#1a4fc4' }}
          >
            Live Preview
            <ExternalLink className="w-4 h-4 ml-1.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

