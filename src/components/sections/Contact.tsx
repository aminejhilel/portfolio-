"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import CursorGrid from "../CursorGrid";

const GithubIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "aminejhilel558@gmail.com",
    href: "mailto:aminejhilel558@gmail.com",
  },
  {
    icon: Phone,
    label: "TÉLÉPHONE",
    value: "06 50 47 59 39",
    href: "tel:+212650475939",
  },
];

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: "https://github.com/aminejhilel",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/amine-jhilel",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 text-white relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-blue-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] left-[30%] w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      {/* Interactive Cursor Grid Background */}
      <CursorGrid
        color="#002FA7"
        cellSize={60}
        radius={180}
        falloff="smooth"
        lineWidth={1}
        maxOpacity={0.8}
        gridOpacity={0.03}
        className="opacity-50 md:opacity-100"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-sm font-bold tracking-widest"
              style={{ color: "rgba(0,47,167,0.8)" }}
            >
              05.
            </span>
            <h2 className="text-2xl font-bold text-white">Contact</h2>
          </div>
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, rgba(0,47,167,0.5), transparent)",
            }}
          />
          <p className="text-slate-400 mt-4 text-sm">
            N&apos;hésitez pas à me contacter pour discuter d&apos;opportunités !
          </p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10 mt-8">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl p-8 mb-5"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          <h3 className="text-lg font-semibold text-white text-center mb-6">
            Informations de contact
          </h3>

          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,47,167,0.35)";
                  e.currentTarget.style.background = "rgba(0,47,167,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0,47,167,0.12)",
                    border: "1px solid rgba(0,47,167,0.28)",
                  }}
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest mb-0.5"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-white font-semibold text-sm">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 gap-4"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl py-6 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,47,167,0.4)";
                e.currentTarget.style.background = "rgba(0,47,167,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <social.icon className="w-7 h-7 text-slate-300" />
              <span className="text-sm font-medium text-slate-300">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
