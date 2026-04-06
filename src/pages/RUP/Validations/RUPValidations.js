import React, { useState } from "react";
import "./RUPValidations.css";
import { FaCheck } from "react-icons/fa";

const initData = [
  { id:1, document:"Syllabus v2",  soustitre:"Corrige",         code:"INF301-ALGO", enseignant:"Prof. A. KONE",  type:"Syllabus",    typeClass:"rupval-syl",  soumis:"20/03" },
  { id:2, document:"Progression",  soustitre:"1ere soumission", code:"INF305-BDD",  enseignant:"Dr. P. TOURE",   type:"Progression", typeClass:"rupval-prog", soumis:"19/03" },
  { id:3, document:"Syllabus v1",  soustitre:"1ere soumission", code:"INF402-RES",  enseignant:"M. M. DIALLO",   type:"Syllabus",    typeClass:"rupval-syl",  soumis:"18/03" },
];

function RUPValidations() {
  const [data,        setData]        = useState(initData);
  const [modalVal,    setModalVal]    = useState(null);
  const [modalRejet,  setModalRejet]  = useState(null);
  const [motif,       setMotif]       = useState("");

  const confirmerValider = () => {
    setData((p) => p.filter((r) => r.id !== modalVal.id));
    setModalVal(null);
  };

  const confirmerRejet = () => {
    setData((p) => p.filter((r) => r.id !== modalRejet.id));
    setModalRejet(null);
    setMotif("");
  };

  return (
    <div className="rupval-page">
      <div className="rupval-header">
        <h2>Documents a valider (RUP)</h2>
        <p className="rupval-subtitle">Votre validation transmet au CFI</p>
      </div>

      <div className="rupval-table-wrap">
        <table className="rupval-table">
          <thead>
            <tr>
              <th>DOCUMENT</th><th>COURS</th><th>ENSEIGNANT</th><th>TYPE</th><th>SOUMIS LE</th><th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr><td colSpan={6} className="rupval-empty">✓ Aucun document en attente</td></tr>
            )}
            {data.map((r) => (
              <tr key={r.id}>
                <td>
                  <p className="rupval-doc">{r.document}</p>
                  <p className="rupval-doc-sub">{r.soustitre}</p>
                </td>
                <td><span className="rupval-code">{r.code}</span></td>
                <td className="rupval-ens">{r.enseignant}</td>
                <td><span className={`rupval-type ${r.typeClass}`}>{r.type}</span></td>
                <td className="rupval-date">{r.soumis}</td>
                <td>
                  <div className="rupval-actions">
                    <button className="rupval-btn-valider" onClick={() => setModalVal(r)}>✓ Valider</button>
                    <button className="rupval-btn-rejeter" onClick={() => setModalRejet(r)}>✕ Rejeter</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL VALIDER */}
      {modalVal && (
        <div className="rupval-overlay" onClick={() => setModalVal(null)}>
          <div className="rupval-modal" onClick={(e) => e.stopPropagation()}>
            <div className="rupval-modal-header">
              <h3>Confirmer la validation</h3>
              <span onClick={() => setModalVal(null)}>✕</span>
            </div>
            <div className="rupval-modal-body">
              <div className="rupval-modal-icon green"><FaCheck /></div>
              <p className="rupval-modal-title">Valider {modalVal.type} {modalVal.code} ?</p>
              <p className="rupval-modal-sub">Transmis au CFI (ALRT-04)</p>
            </div>
            <div className="rupval-modal-footer">
              <button className="rupval-modal-cancel" onClick={() => setModalVal(null)}>Annuler</button>
              <button className="rupval-modal-confirm" onClick={confirmerValider}>✓ Valider et transmettre</button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL REJETER */}
      {modalRejet && (
        <div className="rupval-overlay" onClick={() => setModalRejet(null)}>
          <div className="rupval-modal" onClick={(e) => e.stopPropagation()}>
            <div className="rupval-modal-header">
              <h3>✕ Rejeter le document</h3>
              <span onClick={() => setModalRejet(null)}>✕</span>
            </div>
            <div className="rupval-modal-body">
              <div className="rupval-rejet-alert">
                <p className="rupval-rejet-alert-title">{modalRejet.type} {modalRejet.code}</p>
                <p className="rupval-rejet-alert-sub">Ce document sera renvoye a l enseignant avec votre commentaire.</p>
              </div>
              <div className="rupval-rejet-field">
                <label>Motif du rejet *</label>
                <textarea
                  rows={4}
                  placeholder="Decrivez les corrections attendues par l enseignant..."
                  value={motif}
                  onChange={(e) => setMotif(e.target.value)}
                />
              </div>
            </div>
            <div className="rupval-modal-footer">
              <button className="rupval-modal-cancel" onClick={() => setModalRejet(null)}>Annuler</button>
              <button className="rupval-modal-confirm-rejet" onClick={confirmerRejet}>✕ Confirmer le rejet</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default RUPValidations;