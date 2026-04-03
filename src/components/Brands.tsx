"use client";

import RevealOnScroll from "./RevealOnScroll";

const brands = [
  "LFP",
  "FFF",
  "Red Star FC",
  "Paris FC",
  "SPORTFIVE",
  "Havas Sports",
  "RMC Sport",
  "L'Équipe",
  "Canal+ Sport",
  "beIN Sports",
  "Webedia Sports",
  "But! Football Club",
];

export default function Brands() {
  // Duplicate brands for seamless marquee
  const doubledBrands = [...brands, ...brands];

  return (
    <section id="brands" style={{ padding: "80px 0" }}>
      <div className="section-inner" style={{ padding: "0 var(--px)", marginBottom: 40 }}>
        <RevealOnScroll>
          <div className="section-label">Inspirations</div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="about-h2">
            Ces structures m&apos;inspirent.
          </h2>
        </RevealOnScroll>
      </div>

      <div className="brands-marquee">
        <div className="brands-track">
          {doubledBrands.map((brand, i) => (
            <span className="brand-chip" key={`${brand}-${i}`}>
              {brand}
            </span>
          ))}
        </div>
        <div className="brands-track" aria-hidden="true">
          {doubledBrands.map((brand, i) => (
            <span className="brand-chip" key={`${brand}-dup-${i}`}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
