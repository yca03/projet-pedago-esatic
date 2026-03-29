import React from "react";
import "./CoursModal.css";

function CoursModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="cmodal-overlay" onClick={onClose}>
      <div className="cmodal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="cmodal-header">
          <h3>+ Nouveau cours</h3>
          <span className="cmodal-close" onClick={onClose}>✖</span>
        </div>

        {/* BODY */}
        <div className="cmodal-body">

          <div className="cmodal-row">
            <div className="cmodal-field">
              <label>Code du cours</label>
              <input placeholder="Ex: INF301-ALGO" />
            </div>
            <div className="cmodal-field">
              <label>Statut</label>
              <select>
                <option>Actif</option>
                <option>Inactif</option>
                <option>Archivé</option>
              </select>
            </div>
          </div>

          <div className="cmodal-field">
            <label>Intitulé du cours</label>
            <input placeholder="Ex: Algorithmique avancee" />
          </div>

          <div className="cmodal-row">
            <div className="cmodal-field">
              <label>Niveau</label>
              <select>
                <option>Licence</option>
                <option>Master</option>
                <option>Doctorat</option>
              </select>
            </div>
            <div className="cmodal-field">
              <label>Filière</label>
              <input placeholder="Ex: SIGL" />
            </div>
          </div>

          <div className="cmodal-field">
            <label>Enseignant attribué</label>
            <select>
              <option>Prof. KONE</option>
              <option>Dr. TOURE</option>
              <option>M. DIALLO</option>
            </select>
          </div>

        </div>

        {/* FOOTER */}
        <div className="cmodal-footer">
          <button className="cmodal-cancel" onClick={onClose}>Annuler</button>
          <button className="cmodal-save">+ Enregistrer</button>
        </div>

      </div>
    </div>
  );
}

export default CoursModal;
