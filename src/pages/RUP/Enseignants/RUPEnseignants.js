import React, { useState } from "react";
import "./RUPEnseignants.css";

const enseignants = [
  { id:1, initials:"AK", nom:"Prof. Amara KONE",   email:"a.kone@esatic.ci",  specialite:"Algorithmes & IA",  grade:"Maitre conf.", cours:"3 cours", syllabus:{label:"2/3",type:"warning"}, color:"#2563eb" },
  { id:2, initials:"PT", nom:"Dr. Pauline TOURE",  email:"p.toure@esatic.ci", specialite:"Bases de donnees",  grade:"Docteur",      cours:"2 cours", syllabus:{label:"2/2",type:"valid"},   color:"#16a34a" },
  { id:3, initials:"MD", nom:"M. Moussa DIALLO",   email:"m.diallo@esatic.ci",specialite:"Reseaux",           grade:"Assistant",    cours:"4 cours", syllabus:{label:"1/4",type:"rejected"},color:"#ea580c" },
];

const sylBadge = { valid:"rup-ens-syl-valid", warning:"rup-ens-syl-warning", rejected:"rup-ens-syl-rejected" };

function RUPEnseignants() {
  const [search, setSearch] = useState("");
  const [statut, setStatut] = useState("Tous statuts");

  const filtered = enseignants.filter((e) =>
    e.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rup-ens-page">
      <div className="rup-ens-header">
        <div>
          <h2>Enseignants</h2>
          <p className="rup-ens-subtitle">UP Informatique</p>
        </div>
        <button className="rup-ens-btn-add">+ Ajouter</button>
      </div>

      <div className="rup-ens-filters">
        <input placeholder="🔍 Rechercher un enseignant..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <select value={statut} onChange={(e) => setStatut(e.target.value)}>
          <option>Tous statuts</option>
          <option>Actif</option>
          <option>Inactif</option>
        </select>
      </div>

      <div className="rup-ens-grid">
        {filtered.map((e) => (
          <div className="rup-ens-card" key={e.id}>
            <div className="rup-ens-card-top">
              <div className="rup-ens-avatar" style={{ background: e.color }}>{e.initials}</div>
              <div>
                <h4>{e.nom}</h4>
                <span className="rup-ens-email">{e.email}</span>
              </div>
            </div>
            <div className="rup-ens-infos">
              <div className="rup-ens-info"><span>SPECIALITE</span><p>{e.specialite}</p></div>
              <div className="rup-ens-info"><span>GRADE</span><p>{e.grade}</p></div>
              <div className="rup-ens-info"><span>COURS</span><p className="rup-ens-blue">{e.cours}</p></div>
              <div className="rup-ens-info">
                <span>SYLLABUS</span>
                <p className={sylBadge[e.syllabus.type]}>● {e.syllabus.label}</p>
              </div>
            </div>
            <div className="rup-ens-footer">
              <span className="rup-ens-statut">● Actif</span>
              <button className="rup-ens-btn-modifier">Modifier</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RUPEnseignants;