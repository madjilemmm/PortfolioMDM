const expertises = [
  {
    num: ["0", "1"],
    title: (
      <>
        Strat&eacute;gie
        <br />
        &Eacute;ditoriale
      </>
    ),
    visualClass: "ev1",
    visualLabel: "TEMPO · Calendrier content · Juin 2026",
    h3: "Construire une vision. Raconter une histoire.",
    desc: "J'analyse la marque, la cible et les enjeux. Je traduis ça en plan éditorial clair avec des formats qui créent de l'impact. Avec TEMPO, j'ai construit de A à Z une stratégie complète jusqu'en juin 2026 — ancrée sur les jalons Champions League et France vs Sénégal.",
    linkText: "Voir le projet TEMPO",
    linkHref: "#work",
  },
  {
    num: ["0", "2"],
    title: (
      <>
        Content
        <br />
        Creation
      </>
    ),
    visualClass: "ev2",
    visualLabel: "Instagram · Newsletter beehiiv · Pitch deck",
    h3: "Du contenu qui frappe. Et qui reste.",
    desc: "Je crée du contenu qui sort du lot. Textes, visuels, formats courts. Toujours en lien avec la culture, le sport et l'identité. Pour TEMPO, approche brand-first sans visage fondateur exposé — l'éditorial prime sur tout.",
    linkText: "Voir les projets",
    linkHref: "#work",
  },
  {
    num: ["0", "3"],
    title: (
      <>
        Sport
        <br />
        Business
      </>
    ),
    visualClass: "ev3",
    visualLabel: "Football · Médias · Géopolitique sportive",
    h3: "Visible là où et quand ça compte vraiment.",
    desc: "Je comprends les logiques économiques, médiatiques et politiques du football. Chaque transfert est un fait culturel, chaque incident un révélateur de pouvoir. Cibles : LFP, FFF, Red Star FC, Paris FC, SPORTFIVE, Havas Sports, L'Équipe.",
    linkText: "Ces structures m'inspirent",
    linkHref: "#brands",
  },
  {
    num: ["0", "4"],
    title: (
      <>
        D&eacute;veloppement
        <br />
        Web
      </>
    ),
    visualClass: "ev4",
    visualLabel: "SI-RBFG · Next.js · Vercel · PostgreSQL",
    h3: "Les insights qui font la différence.",
    desc: "J'ai conçu et déployé SI-RBFG, application web interne pour la Réserve de Biosphère de Fontainebleau. Stack complet : Next.js, React, Neon PostgreSQL, NextAuth, Vercel. De la conception à la mise en production.",
    linkText: "Voir sur GitHub",
    linkHref: "https://github.com/madjilemmm/SI-RBFG",
    external: true,
  },
];

export default function Expertises() {
  return (
    <div className="expertises" id="expertises">
      {expertises.map((exp, i) => (
        <div className="exp-section" key={i}>
          <div className="exp-inner">
            <div className="exp-left sr">
              <p className="exp-tag">Expertise</p>
              <h2 className="exp-title">{exp.title}</h2>
              <div className="exp-num" aria-hidden="true">
                <span>{exp.num[0]}</span>
                <span>{exp.num[1]}</span>
              </div>
            </div>
            <div className="exp-right sr d2">
              <div className="exp-visual">
                <div className={`exp-visual-bg ${exp.visualClass}`} />
                <div className="exp-visual-label">{exp.visualLabel}</div>
              </div>
              <h3 className="exp-h3">{exp.h3}</h3>
              <p className="exp-desc">{exp.desc}</p>
              <a
                href={exp.linkHref}
                className="link-arr"
                {...(exp.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {exp.linkText}
                <svg
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
