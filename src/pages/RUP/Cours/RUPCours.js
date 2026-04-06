import React, { useState } from "react";
import "./RUPCours.css";

const initCours = [
  { id:1, code:"INF301-ALGO", titre:"Algorithmique avancee",   niveaux:["Licence","SIGL"], enseignant:{initials:"AK",nom:"Prof. KONE",color:"#2563eb"}, syllabus:{label:"Rejete",type:"rejected"},    progression:{label:"Non depose",type:"pending"} },
  { id:2, code:"INF305-BDD",  titre:"Bases de donnees avancees",niveaux:["Licence","MBDS"], enseignant:{initials:"PT",nom:"Dr. TOURE",color:"#16a34a"}, syllabus:{label:"Att. CFI",type:"waiting"},    progression:{label:"Valide",type:"valid"} },
  { id:3, code:"INF402-RES",  titre:"Reseaux informatiques",   niveaux:["Master","SITW"],  enseignant:{initials:"MD",nom:"M. DIALLO",color:"#ea580c"}, syllabus:{label:"Valide",type:"valid"},        progression:{label:"Valide",type:"valid"} },
  { id:4, code:"INF410-SEC",  titre:"Securite informatique",   niveaux:["Master","SIGL"],  enseignant:{initials:"AK",nom:"Prof. KONE",color:"#2563eb"}, syllabus:{label:"Non depose",type:"pending"},  progression:{label:"Non depose",type:"pending"} },
];

const bClass = { valid:"rup-cours-valid", rejected:"rup-cours-rejected", waiting:"rup-cours-waiting", pending:"rup-cours-pending" };

function StatusBadge({ label, type }) {
  return <span className={`rup-cours-badge ${bClass[type]}`}>● {label}</span>;
}

function RUPCours() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="rup-cours-page">
      <div className="rup-cours-header">
        <div>
          <h2>Cours et Attributions</h2>
          <p className="rup-cours-subtitle">UP Informatique · 18 cours actifs</p>
        </div>
        <button className="rup-cours-btn-new" onClick={() => setShowModal(true)}>+ Nouveau cours</button>
      </div>

      <div className="rup-cours-grid">
        {initCours.map((c) => (
          <div className="rup-cours-card" key={c.id}>
            <div className="rup-cours-top">
              <span className="rup-cours-code">{c.code}</span>
              <span className="rup-cours-statut">● Actif</span>
            </div>
            <h3 className="rup-cours-titre">{c.titre}</h3>
            <div className="rup-cours-niveaux">
              {c.niveaux.map((n) => <span className="rup-cours-tag" key={n}>{n}</span>)}
            </div>
            <div className="rup-cours-ens">
              <div className="rup-cours-avatar" style={{ background: c.enseignant.color }}>{c.enseignant.initials}</div>
              <span>{c.enseignant.nom}</span>
            </div>
            <div className="rup-cours-meta">
              <div className="rup-cours-meta-col"><span>SYLLABUS</span><StatusBadge {...c.syllabus} /></div>
              <div className="rup-cours-meta-col"><span>PROGRESSION</span><StatusBadge {...c.progression} /></div>
            </div>
            <div className="rup-cours-actions">
              <button className="rup-cours-btn-docs">Voir docs</button>
              <button className="rup-cours-btn-attr">Modifier attr.</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL CREER COURS */}
      {showModal && (
        <div className="rup-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="rup-modal" onClick={(e) => e.stopPropagation()}>
            <div className="rup-modal-header">
              <h3>+ Creer un cours</h3>
              <span onClick={() => setShowModal(false)}>✕</span>
            </div>
            <div className="rup-modal-body">
              <div className="rup-modal-field">
                <label>Intitule du cours *</label>
                <input placeholder="ex. Algorithmique avancee" />
              </div>
              <div className="rup-modal-row">
                <div className="rup-modal-field">
                  <label>Code *</label>
                  <input placeholder="INF301-ALGO" />
                </div>
                <div className="rup-modal-field">
                  <label>Volume horaire</label>
                  <input placeholder="45h CM + TP" />
                </div>
              </div>
              <div className="rup-modal-row">
                <div className="rup-modal-field">
                  <label>Niveau *</label>
                  <select><option>Licence</option><option>Master</option></select>
                </div>
                <div className="rup-modal-field">
                  <label>Filiere *</label>
                  <select><option>SIGL</option><option>MBDS</option><option>SITW</option></select>
                </div>
              </div>
              <div className="rup-modal-field">
                <label>Attribuer a un enseignant</label>
                <select><option>-- Selectionner --</option><option>Prof. KONE</option><option>Dr. TOURE</option><option>M. DIALLO</option></select>
              </div>
            </div>
            <div className="rup-modal-footer">
              <button className="rup-modal-cancel" onClick={() => setShowModal(false)}>Annuler</button>
              <button className="rup-modal-save">+ Creer le cours</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default RUPCours;