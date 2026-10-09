import type { Metadata } from "next";
import { Space_Mono, Orbitron, Dancing_Script } from "next/font/google";
import "./globals.css";
import DotGridBackground from "@/components/DotGridBackground";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

/* ── Orbitron: futuristic/tech font — parfait pour le thème hacker ── */
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

/* ── Dancing Script: elegant cursive font for the logo ── */
const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Amine Jhilel — Full-Stack Developer",
  description:
    "Portfolio de Amine Jhilel, développeur Full-Stack spécialisé en React, Next.js et UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceMono.variable} ${orbitron.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DotGridBackground>{children}</DotGridBackground>
      </body>
    </html>
  );
}
