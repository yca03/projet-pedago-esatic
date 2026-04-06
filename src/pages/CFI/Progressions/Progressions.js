import React, { useState } from "react";
import "./Progressions.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const initData = [
  { id: 1, code: "INF301-ALGO", enseignant: "Prof. KONE",  statut: "Valide",    type: "valid",   date: "15/03" },
  { id: 2, code: "INF305-BDD",  enseignant: "Dr. TOURE",   statut: "Att. CFI",  type: "waiting", date: "17/03" },
  { id: 3, code: "INF402-RES",  enseignant: "M. DIALLO",   statut: "Valide",    type: "valid",   date: "12/03" },
  { id: 4, code: "INF410-SEC",  enseignant: "Prof. KONE",  statut: "Non depose",type: "pending", date: "--"   },
];

const badgeClass = {
  valid:    "dp-prog-badge-valid",
  waiting:  "dp-prog-badge-waiting",
  pending:  "dp-prog-badge-pending",
  rejected: "dp-prog-badge-rejected",
};

function DPProgressions() {
  const [data, setData]       = useState(initData);
  const [modal, setModal]     = useState(null); // { id, code, action }

  const confirmer = () => {
    if (!modal) return;
    setData((prev) => prev.map((r) =>
      r.id === modal.id
        ? modal.action === "valider"
          ? { ...r, statut: "Valide",  type: "valid",    date: new Date().toLocaleDateString("fr-FR", { day:"2-digit", month:"2-digit" }) }
          : { ...r, statut: "Rejete",  type: "rejected", date: "--" }
        : r
    ));
    setModal(null);
  };

  const handleDeposer = (id) => {
    setData((prev) => prev.map((r) =>
      r.id === id ? { ...r, statut: "Att. CFI", type: "waiting", date: new Date().toLocaleDateString("fr-FR", { day:"2-digit", month:"2-digit" }) } : r
    ));
  };

  return (
    <div className="dp-prog-page">
      <div className="dp-prog-header">
        <h2>Progressions Pedagogiques</h2>
        <p className="dp-prog-subtitle">Suivi de l avancement des cours</p>
      </div>

      <div className="dp-prog-table-wrap">
        <table className="dp-prog-table">
          <thead>
            <tr>
              <th>COURS</th>
              <th>ENSEIGNANT</th>
              <th>STATUT</th>
              <th>DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => (
              <tr key={r.id}>
                <td><span className="dp-prog-code">{r.code}</span></td>
                <td className="dp-prog-ens">{r.enseignant}</td>
                <td><span className={`dp-prog-badge ${badgeClass[r.type]}`}>● {r.statut}</span></td>
                <td className="dp-prog-date">{r.date}</td>
                <td>
                  <div className="dp-prog-actions">
                    {r.type === "pending" ? (
                      <button className="dp-prog-btn-deposer" onClick={() => handleDeposer(r.id)}>Deposer →</button>
                    ) : (
                      <>
                        <button className="dp-prog-btn-valider" onClick={() => setModal({ id: r.id, code: r.code, action: "valider" })}><FaCheck /></button>
                        <button className="dp-prog-btn-rejeter" onClick={() => setModal({ id: r.id, code: r.code, action: "rejeter" })}><FaTimes /></button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL CONFIRMATION */}
      {modal && (
        <div className="dp-prog-overlay" onClick={() => setModal(null)}>
          <div className="dp-prog-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dp-prog-modal-header">
              <h3>Confirmer la validation</h3>
              <span onClick={() => setModal(null)}>✕</span>
            </div>
            <div className="dp-prog-modal-body">
              <div className="dp-prog-modal-icon">
                <FaCheck />
              </div>
              <p className="dp-prog-modal-title">
                {modal.action === "valider" ? "Valider" : "Rejeter"} Progression {modal.code} ?
              </p>
              <p className="dp-prog-modal-sub">Transmis</p>
            </div>
            <div className="dp-prog-modal-footer">
              <button className="dp-prog-modal-cancel" onClick={() => setModal(null)}>Annuler</button>
              <button className="dp-prog-modal-confirm" onClick={confirmer}>
                ✓ Valider et transmettre
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DPProgressions;