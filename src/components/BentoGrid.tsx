"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

type ProjectTag = "all" | "media" | "dev" | "strategy";

interface Project {
  id: string;
  title: string;
  tagline: string;
  tag: string;
  category: ProjectTag;
  bgClass: string;
  size: "large" | "medium";
  href?: string;
  external?: boolean;
}

const projects: Project[] = [
  {
    id: "tempo",
    title: "TEMPO",
    tagline:
      "Football, identité, pouvoir, géopolitique. Un média indépendant à la ligne éditoriale tranchée.",
    tag: "Média Digital · En construction",
    category: "media",
    bgClass: "bg-tempo",
    size: "large",
    href: "#",
  },
  {
    id: "sirbfg",
    title: "SI-RBFG",
    tagline: "Portail interne, auth, filtres, annuaire. Next.js + Vercel.",
    tag: "App Web · Déployée",
    category: "dev",
    bgClass: "bg-sirbfg",
    size: "medium",
    href: "https://github.com/madjilemmm/SI-RBFG",
    external: true,
  },
  {
    id: "pitch",
    title: "TEMPO Pitch",
    tagline: "Pitch minimaliste noir/blanc/rouge, Keynote-inspired.",
    tag: "Pitch Deck · Exporté",
    category: "strategy",
    bgClass: "bg-pitch",
    size: "medium",
  },
];

const filters: { label: string; value: ProjectTag }[] = [
  { label: "Tout", value: "all" },
  { label: "Média", value: "media" },
  { label: "Développement", value: "dev" },
  { label: "Stratégie", value: "strategy" },
];

export default function BentoGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectTag>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleCardMouse = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    },
    []
  );

  return (
    <section className="section" id="work">
      <div className="section-inner">
        <RevealOnScroll>
          <div className="section-label">Projets</div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="about-h2" style={{ marginBottom: 16 }}>
            Ce que je construis.
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <p
            className="about-text"
            style={{ maxWidth: 500, marginBottom: 40 }}
          >
            Des projets concrets qui fonctionnent et font la différence.
          </p>
        </RevealOnScroll>

        {/* Filters */}
        <RevealOnScroll delay={0.2}>
          <div className="bento-filters">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`bento-filter${activeFilter === f.value ? " active" : ""}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Grid */}
        <motion.div className="bento-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const Tag = project.href ? "a" : "div";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`bento-card ${project.size}`}
                  onMouseMove={handleCardMouse}
                  style={{ cursor: project.href ? "pointer" : "default" }}
                  onClick={() => {
                    if (project.href && project.external) {
                      window.open(project.href, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <div className="bento-glow" />
                  <div className={`bento-card-bg ${project.bgClass}`} />
                  <div className="bento-shade" />
                  <span className="bento-tag">{project.tag}</span>
                  {project.href && (
                    <div className="bento-arrow">
                      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  )}
                  <div className="bento-content">
                    <p className="bento-tagline">{project.tagline}</p>
                    <div className="bento-title">{project.title}</div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View all link */}
        <RevealOnScroll delay={0.3}>
          <div style={{ marginTop: 32, textAlign: "right" }}>
            <a
              href="https://github.com/madjilemmm"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              Voir tout sur GitHub
              <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
