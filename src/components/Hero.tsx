"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedText from "./AnimatedText";
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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" ref={ref} id="hero">
      {/* Background */}
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <div className="hero-gradient hero-gradient-1" />
        <div className="hero-gradient hero-gradient-2" />
        <div className="hero-gradient hero-gradient-3" />
        <div className="hero-grid" />
        <div className="hero-noise" />
      </motion.div>

      <motion.div className="hero-content" style={{ opacity }}>
        <RevealOnScroll delay={0.1}>
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Disponible en alternance — Sept. 2025
          </div>
        </RevealOnScroll>

        <AnimatedText
          as="h1"
          className="hero-h1"
          delay={0.2}
        >
          Créer. Connecter. Convertir.
        </AnimatedText>

        <RevealOnScroll delay={0.5}>
          <p className="hero-sub">
            Je construis des projets qui connectent le football à la société.
            Analytiques, créatifs et engagés. Toujours avec l&apos;objectif en tête.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.7}>
          <div className="hero-actions">
            <MagneticButton className="btn-accent" onClick={onContact}>
              Me contacter
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
            <MagneticButton
              as="a"
              className="btn-secondary"
              href="#work"
            >
              Voir mes projets
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </MagneticButton>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.9}>
          <div className="stats-strip">
            <div className="stat-item">
              <div className="stat-value">
                Bac<span>+3</span>
              </div>
              <div className="stat-desc">Marketing & Communication</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                2<span>+</span>
              </div>
              <div className="stat-desc">Projets actifs</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                100<span>%</span>
              </div>
              <div className="stat-desc">Engagement</div>
            </div>
          </div>
        </RevealOnScroll>
      </motion.div>
    </section>
  );
}
