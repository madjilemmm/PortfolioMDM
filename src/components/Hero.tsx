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

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero hero-centered" ref={ref} id="hero">
      {/* Background with parallax */}
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-gradient hero-gradient-3" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </motion.div>

      <motion.div className="hero-center-content" style={{ opacity, y: contentY }}>
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
            Étudiante en Bac+3 Marketing &amp; Communication, je crée des projets qui
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="hero-scroll-hint" style={{ opacity }}>
        <RevealOnScroll delay={1}>
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
