"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

/* ─────────────────────────────────────────────
   EXPERIENCE PAGE WRAPPER
   Each "page" fills the viewport and has a paper-turn
   reveal: the previous page lifts/rotates away as you scroll,
   revealing the next experience underneath.
───────────────────────────────────────────── */

function PageTurn({
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

  // The "paper" lifts up and rotates slightly as it exits
  const rotateX = useTransform(scrollYProgress, [0.6, 1], [0, -4]);
  const y = useTransform(scrollYProgress, [0.6, 1], ["0%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.95]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.15, 0]);

  return (
    <motion.div
      ref={ref}
      className="exp-page"
      style={{
        rotateX,
        y,
        scale,
        transformPerspective: 1200,
        transformOrigin: "center bottom",
        zIndex: 10 - index,
      }}
    >
      {/* Paper shadow underneath */}
      <motion.div
        className="exp-page-shadow"
        style={{ opacity: shadowOpacity }}
      />
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
      {/* Background — urban/football editorial mood */}
      <motion.div className="exp-page-bg exp-sofoot-bg" style={{ y: imgY }}>
        <div className="exp-sofoot-grain" />
      </motion.div>

      <motion.div className="exp-page-content" style={{ y: textY }}>
        <RevealOnScroll delay={0.1}>
          <div className="exp-chapter">
            <span className="exp-chapter-num">01</span>
            <span className="exp-chapter-line" />
            <span className="exp-chapter-label">Expérience</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <h2 className="exp-title">SO FOOT</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="exp-role">Stage — Rédaction & Communication</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
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

        <RevealOnScroll delay={0.5}>
          <div className="exp-tags-row">
            <span className="exp-tag-pill">Rédaction</span>
            <span className="exp-tag-pill">Ligne éditoriale</span>
            <span className="exp-tag-pill">Football & Culture</span>
            <span className="exp-tag-pill">Veille média</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6}>
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
      {/* Background — nature/forest mood */}
      <motion.div className="exp-page-bg exp-biosphere-bg" style={{ y: imgY }} />

      {/* Floating leaves — parallax decorative elements */}
      <motion.div
        className="exp-leaf exp-leaf-1"
        style={{ y: leafY, rotate: leafRotate }}
      />
      <motion.div
        className="exp-leaf exp-leaf-2"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["15%", "-20%"]),
          rotate: useTransform(scrollYProgress, [0, 1], [5, -20]),
        }}
      />

      <motion.div className="exp-page-content" style={{ y: textY }}>
        <RevealOnScroll delay={0.1}>
          <div className="exp-chapter">
            <span className="exp-chapter-num">02</span>
            <span className="exp-chapter-line" />
            <span className="exp-chapter-label">Expérience</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <h2 className="exp-title exp-title-nature">
            Réserve de<br />Biosphère
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <p className="exp-role exp-role-nature">
            Fontainebleau & Gâtinais — Développement Web & Communication
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
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

        <RevealOnScroll delay={0.5}>
          <div className="exp-tags-row">
            <span className="exp-tag-pill exp-tag-nature">Next.js</span>
            <span className="exp-tag-pill exp-tag-nature">PostgreSQL</span>
            <span className="exp-tag-pill exp-tag-nature">Vercel</span>
            <span className="exp-tag-pill exp-tag-nature">UX Design</span>
            <span className="exp-tag-pill exp-tag-nature">Auth</span>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6}>
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

      {/* Pages — stacked, each one "turns" away on scroll */}
      <div className="exp-pages-stack">
        <PageTurn index={0}>
          <SoFootExperience />
        </PageTurn>
        <PageTurn index={1}>
          <BiosphereExperience />
        </PageTurn>
      </div>
    </section>
  );
}
