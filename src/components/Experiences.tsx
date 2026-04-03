"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

/* ─────────────────────────────────────────────
   CRUMPLED PAPER TRANSITION
   SVG filter for the paper-crumple distortion
───────────────────────────────────────────── */
function PaperFilters() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <filter id="paper-crumple">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            seed="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="G"
          >
            <animate
              attributeName="scale"
              values="0;0"
              dur="1s"
              fill="freeze"
            />
          </feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   TIMELINE DOT — on the vertical line
───────────────────────────────────────────── */
function TimelineDot({ num, color = "var(--accent)" }: { num: string; color?: string }) {
  return (
    <div className="tl-dot-wrap">
      <div className="tl-dot" style={{ borderColor: color }}>
        <span style={{ color }}>{num}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE WRAPPER — paper crumple transition
───────────────────────────────────────────── */
function PaperPage({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Paper crumple: it folds inward from the top edge, like turning a real page
  const rotateX = useTransform(scrollYProgress, [0.55, 0.85], [0, -6]);
  const scaleY = useTransform(scrollYProgress, [0.55, 0.85], [1, 0.96]);
  const y = useTransform(scrollYProgress, [0.55, 0.85], ["0%", "-5%"]);
  const foldOpacity = useTransform(scrollYProgress, [0.5, 0.7, 0.85], [0, 0.5, 0]);

  // Crumple wrinkles: side creases that appear during the fold
  const wrinkleL = useTransform(scrollYProgress, [0.5, 0.7], ["0%", "3%"]);
  const wrinkleR = useTransform(scrollYProgress, [0.5, 0.7], ["0%", "-3%"]);

  return (
    <motion.div
      ref={ref}
      className="paper-page"
      style={{
        rotateX,
        scaleY,
        y,
        transformPerspective: 900,
        transformOrigin: "center top",
        zIndex: 10 - index,
      }}
    >
      {/* Paper fold crease — horizontal line that appears during turn */}
      <motion.div className="paper-fold-crease" style={{ opacity: foldOpacity }} />

      {/* Side wrinkles */}
      <motion.div className="paper-wrinkle paper-wrinkle-l" style={{ width: wrinkleL, opacity: foldOpacity }} />
      <motion.div className="paper-wrinkle paper-wrinkle-r" style={{ width: wrinkleR, opacity: foldOpacity }} />

      {/* Paper edge shadow */}
      <motion.div className="paper-edge-shadow" style={{ opacity: foldOpacity }} />

      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SO FOOT EXPERIENCE
───────────────────────────────────────────── */
function SoFootExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <div className="exp-page-inner exp-sofoot" ref={ref}>
      <motion.div className="exp-page-bg exp-sofoot-bg" style={{ y: imgY }}>
        <div className="exp-sofoot-grain" />
      </motion.div>

      {/* Paper texture overlay */}
      <div className="paper-texture" />

      <motion.div className="exp-page-content" style={{ y: textY }}>
        <RevealOnScroll delay={0.1}>
          <div className="exp-date-badge">2024</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="exp-chapter">
            <span className="exp-chapter-num">01</span>
            <span className="exp-chapter-line" />
            <span className="exp-chapter-label">Expérience</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
          <h2 className="exp-title">SO FOOT</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35}>
          <p className="exp-role">Stage — Rédaction & Communication</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.45}>
          <div className="exp-paper-card">
            <div className="exp-paper-fold" />
            <p className="exp-paper-text">
              Immersion dans la rédaction d&apos;un média qui a redéfini le journalisme
              football en France. <strong>Écriture éditoriale</strong>, recherche de sujets
              décalés, veille culturelle et sportive. Découverte d&apos;une ligne éditoriale
              où <strong>le football est un prisme pour raconter la société</strong>.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.55}>
          <div className="exp-tags-row">
            <span className="exp-tag-pill">Rédaction</span>
            <span className="exp-tag-pill">Ligne éditoriale</span>
            <span className="exp-tag-pill">Football & Culture</span>
            <span className="exp-tag-pill">Veille média</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.65}>
          <blockquote className="exp-quote">
            &ldquo;Le football, c&apos;est la société en crampons.&rdquo;
          </blockquote>
        </RevealOnScroll>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   RÉSERVE DE BIOSPHÈRE EXPERIENCE
───────────────────────────────────────────── */
function BiosphereExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const leafY = useTransform(scrollYProgress, [0, 1], ["20%", "-30%"]);
  const leafRotate = useTransform(scrollYProgress, [0, 1], [-10, 15]);

  return (
    <div className="exp-page-inner exp-biosphere" ref={ref}>
      <motion.div className="exp-page-bg exp-biosphere-bg" style={{ y: imgY }} />

      <div className="paper-texture paper-texture-nature" />

      <motion.div className="exp-leaf exp-leaf-1" style={{ y: leafY, rotate: leafRotate }} />
      <motion.div
        className="exp-leaf exp-leaf-2"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["15%", "-20%"]),
          rotate: useTransform(scrollYProgress, [0, 1], [5, -20]),
        }}
      />

      <motion.div className="exp-page-content" style={{ y: textY }}>
        <RevealOnScroll delay={0.1}>
          <div className="exp-date-badge exp-date-nature">2023 — 2024</div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="exp-chapter">
            <span className="exp-chapter-num">02</span>
            <span className="exp-chapter-line" />
            <span className="exp-chapter-label">Expérience</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25}>
          <h2 className="exp-title exp-title-nature">
            Réserve de<br />Biosphère
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.35}>
          <p className="exp-role exp-role-nature">
            Fontainebleau & Gâtinais — Développement Web & Communication
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.45}>
          <div className="exp-paper-card exp-paper-nature">
            <div className="exp-paper-fold exp-fold-nature" />
            <p className="exp-paper-text">
              Conception et déploiement de <strong>SI-RBFG</strong>, application web
              interne pour la Réserve de Biosphère de Fontainebleau & Gâtinais.
              Stack complet : <strong>Next.js, React, Neon PostgreSQL, NextAuth, Vercel</strong>.
              De la conception UX à la mise en production.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.55}>
          <div className="exp-tags-row">
            <span className="exp-tag-pill exp-tag-nature">Next.js</span>
            <span className="exp-tag-pill exp-tag-nature">PostgreSQL</span>
            <span className="exp-tag-pill exp-tag-nature">Vercel</span>
            <span className="exp-tag-pill exp-tag-nature">UX Design</span>
            <span className="exp-tag-pill exp-tag-nature">Auth</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.65}>
          <a
            href="https://github.com/madjilemmm/SI-RBFG"
            target="_blank"
            rel="noopener noreferrer"
            className="exp-link-nature"
          >
            Voir le projet sur GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </RevealOnScroll>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function Experiences() {
  return (
    <section className="experiences-section" id="experiences">
      <PaperFilters />

      {/* Section intro */}
      <div className="exp-intro">
        <RevealOnScroll>
          <p className="exp-intro-label">Mon parcours</p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <h2 className="exp-intro-h2">
            Chaque page,<br />une histoire<span className="hero-accent">.</span>
          </h2>
        </RevealOnScroll>
      </div>

      {/* Timeline + pages */}
      <div className="timeline-container">
        {/* Vertical timeline line */}
        <div className="timeline-line" />

        {/* SO FOOT */}
        <div className="timeline-entry">
          <TimelineDot num="01" />
          <PaperPage index={0}>
            <SoFootExperience />
          </PaperPage>
        </div>

        {/* Biosphère */}
        <div className="timeline-entry">
          <TimelineDot num="02" color="#4a9e5c" />
          <PaperPage index={1}>
            <BiosphereExperience />
          </PaperPage>
        </div>
      </div>
    </section>
  );
}
