import React, { useState, useEffect } from "react";
import { getUPs, addUP, deleteUP } from "../../utils/upStorage";
import "./UPModal.css";

function UPModal({ show, onClose }) {
  const [ups, setUps] = useState([]);
  const [nouveauNom, setNouveauNom] = useState("");
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    if (show) {
      setUps(getUPs());
      setNouveauNom("");
      setErreur("");
    }
  }, [show]);

  if (!show) return null;

  function handleAjouter() {
    const nom = nouveauNom.trim();
    if (!nom) {
      setErreur("Veuillez entrer un nom pour l'UP.");
      return;
    }
    const existe = ups.some(
      (up) => up.nom.toLowerCase() === nom.toLowerCase()
    );
    if (existe) {
      setErreur("Cette UP existe déjà.");
      return;
    }
    const updated = addUP(nom);
    setUps(updated);
    setNouveauNom("");
    setErreur("");
  }

  function handleSupprimer(id) {
    const updated = deleteUP(id);
    setUps(updated);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleAjouter();
  }

  return (
    <div className="upmodal-overlay" onClick={onClose}>
      <div className="upmodal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="upmodal-header">
          <div>
            <h3>Unités Pédagogiques</h3>
            <p className="upmodal-subtitle">Gérer les UPs de la plateforme</p>
          </div>
          <span className="upmodal-close" onClick={onClose}>✖</span>
        </div>

        {/* BODY */}
        <div className="upmodal-body">

          {/* FORMULAIRE AJOUT */}
          <div className="upmodal-add-section">
            <label>Ajouter une nouvelle UP</label>
            <div className="upmodal-input-row">
              <input
                type="text"
                placeholder="Ex: UP Cybersécurité"
                value={nouveauNom}
                onChange={(e) => {
                  setNouveauNom(e.target.value);
                  setErreur("");
                }}
                onKeyDown={handleKeyDown}
                className="upmodal-input"
              />
              <button className="upmodal-btn-add" onClick={handleAjouter}>
                + Ajouter
              </button>
            </div>
            {erreur && <p className="upmodal-error">{erreur}</p>}
          </div>

          {/* LISTE DES UPs */}
          <div className="upmodal-list-section">
            <p className="upmodal-list-title">
              UPs existantes <span className="upmodal-count">{ups.length}</span>
            </p>
            <div className="upmodal-list">
              {ups.length === 0 && (
                <p className="upmodal-empty">Aucune UP enregistrée.</p>
              )}
              {ups.map((up) => (
                <div className="upmodal-item" key={up.id}>
                  <div className="upmodal-item-icon">UP</div>
                  <span className="upmodal-item-nom">{up.nom}</span>
                  <button
                    className="upmodal-btn-delete"
                    onClick={() => handleSupprimer(up.id)}
                    title="Supprimer"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="upmodal-footer">
          <button className="upmodal-btn-close" onClick={onClose}>
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}

export default UPModal;