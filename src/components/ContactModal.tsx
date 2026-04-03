"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [success, setSuccess] = useState(false);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            className="modal-panel"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="modal-close-btn" onClick={handleClose}>
              &#x2715;
            </button>

            {!success ? (
              <>
                <h2 className="modal-h2">
                  Laisser <span>un message</span>
                </h2>
                <p className="modal-subtitle">
                  Je vous réponds sous 24h.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Nom & Prénom *</label>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="jean@entreprise.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Téléphone</label>
                    <input
                      className="form-input"
                      type="tel"
                      placeholder="Optionnel"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Votre message ou proposition..."
                      required
                    />
                  </div>
                  <div className="form-check">
                    <input type="checkbox" id="chk" required />
                    <label htmlFor="chk">
                      J&apos;accepte que mes données soient utilisées pour
                      traiter ma demande *
                    </label>
                  </div>
                  <button type="submit" className="btn-submit">
                    Envoyer le message
                  </button>
                </form>
                <p className="modal-footer-text">
                  Ou écrivez directement à{" "}
                  <a href="mailto:contact@madjilem.fr">contact@madjilem.fr</a>
                </p>
              </>
            ) : (
              <div className="modal-success-content">
                <h3>Message envoyé !</h3>
                <p>
                  Votre message a bien été reçu.
                  <br />
                  Je vous réponds très rapidement.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
