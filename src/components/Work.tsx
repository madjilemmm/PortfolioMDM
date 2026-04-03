export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work-inner">
        <div className="work-head sr">
          <h2 className="work-h2">
            Ce que je <strong>construis.</strong>
          </h2>
          <p className="work-sub">
            Je raconte mon histoire. D&apos;une fa&ccedil;on qui correspond
            vraiment &agrave; ma vision. Avec des projets concrets qui
            fonctionnent et font la diff&eacute;rence.
          </p>
        </div>
        <div className="work-cta sr">
          <a
            href="https://github.com/madjilemmm"
            target="_blank"
            rel="noopener noreferrer"
            className="link-arr"
          >
            Voir tout mon travail
            <svg
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="work-grid">
          <a href="#" className="wcard sr">
            <div className="wcard-bg wb1" />
            <div className="wcard-shade" />
            <span className="wcard-tag">
              M&eacute;dia Digital &middot; En construction
            </span>
            <div className="wcard-content">
              <p className="wcard-tagline">
                Football, identit&eacute;, pouvoir, g&eacute;opolitique. Un
                m&eacute;dia ind&eacute;pendant &agrave; la ligne
                &eacute;ditoriale tranch&eacute;e.
              </p>
              <div className="wcard-title">TEMPO</div>
            </div>
          </a>

          <a
            href="https://github.com/madjilemmm/SI-RBFG"
            target="_blank"
            rel="noopener noreferrer"
            className="wcard sr d1"
          >
            <div className="wcard-bg wb2" />
            <div className="wcard-shade" />
            <span className="wcard-tag">
              App Web &middot; D&eacute;ploy&eacute;e
            </span>
            <div className="wcard-content">
              <p className="wcard-tagline">
                Portail interne, auth, filtres, annuaire. Next.js + Vercel.
              </p>
              <div className="wcard-title">SI-RBFG</div>
            </div>
          </a>

          <div className="wcard sr d2">
            <div className="wcard-bg wb3" />
            <div className="wcard-shade" />
            <span className="wcard-tag">
              Pitch Deck &middot; Export&eacute;
            </span>
            <div className="wcard-content">
              <p className="wcard-tagline">
                Pitch minimaliste noir/blanc/rouge, Keynote-inspired.
              </p>
              <div className="wcard-title">
                TEMPO
                <br />
                Pitch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
