export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="sr">
        <h1 className="hero-h1">
          Madjilem.
          <br />
          Créer. Connecter.
          <br />
          Convertir.
        </h1>
        <p className="hero-sub">Fini les profils sans projets concrets.</p>
      </div>

      <div className="hero-cards sr d1">
        <div className="hcard">
          <div className="hcard-stat">
            Bac<span>+3</span>
          </div>
          <div className="hcard-title">Niveau d&apos;&eacute;tudes</div>
          <div className="hcard-sub">
            Marketing &amp; Communication, &Icirc;le-de-France
          </div>
          <div className="hcard-thumb">
            <div className="hcard-thumb-img t1" />
            <div className="hcard-thumb-shade" />
            <div className="hcard-play">
              <svg viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        </div>

        <div className="hcard">
          <div className="hcard-stat">
            2<span>+</span>
          </div>
          <div className="hcard-title">Projets actifs</div>
          <div className="hcard-sub">
            Du m&eacute;dia ind&eacute;pendant &agrave; l&apos;app web
            d&eacute;ploy&eacute;e
          </div>
          <div className="hcard-thumb">
            <div className="hcard-thumb-img t2" />
            <div className="hcard-thumb-shade" />
            <div className="hcard-play">
              <svg viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
