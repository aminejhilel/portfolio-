import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import AboutSkills from "@/components/sections/AboutSkills";
import Journey from "@/components/sections/Journey";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-blue-700/30" style={{ background: '#000000' }}>
      <Navbar />
      <Hero />
      <About />
      <AboutSkills />
      <Journey />
      <Portfolio />
      <Contact />

      {/* Footer */}
      <footer
        className="py-8 text-center text-sm"
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
