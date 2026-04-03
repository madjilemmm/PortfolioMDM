"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [success, setSuccess] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose();
    setTimeout(() => setSuccess(false), 400);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(handleClose, 3500);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === wrapRef.current) handleClose();
  };

  return (
    <div
      className={`modal-wrap${isOpen ? " open" : ""}`}
      ref={wrapRef}
      onClick={handleOverlayClick}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={handleClose}>
          Fermer &#x2715;
        </button>

        {!success ? (
          <div>
            <h2 className="modal-title">
              Laisser <span>un message</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="f-group">
                <label className="f-label">Nom &amp; Pr&eacute;nom *</label>
                <input
                  className="f-input"
                  type="text"
                  placeholder="Jean Dupont"
                  required
                />
              </div>
              <div className="f-group">
                <label className="f-label">Email *</label>
                <input
                  className="f-input"
                  type="email"
                  placeholder="jean@entreprise.com"
                  required
                />
              </div>
              <div className="f-group">
                <label className="f-label">T&eacute;l&eacute;phone</label>
                <input
                  className="f-input"
                  type="tel"
                  placeholder="Optionnel"
                />
              </div>
              <div className="f-group">
                <label className="f-label">Message *</label>
                <textarea
                  className="f-textarea"
                  placeholder="Votre message ou proposition..."
                  required
                />
              </div>
              <div className="f-check">
                <input type="checkbox" id="chk" required />
                <label htmlFor="chk">
                  J&apos;accepte que mes donn&eacute;es soient utilis&eacute;es
                  pour traiter ma demande *
                </label>
              </div>
              <button type="submit" className="btn-submit">
                Envoyer le message
              </button>
            </form>
            <p className="modal-alt">
              Ou &eacute;crivez directement &agrave;{" "}
              <a href="mailto:contact@madjilem.fr">contact@madjilem.fr</a>
            </p>
          </div>
        ) : (
          <div className="modal-success" style={{ display: "block" }}>
            <h3>Message envoy&eacute; !</h3>
            <p>
              Votre message a bien &eacute;t&eacute; re&ccedil;u.
              <br />
              Je vous r&eacute;ponds tr&egrave;s rapidement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
