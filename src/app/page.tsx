import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AboutSkills from "@/components/sections/AboutSkills";
import Journey from "@/components/sections/Journey";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import CursorGrid from "@/components/CursorGrid";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-blue-700/30" style={{ background: '#000000' }}>
      <Navbar />
      <Hero />

      {/* Interactive Cursor Grid background covering all sections below Hero */}
      <div className="relative w-full overflow-hidden">
        <CursorGrid
          color="#002FA7"
          cellSize={60}
          radius={180}
          falloff="smooth"
          lineWidth={1}
          maxOpacity={0.8}
          gridOpacity={0.03}
          className="opacity-60 md:opacity-100"
        />

        <div className="relative z-10">
          <About />
          <AboutSkills />
          <Journey />
          <Portfolio />
          <Contact />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="relative z-10 py-8 text-center text-sm"
        style={{
          borderTop: '1px solid rgba(0,47,167,0.18)',
          background: 'rgba(0,0,0,0.9)',
          backdropFilter: 'blur(10px)',
          color: '#4b6fa0',
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
