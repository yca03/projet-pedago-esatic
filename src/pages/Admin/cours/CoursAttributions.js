import React, { useState } from "react";
import "./CoursAttributions.css";
import CoursModal from "./CoursModal";

const coursData = [
  {
    id: 1,
    code: "INF301-ALGO",
    titre: "Algorithmique avancee",
    statut: "Actif",
    niveaux: ["Licence", "SIGL"],
    enseignant: { initials: "AK", nom: "Prof. KONE", color: "#2563eb" },
    syllabus: { label: "Rejeté", type: "rejected" },
    progression: { label: "Non déposé", type: "pending" },
  },
  {
    id: 2,
    code: "INF305-BDD",
    titre: "Bases de donnees avancees",
    statut: "Actif",
    niveaux: ["Licence", "MBDS"],
    enseignant: { initials: "PT", nom: "Dr. TOURE", color: "#16a34a" },
    syllabus: { label: "Att. CFI", type: "waiting" },
    progression: { label: "Valide", type: "valid" },
  },
  {
    id: 3,
    code: "INF402-RES",
    titre: "Reseaux informatiques",
    statut: "Actif",
    niveaux: ["Master", "SITW"],
    enseignant: { initials: "MD", nom: "M. DIALLO", color: "#ea580c" },
    syllabus: { label: "Valide", type: "valid" },
    progression: { label: "Valide", type: "valid" },
  },
  {
    id: 4,
    code: "INF410-SEC",
    titre: "Securite informatique",
    statut: "Actif",
    niveaux: ["Master", "SITW"],
    enseignant: { initials: "AK", nom: "Prof. KONE", color: "#2563eb" },
    syllabus: { label: "Valide", type: "valid" },
    progression: { label: "Att. CFI", type: "waiting" },
  },
];

function StatusBadge({ label, type }) {
  return <span className={`badge badge-${type}`}>● {label}</span>;
}

function CoursAttributions() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="cours-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <h2>Cours et Attributions</h2>
          <p className="page-subtitle">UP Informatique · 18 cours actifs</p>
        </div>
        <button className="btn-new" onClick={() => setShowModal(true)}>
          + Nouveau cours
        </button>
      </div>

      {/* CARDS GRID */}
      <div className="cours-grid">
        {coursData.map((c) => (
          <div className="cours-card" key={c.id}>

            {/* TOP ROW */}
            <div className="cours-card-top">
              <span className="cours-code">{c.code}</span>
              <span className="cours-statut">● {c.statut}</span>
            </div>

            {/* TITRE */}
            <h3 className="cours-titre">{c.titre}</h3>

            {/* NIVEAUX */}
            <div className="cours-niveaux">
              {c.niveaux.map((n) => (
                <span className="niveau-tag" key={n}>{n}</span>
              ))}
            </div>

            {/* ENSEIGNANT */}
            <div className="cours-enseignant">
              <div className="avatar-sm" style={{ background: c.enseignant.color }}>
                {c.enseignant.initials}
              </div>
              <span>{c.enseignant.nom}</span>
            </div>

            {/* SYLLABUS & PROGRESSION */}
            <div className="cours-meta">
              <div className="meta-col">
                <span className="meta-label">SYLLABUS</span>
                <StatusBadge {...c.syllabus} />
              </div>
              <div className="meta-col">
                <span className="meta-label">PROGRESSION</span>
                <StatusBadge {...c.progression} />
              </div>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="cours-actions">
              <button className="btn-docs">Voir docs</button>
              <button className="btn-modifier">Modifier attr.</button>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
      <CoursModal show={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
}

export default CoursAttributions;
