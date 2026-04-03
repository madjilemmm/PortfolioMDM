export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <a href="#" className="footer-logo">
              MDM<span>.</span>
            </a>
            <p className="footer-tagline">
              Marketing · Communication · Sport Business.
              <br />
              Île-de-France. Disponible en alternance.
            </p>
          </div>

          <div>
            <p className="footer-col-title">Navigation</p>
            <nav className="footer-links">
              <a href="#about">À propos</a>
              <a href="#expertises">Expertises</a>
              <a href="#work">Projets</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div>
            <p className="footer-col-title">Contact</p>
            <nav className="footer-links">
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
                GitHub
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2025 Madjilem Detol-Maggiori
          </p>
          <div className="footer-socials">
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
      </div>
    </footer>
  );
}
