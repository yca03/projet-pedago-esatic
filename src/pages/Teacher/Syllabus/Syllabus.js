import React, { useState } from "react";
import "./Syllabus.css";
import { FaTimes, FaExclamationTriangle, FaPaperclip } from "react-icons/fa";

const tabs = ["1. Objectifs", "2. Contenu", "3. Evaluation", "4. Bibliographie"];

function Syllabus() {
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({
    objectifs:   "A l issue de ce cours, l etudiant sera capable de concevoir et analyser des algorithmes efficaces, et de choisir les structures de donnees appropriees.",
    competences: "Maitriser la complexite algorithmique\nImplementer les algorithmes de tri et de recherche",
    modalites:   "",
    contenu:     "",
    evaluation:  "",
    biblio:      "",
  });
  const [dragOver, setDragOver] = useState(false);
  const [fichier, setFichier] = useState(null);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (f) setFichier(f.name);
  };

  return (
    <div className="syl-page">

      {/* ALERTE REJET */}
      <div className="syl-alert">
        <FaTimes className="syl-alert-icon" />
        <div>
          <p className="syl-alert-title">INF301-ALGO – Rejete par le RUP</p>
          <p className="syl-alert-msg">
            Motif : "Les modalites d evaluation (coefficients et type d epreuves) sont incompletes. Merci de completer avant de resoumettre."
          </p>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="syl-main">

        {/* GAUCHE — FORMULAIRE */}
        <div className="syl-form-card">
          <div className="syl-form-header">
            <h3>Corriger et resoumettre</h3>
            <p className="syl-form-subtitle">INF301-ALGO – Algorithmique avancee</p>
          </div>

          {/* TABS */}
          <div className="syl-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`syl-tab ${activeTab === i ? "syl-tab-active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="syl-tab-content">

            {activeTab === 0 && (
              <>
                <div className="syl-field">
                  <label>Objectifs du cours <span className="syl-required">*</span></label>
                  <textarea
                    rows={4}
                    value={form.objectifs}
                    onChange={(e) => handleChange("objectifs", e.target.value)}
                  />
                </div>
                <div className="syl-field">
                  <label>Competences visees <span className="syl-required">*</span></label>
                  <textarea
                    rows={4}
                    value={form.competences}
                    onChange={(e) => handleChange("competences", e.target.value)}
                  />
                </div>
                <div className="syl-field">
                  <label>Modalites d evaluation <span className="syl-required">*</span></label>
                  <textarea
                    rows={4}
                    placeholder="Ex: CC (40%) - TP note, DS (60%) - examen final 3h..."
                    value={form.modalites}
                    onChange={(e) => handleChange("modalites", e.target.value)}
                  />
                  {!form.modalites && (
                    <p className="syl-field-error">
                      <FaExclamationTriangle /> Ce champ est manquant - cause du rejet
                    </p>
                  )}
                </div>
              </>
            )}

            {activeTab === 1 && (
              <div className="syl-field">
                <label>Contenu du cours <span className="syl-required">*</span></label>
                <textarea
                  rows={8}
                  placeholder="Decrivez le contenu du cours semaine par semaine..."
                  value={form.contenu}
                  onChange={(e) => handleChange("contenu", e.target.value)}
                />
              </div>
            )}

            {activeTab === 2 && (
              <div className="syl-field">
                <label>Modalites d evaluation detaillees <span className="syl-required">*</span></label>
                <textarea
                  rows={8}
                  placeholder="Ex: CC (40%) - TP note, DS (60%) - examen final 3h..."
                  value={form.evaluation}
                  onChange={(e) => handleChange("evaluation", e.target.value)}
                />
              </div>
            )}

            {activeTab === 3 && (
              <div className="syl-field">
                <label>Bibliographie <span className="syl-required">*</span></label>
                <textarea
                  rows={8}
                  placeholder="Listez les references bibliographiques..."
                  value={form.biblio}
                  onChange={(e) => handleChange("biblio", e.target.value)}
                />
              </div>
            )}

          </div>

          {/* FOOTER BOUTONS */}
          <div className="syl-form-footer">
            <button className="syl-btn-brouillon">Enregistrer brouillon</button>
            <button className="syl-btn-soumettre">Soumettre au RUP →</button>
          </div>
        </div>

        {/* DROITE */}
        <div className="syl-right">

          {/* STATUT VALIDATION */}
          <div className="syl-status-card">
            <h4>Statut de validation</h4>

            <div className="syl-status-badge rejected">
              <FaTimes /> Rejete par RUP
            </div>

            <div className="syl-timeline">
              <div className="syl-step syl-step-done">
                <span>✓ Soumis (v1)</span>
              </div>
              <div className="syl-step syl-step-rejected">
                <span>✗ Rejete</span>
              </div>
              <div className="syl-step syl-step-active">
                <span>✎ Correction</span>
              </div>
              <div className="syl-step syl-step-todo">
                <span>◎ CFI</span>
              </div>
            </div>
          </div>

          {/* JOINDRE FICHIER */}
          <div className="syl-file-card">
            <h4>Joindre un fichier</h4>
            <div
              className={`syl-dropzone ${dragOver ? "syl-dropzone-over" : ""}`}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                const f = e.dataTransfer.files?.[0];
                if (f) setFichier(f.name);
              }}
              onClick={() => document.getElementById("file-input").click()}
            >
              <input
                id="file-input"
                type="file"
                accept=".pdf,.docx"
                style={{ display: "none" }}
                onChange={handleFile}
              />
              <FaPaperclip className="syl-dropzone-icon" />
              {fichier ? (
                <p className="syl-dropzone-file">📄 {fichier}</p>
              ) : (
                <>
                  <p className="syl-dropzone-text">Glissez votre document ici</p>
                  <p className="syl-dropzone-hint">PDF ou DOCX - max 10 Mo</p>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Syllabus;