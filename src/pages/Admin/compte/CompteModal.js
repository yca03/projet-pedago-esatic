import React from "react";
import "./CompteModal.css";

function CompteModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="cptmodal-overlay" onClick={onClose}>
      <div className="cptmodal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="cptmodal-header">
          <h3>+ Nouveau compte</h3>
          <span className="cptmodal-close" onClick={onClose}>✖</span>
        </div>

        {/* BODY */}
        <div className="cptmodal-body">

          <div className="cptmodal-row">
            <div className="cptmodal-field">
              <label>Nom</label>
              <input placeholder="Ex: JOHNSON" />
            </div>
            <div className="cptmodal-field">
              <label>Prénom</label>
              <input placeholder="Ex: Kouassi" />
            </div>
          </div>

          <div className="cptmodal-field">
            <label>Email</label>
            <input placeholder="Ex: k.johnson@esatic.ci" />
          </div>

          <div className="cptmodal-row">
            <div className="cptmodal-field">
              <label>Rôle</label>
              <select>
                <option value="">Sélectionner</option>
                <option>ENS</option>
                <option>RUP</option>
                <option>ADM</option>
                <option>CFI</option>
              </select>
            </div>
            <div className="cptmodal-field">
              <label>Grade</label>
              <select>
                <option value="">Sélectionner</option>
                <option>Assistant</option>
                <option>Docteur</option>
                <option>Maitre de conferences</option>
                <option>Professeur</option>
                <option>Administrateur Systeme</option>
              </select>
            </div>
          </div>

          <div className="cptmodal-row">
            <div className="cptmodal-field">
              <label>UP / Affectation</label>
              <input placeholder="Ex: UP Informatique" />
            </div>
            <div className="cptmodal-field">
              <label>Spécialité</label>
              <input placeholder="Ex: Bases de donnees" />
            </div>
          </div>

          <div className="cptmodal-row">
            <div className="cptmodal-field">
              <label>Mot de passe</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="cptmodal-field">
              <label>Statut</label>
              <select>
                <option>Actif</option>
                <option>Inactif</option>
              </select>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="cptmodal-footer">
          <button className="cptmodal-cancel" onClick={onClose}>Annuler</button>
          <button className="cptmodal-save">+ Enregistrer</button>
        </div>

      </div>
    </div>
  );
}

export default CompteModal;
