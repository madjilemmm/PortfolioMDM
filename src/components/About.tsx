"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="about-grid">
          {/* Visual with parallax */}
          <RevealOnScroll direction="left">
            <div className="about-visual" ref={imgRef}>
              <motion.div className="about-visual-bg" style={{ y: imgY, scale: 1.15 }} />
              <div className="about-visual-label">TEMPO — Média Football & Société</div>
              <div className="about-visual-badge">Fondatrice</div>
            </div>
          </RevealOnScroll>

          {/* Content */}
          <div>
            <RevealOnScroll delay={0.1}>
              <div className="section-label">À propos</div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <h2 className="about-h2">
                Je construis des projets qui connectent le football à la société.
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="about-person">
                <div className="about-avatar">M</div>
                <div>
                  <div className="about-name">Madjilem Detol-Maggiori</div>
                  <div className="about-role">
                    Étudiante Bac+3 · Fondatrice TEMPO · Dev Web
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <p className="about-text">
                Je ne m&apos;arrête pas aux beaux visuels.{" "}
                <strong>Je construis des projets complets</strong>, de la
                stratégie à la mise en ligne. Toujours en lien avec les enjeux
                culturels, sportifs et sociétaux.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.5}>
              <p className="about-text">
                Jamais de contenu sans stratégie. Jamais de projet sans résultat.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.6}>
              <a href="#expertises" className="link-arrow">
                Voir mes expertises
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
