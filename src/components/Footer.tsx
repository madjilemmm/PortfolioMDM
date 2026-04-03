export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <a href="#" className="f-logo">
              MDM<span>.</span>
            </a>
            <p className="f-tagline">
              Marketing &middot; Communication &middot; Sport Business.
              <br />
              &Icirc;le-de-France. Disponible en alternance.
            </p>
          </div>

          <div>
            <p className="f-col-title">Navigation</p>
            <nav className="f-links">
              <a href="#expertises">Expertises</a>
              <a href="#work">Projets</a>
              <a href="#about">&Agrave; propos</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div>
            <p className="f-col-title">Contact</p>
            <div className="f-contact">
              <a href="mailto:contact@madjilem.fr">contact@madjilem.fr</a>
              <a
                href="https://linkedin.com/in/madjilem-detol-maggiori"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/madjilemmm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub — madjilemmm
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="f-copy">
            &copy; 2025 Madjilem Detol-Maggiori
          </p>
          <div className="f-follow">
            <span className="f-follow-label">Follow me</span>
            <div className="f-social-links">
              <a
                href="https://linkedin.com/in/madjilem-detol-maggiori"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/madjilemmm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="f-credit">
            Portfolio &middot; Usage &eacute;ducatif et d&eacute;monstratif
          </p>
        </div>
      </div>
    </footer>
  );
}
