"use client";

import MagneticButton from "./MagneticButton";
import RevealOnScroll from "./RevealOnScroll";
import AnimatedText from "./AnimatedText";

interface ContactCTAProps {
  onContact: () => void;
}

export default function ContactCTA({ onContact }: ContactCTAProps) {
  return (
    <section id="contact" style={{ padding: "0 0 120px" }}>
      <div className="cta-section">
        <div className="cta-bg-glow" />
        <div className="cta-content">
          <RevealOnScroll>
            <div
              className="section-label"
              style={{ justifyContent: "center", color: "var(--accent)" }}
            >
              <span style={{ display: "none" }} />
              Disponible en alternance · Septembre 2025
            </div>
          </RevealOnScroll>

          <AnimatedText as="h2" className="cta-h2" delay={0.1}>
            On se parle ?
          </AnimatedText>

          <RevealOnScroll delay={0.3}>
            <p className="cta-sub">
              Envie de collaborer ou simplement d&apos;échanger ?
              Je suis toujours ouverte à la discussion.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="cta-btns">
              <MagneticButton
                as="a"
                className="btn-ghost-white"
                href="mailto:contact@madjilem.fr"
              >
                Écrire un mail direct
              </MagneticButton>
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
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
