import React from 'react';
import SkillOrb from './SkillOrb';

type Pill = {
  name: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
};

type CardData = {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  pills: Pill[];
};

const cards: CardData[] = [
  {
    title: 'UI & UX Design',
    iconBg: 'rgba(236,72,153,0.12)',
    iconBorder: 'rgba(236,72,153,0.3)',
    iconColor: 'text-pink-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    pills: [
      { name: 'Figma',        colorClass: 'text-pink-400',   bgClass: 'bg-pink-500/10',   borderClass: 'border-pink-500/30' },
      { name: 'Prototyping',  colorClass: 'text-pink-400',   bgClass: 'bg-pink-500/10',   borderClass: 'border-pink-500/30' },
      { name: 'Wireframing',  colorClass: 'text-pink-400',   bgClass: 'bg-pink-500/10',   borderClass: 'border-pink-500/30' },
      { name: 'User Research',colorClass: 'text-pink-400',   bgClass: 'bg-pink-500/10',   borderClass: 'border-pink-500/30' },
    ],
  },
  {
    title: 'Front-End',
    iconBg: 'rgba(168,85,247,0.12)',
    iconBorder: 'rgba(168,85,247,0.3)',
    iconColor: 'text-purple-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    pills: [
      { name: 'HTML',         colorClass: 'text-orange-400', bgClass: 'bg-orange-500/10', borderClass: 'border-orange-500/30' },
      { name: 'CSS',          colorClass: 'text-blue-400',   bgClass: 'bg-blue-500/10',   borderClass: 'border-blue-500/30' },
      { name: 'Tailwind CSS', colorClass: 'text-cyan-400',   bgClass: 'bg-cyan-500/10',   borderClass: 'border-cyan-500/30' },
      { name: 'JavaScript',   colorClass: 'text-yellow-400', bgClass: 'bg-yellow-500/10', borderClass: 'border-yellow-500/30' },
      { name: 'React.js',     colorClass: 'text-purple-400', bgClass: 'bg-purple-500/10', borderClass: 'border-purple-500/30' },
      { name: 'Next.js',      colorClass: 'text-slate-200',  bgClass: 'bg-slate-500/10',  borderClass: 'border-slate-500/30' },
    ],
  },
  {
    title: 'Back-End',
    iconBg: 'rgba(217,70,239,0.12)',
    iconBorder: 'rgba(217,70,239,0.3)',
    iconColor: 'text-fuchsia-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    pills: [
      { name: 'PHP',      colorClass: 'text-purple-400', bgClass: 'bg-purple-500/10', borderClass: 'border-purple-500/30' },
      { name: 'Python',   colorClass: 'text-emerald-400',bgClass: 'bg-emerald-500/10',borderClass: 'border-emerald-500/30' },
      { name: 'Laravel',  colorClass: 'text-red-400',    bgClass: 'bg-red-500/10',    borderClass: 'border-red-500/30' },
      { name: 'Filament', colorClass: 'text-yellow-400', bgClass: 'bg-yellow-500/10', borderClass: 'border-yellow-500/30' },
      { name: 'SQL',      colorClass: 'text-blue-400',   bgClass: 'bg-blue-500/10',   borderClass: 'border-blue-500/30' },
    ],
  },
  {
    title: 'DevOps & Outils',
    iconBg: 'rgba(192,132,252,0.12)',
    iconBorder: 'rgba(192,132,252,0.3)',
    iconColor: 'text-violet-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    pills: [
      { name: 'Docker',      colorClass: 'text-slate-200', bgClass: 'bg-slate-700/40', borderClass: 'border-slate-600/50' },
      { name: 'GitLab CI/CD',colorClass: 'text-slate-200', bgClass: 'bg-slate-700/40', borderClass: 'border-slate-600/50' },
      { name: 'Git/GitHub',  colorClass: 'text-slate-200', bgClass: 'bg-slate-700/40', borderClass: 'border-slate-600/50' },
      { name: 'Jira',        colorClass: 'text-slate-200', bgClass: 'bg-slate-700/40', borderClass: 'border-slate-600/50' },
      { name: 'Postman',     colorClass: 'text-slate-200', bgClass: 'bg-slate-700/40', borderClass: 'border-slate-600/50' },
    ],
  },
];

export default function StackCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
      {cards.map((card, index) => (
        <div
          key={index}
          className="p-7 rounded-3xl relative overflow-hidden group transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,0,0.2)';
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 0 40px rgba(0,255,0,0.08), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)';
          }}
        >
          {/* Top-left radial glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 0% 0%, rgba(0,255,0,0.06) 0%, transparent 60%)' }}
          />

          {/* Title */}
          <div className="flex items-center justify-center mb-2 relative z-10">
            <h3 className="text-xl font-bold text-white tracking-wide">{card.title}</h3>
          </div>

          {/* Orb Interaction */}
          <SkillOrb 
            centralIcon={card.icon}
            skills={card.pills}
            iconColor={card.iconColor}
            iconBg={card.iconBg}
            iconBorder={card.iconBorder}
          />
        </div>
      ))}
    </div>
  );
}
