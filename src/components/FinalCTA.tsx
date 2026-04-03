"use client";

import ArrowIcon from "./ArrowIcon";

interface FinalCTAProps {
  onContact: () => void;
}

export default function FinalCTA({ onContact }: FinalCTAProps) {
  return (
    <section className="final-cta" id="contact">
      <div className="cta-inner">
        <p className="cta-label sr">
          — Disponible en alternance &middot; Septembre 2025
        </p>
        <h2 className="cta-h2 sr">
          On se
          <br />
          parle !
        </h2>
        <div className="cta-btns sr">
          <a href="mailto:contact@madjilem.fr" className="btn-ghost">
            &Eacute;crire un mail direct
          </a>
          <button className="btn-primary" onClick={onContact}>
            Me contacter
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
