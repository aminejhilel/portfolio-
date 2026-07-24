"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "journey", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Parcours", href: "#journey", id: "journey" },
    { name: "Portfolio", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "bg-transparent py-6"
      }`}
      style={isScrolled ? {
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,47,167,0.2)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.6), 0 0 40px rgba(0,47,167,0.08)",
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex items-center">
          <span
            className="font-bold tracking-tight transition-colors"
            style={{ 
              color: "#002FA7", 
              fontFamily: "var(--font-dancing), cursive",
              fontSize: "2rem",
              lineHeight: 1
            }}
          >
            Amine.J
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium transition-colors group"
            >
              <span
                className="transition-colors duration-300"
                style={{
                  color: activeSection === link.id ? "#002FA7" : "#6b7280",
                }}
                onMouseEnter={(e) => { if (activeSection !== link.id) (e.target as HTMLElement).style.color = "#002FA7"; }}
                onMouseLeave={(e) => { if (activeSection !== link.id) (e.target as HTMLElement).style.color = "#6b7280"; }}
              >
                {link.name}
              </span>
              {activeSection === link.id && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #002FA7, #1a4fc4)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(0,47,167,0.12)",
              border: "1px solid rgba(0,47,167,0.45)",
              backdropFilter: "blur(12px)",
              color: "#ffffff",
              boxShadow: "0 0 15px rgba(0,47,167,0.25)",
            }}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden hover:text-white transition-colors"
          style={{ color: "#002FA7" }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 shadow-2xl p-6 flex flex-col gap-4"
          style={{
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(0,47,167,0.18)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-medium py-2 border-b transition-colors"
              style={{
                borderColor: "rgba(0,47,167,0.12)",
                color: activeSection === link.id ? "#002FA7" : "#6b7280",
              }}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
