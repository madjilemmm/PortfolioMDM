"use client";

import { useRef, useCallback } from "react";
import RevealOnScroll from "./RevealOnScroll";

const expertises = [
  {
    num: "01",
    title: "Stratégie Éditoriale",
    desc: "J'analyse la marque, la cible et les enjeux. Je traduis ça en plan éditorial clair avec des formats qui créent de l'impact.",
    tags: ["Planning", "Calendrier", "Ligne éditoriale", "Champions League"],
  },
  {
    num: "02",
    title: "Content Creation",
    desc: "Je crée du contenu qui sort du lot. Textes, visuels, formats courts. Toujours en lien avec la culture, le sport et l'identité.",
    tags: ["Instagram", "Newsletter", "Pitch deck", "Brand-first"],
  },
  {
    num: "03",
    title: "Sport Business",
    desc: "Je comprends les logiques économiques, médiatiques et politiques du football. Chaque transfert est un fait culturel.",
    tags: ["Football", "Médias", "Géopolitique", "LFP", "FFF"],
  },
  {
    num: "04",
    title: "Développement Web",
    desc: "J'ai conçu et déployé SI-RBFG, application web interne. Stack complet : Next.js, React, PostgreSQL, Vercel.",
    tags: ["Next.js", "React", "PostgreSQL", "Vercel"],
  },
];

export default function Expertises() {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section className="section" id="expertises">
      <div className="section-inner">
        <RevealOnScroll>
          <div className="section-label">Expertises</div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="about-h2" style={{ marginBottom: 48 }}>
            Ce que je sais faire.
          </h2>
        </RevealOnScroll>

        <div className="exp-grid">
          {expertises.map((exp, i) => (
            <RevealOnScroll key={exp.num} delay={0.1 + i * 0.1}>
              <ExpCard exp={exp} onMouseMove={handleMouseMove} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpCard({
  exp,
  onMouseMove,
}: {
  exp: (typeof expertises)[number];
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="exp-card" ref={ref} onMouseMove={onMouseMove}>
      <div className="exp-card-glow" />
      <div className="exp-card-num">{exp.num}</div>
      <h3 className="exp-card-title">{exp.title}</h3>
      <p className="exp-card-desc">{exp.desc}</p>
      <div className="exp-card-tags">
        {exp.tags.map((tag) => (
          <span key={tag} className="exp-card-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
