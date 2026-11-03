import Hero from "@/components/sections/Hero";
import Navbar from "@/components/layout/Navbar";
import dynamic from "next/dynamic";

// Lazy-load heavy sections — only load when needed
const About       = dynamic(() => import("@/components/sections/About"));
const AboutSkills = dynamic(() => import("@/components/sections/AboutSkills"));
const Journey     = dynamic(() => import("@/components/sections/Journey"));
const Portfolio   = dynamic(() => import("@/components/sections/Portfolio"));
const Contact     = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-red-700/30" style={{ background: '#000000' }}>
      <Navbar />
      <Hero />

      <div className="relative w-full">
        <About />
        <AboutSkills />
        <Journey />
        <Portfolio />
        <Contact />
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 py-8 text-center text-sm"
        style={{
          borderTop: '1px solid rgba(220,38,38,0.2)',
          background: 'rgba(0,0,0,0.9)',
          backdropFilter: 'blur(10px)',
          color: '#9ca3af',
        }}
      >
        <p>
          © {new Date().getFullYear()}{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>
            Amine Jhilel
          </span>
          . All rights reserved.
        </p>
      </footer>
    </main>
  );
}
