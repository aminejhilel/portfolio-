import React from 'react';

export default function FrontEndCard() {
  return (
    <div className="p-8 rounded-[2rem] bg-[#1a0f2e]/80 border border-[#2d1b4e] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
      {/* Subtle glow effect behind the card */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-8 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-[#1e293b] border border-[#334155] shadow-inner flex items-center justify-center">
          <svg
            className="w-7 h-7 text-sky-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-white tracking-wide">Front-End</h3>
      </div>

      {/* Skills Pills */}
      <div className="flex flex-wrap gap-4 relative z-10">
        <span className="px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-medium text-lg transition-colors hover:bg-orange-500/20">
          HTML
        </span>
        <span className="px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium text-lg transition-colors hover:bg-blue-500/20">
          CSS
        </span>
        <span className="px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium text-lg transition-colors hover:bg-cyan-500/20">
          Tailwind CSS
        </span>
        <span className="px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 font-medium text-lg transition-colors hover:bg-yellow-500/20">
          JavaScript
        </span>
        <span className="px-5 py-2.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-medium text-lg transition-colors hover:bg-indigo-500/20">
          React.js
        </span>
        <span className="px-5 py-2.5 rounded-full bg-gray-500/10 border border-gray-500/30 text-gray-200 font-medium text-lg transition-colors hover:bg-gray-500/20">
          Next.js
        </span>
      </div>
    </div>
  );
}
