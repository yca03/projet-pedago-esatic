import React from "react";
import "./TeacherModal.css";

function TeacherModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="tmodal-overlay" onClick={onClose}>
      <div className="tmodal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="tmodal-header">
          <h3>+ Ajouter un enseignant</h3>
          <span className="tmodal-close" onClick={onClose}>✖</span>
        </div>

        {/* BODY */}
        <div className="tmodal-body">

          <div className="tmodal-row">
            <div className="tmodal-field">
              <label>Nom</label>
              <input placeholder="Ex: KONE" />
            </div>
            <div className="tmodal-field">
              <label>Prénom</label>
              <input placeholder="Ex: Amara" />
            </div>
          </div>

          <div className="tmodal-field">
            <label>Email</label>
            <input placeholder="Ex: a.kone@esatic.ci" />
          </div>

          <div className="tmodal-row">
            <div className="tmodal-field">
              <label>Grade académique</label>
              <select>
                <option value="">Sélectionner</option>
                <option>Assistant</option>
                <option>Maitre de conférences</option>
                <option>Docteur</option>
                <option>Professeur</option>
              </select>
            </div>
            <div className="tmodal-field">
              <label>Spécialité</label>
              <input placeholder="Ex: Algorithmes & IA" />
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="tmodal-footer">
          <button className="tmodal-cancel" onClick={onClose}>Annuler</button>
          <button className="tmodal-save">+ Enregistrer</button>
        </div>

      </div>
    </div>
  );
}

export default TeacherModal;
