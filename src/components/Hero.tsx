"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import RevealOnScroll from "./RevealOnScroll";

interface HeroProps {
  onContact: () => void;
}

export default function Hero({ onContact }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers — each moves at different speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "120px"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);
  const floatingY1 = useTransform(scrollYProgress, [0, 1], ["0px", "-80px"]);
  const floatingY2 = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero hero-split" ref={ref} id="hero">
      {/* Background with parallax */}
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-gradient hero-gradient-3" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </motion.div>

      <motion.div className="hero-split-inner" style={{ opacity }}>
        {/* LEFT — Personal intro */}
        <motion.div className="hero-left" style={{ y: contentY }}>
          <RevealOnScroll delay={0.1}>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Disponible en alternance — Sept. 2025
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <h1 className="hero-h1">
              Madjilem<span className="hero-accent">.</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <p className="hero-tagline">
              Communication &middot; Sport Business &middot; Dev Web
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.5}>
            <p className="hero-sub">
              Étudiante en Bac+3 Marketing & Communication, je crée des projets qui
              connectent <strong>le football à la société</strong>. Fondatrice de TEMPO,
              développeuse web, toujours à la croisée du sport et de la stratégie.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.65}>
            <div className="hero-actions">
              <MagneticButton className="btn-accent" onClick={onContact}>
                Me contacter
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </MagneticButton>
              <MagneticButton as="a" className="btn-secondary" href="#work">
                Voir mes projets
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </MagneticButton>
            </div>
          </RevealOnScroll>

          {/* Social links */}
          <RevealOnScroll delay={0.8}>
            <div className="hero-socials">
              <a href="https://linkedin.com/in/madjilem-detol-maggiori" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <span className="hero-social-sep" />
              <a href="https://github.com/madjilemmm" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span className="hero-social-sep" />
              <a href="mailto:contact@madjilem.fr">
                contact@madjilem.fr
              </a>
            </div>
          </RevealOnScroll>
        </motion.div>

        {/* RIGHT — Floating cards with independent parallax */}
        <div className="hero-right">
          {/* Card 1 — TEMPO project */}
          <motion.div className="hero-card hero-card-1" style={{ y: floatingY1 }}>
            <RevealOnScroll delay={0.4} direction="right">
              <div className="hero-card-inner hero-card-dark">
                <div className="hero-card-badge">Projet phare</div>
                <div className="hero-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.93 14.93 0 01-5.96-5.96m0 0A11.95 11.95 0 013.64 4 12 12 0 003 14.64m6.63-6.23A11.94 11.94 0 003 14.64m0 0a6 6 0 007.38-5.84" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="hero-card-title">TEMPO</h3>
                <p className="hero-card-desc">Média indépendant — Football, identité, pouvoir & géopolitique</p>
                <div className="hero-card-status">
                  <span className="hero-card-status-dot" />
                  En construction
                </div>
              </div>
            </RevealOnScroll>
          </motion.div>

          {/* Card 2 — Stats */}
          <motion.div className="hero-card hero-card-2" style={{ y: cardsY }}>
            <RevealOnScroll delay={0.55} direction="right">
              <div className="hero-card-inner hero-card-glass">
                <div className="hero-card-stat">
                  Bac<span>+3</span>
                </div>
                <p className="hero-card-stat-label">Marketing & Communication</p>
                <p className="hero-card-stat-sub">Île-de-France</p>
              </div>
            </RevealOnScroll>
          </motion.div>

          {/* Card 3 — SI-RBFG */}
          <motion.div className="hero-card hero-card-3" style={{ y: floatingY2 }}>
            <RevealOnScroll delay={0.7} direction="right">
              <div className="hero-card-inner hero-card-accent">
                <div className="hero-card-badge-light">Déployée</div>
                <h3 className="hero-card-title-sm">SI-RBFG</h3>
                <p className="hero-card-desc-sm">
                  App web Next.js · Vercel · PostgreSQL
                </p>
                <div className="hero-card-tech">
                  <span>Next.js</span>
                  <span>React</span>
                  <span>Neon</span>
                </div>
              </div>
            </RevealOnScroll>
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div className="hero-float hero-float-1" style={{ y: floatingY1 }} />
          <motion.div className="hero-float hero-float-2" style={{ y: floatingY2 }} />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="hero-scroll-hint" style={{ opacity }}>
        <RevealOnScroll delay={1.2}>
          <div className="scroll-indicator">
            <div className="scroll-indicator-track">
              <div className="scroll-indicator-thumb" />
            </div>
            <span>Scroll</span>
          </div>
        </RevealOnScroll>
      </motion.div>
    </section>
  );
}
