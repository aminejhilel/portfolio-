"use client";

import { motion } from "framer-motion";
import ProjectCard from "../cards/ProjectCard";
import InfiniteLoop from "../InfiniteLoop";

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "MaraGuide",
    description: "Guide touristique intelligent pour le Maroc. Planifiez votre voyage sur mesure avec des itinéraires générés par l'IA.",
    techStack: ["Next.js", "Node.js", "OpenAI", "TailwindCSS"],
    imageUrl: "/projects/maraguide.jpg",
    category: "Fullstack",
    liveLink: "#",
  },
  {
    id: 2,
    title: "EMIG",
    description: "Plateforme d'excellence académique pour l'École Marocaine d'Ingénierie et de Gestion.",
    techStack: ["Filament", "Laravel", "PHP", "TailwindCSS", "JS"],
    imageUrl: "/projects/emig.png",
    category: "Frontend",
    liveLink: "#",
  },
  {
    id: 3,
    title: "FASTBENCAR",
    description: "Agence de location de véhicules premium et de luxe avec espace d'administration complet.",
    techStack: ["Laravel", "Filament", "TailwindCSS", "JS", "MySQL"],
    imageUrl: "/projects/fastbencar.png",
    category: "Fullstack",
    liveLink: "#",
  },
  {
    id: 4,
    title: "GrandmasterNoir",
    description: "Un jeu d'échecs en ligne immersif avec interface sombre (dark mode) et suivi des mouvements.",
    techStack: ["Vanilla JS", "HTML", "CSS"],
    imageUrl: "/projects/grandmasternoir.png",
    category: "Frontend",
    githubLink: "#",
  },
  {
    id: 5,
    title: "FaceTrack AI",
    description: "Application de suivi facial en temps réel avec détection d'émotions et visualisation de données.",
    techStack: ["Next.js", "Python"],
    imageUrl: "/projects/faceTrack.png",
    category: "AI / Fullstack",
    liveLink: "#",
    githubLink: "#",
  }
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="py-24 text-white relative overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[350px] h-[350px] bg-blue-700/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 overflow-hidden w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span
              className="text-sm font-bold tracking-widest"
              style={{ color: "rgba(0,47,167,0.8)" }}
            >
              04.
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Works</h2>
          </div>
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(to right, rgba(0,47,167,0.5), transparent)",
            }}
          />
          <div className="flex justify-between items-center mt-4">
            <p className="text-slate-400 text-sm md:text-base">
              A showcase of my recent projects, featuring sleek designs and powerful functionality.
            </p>
            <p className="text-blue-500 text-sm italic hidden md:block">
              &larr; Drag to explore &rarr;
            </p>
          </div>
        </motion.div>

        {/* Auto-scrolling Infinite Loop */}
        <div className="pt-4 pb-8 -mx-4 md:-mx-8">
          <InfiniteLoop
            items={MOCK_PROJECTS}
            speed={40}
            gap={32}
            pauseOnHover={true}
            renderItem={(project) => (
              <div className="w-[300px] md:w-[400px] h-full flex items-stretch">
                <ProjectCard {...project} />
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
