import React, { useState } from "react";
import "./Teachers.css";
import TeacherModal from "./TeacherModal";

const teachersData = [
  {
    id: 1,
    initials: "AK",
    nom: "Prof. Amara KONE",
    email: "a.kone@esatic.ci",
    specialite: "Algorithmes & IA",
    grade: "Maitre conf.",
    cours: "3 cours",
    syllabus: { label: "2/3", type: "warning" },
    color: "#2563eb",
  },
  {
    id: 2,
    initials: "PT",
    nom: "Dr. Pauline TOURE",
    email: "p.toure@esatic.ci",
    specialite: "Bases de donnees",
    grade: "Docteur",
    cours: "2 cours",
    syllabus: { label: "2/2", type: "valid" },
    color: "#16a34a",
  },
  {
    id: 3,
    initials: "MD",
    nom: "M. Moussa DIALLO",
    email: "m.diallo@esatic.ci",
    specialite: "Reseaux",
    grade: "Assistant",
    cours: "4 cours",
    syllabus: { label: "1/4", type: "rejected" },
    color: "#ea580c",
  },
];

function Teachers() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statut, setStatut] = useState("Tous statuts");

  const filtered = teachersData.filter((t) =>
    t.nom.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="teachers-page">

      {/* PAGE HEADER */}
      <div className="teachers-header">
        <div>
          <h2>Enseignants</h2>
          <p className="teachers-subtitle">UP Informatique</p>
        </div>
        <button className="btn-add" onClick={() => setShowModal(true)}>
          + Ajouter
        </button>
      </div>

      {/* FILTERS */}
      <div className="teachers-filters">
        <input
          placeholder="🔍 Rechercher un enseignant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={statut} onChange={(e) => setStatut(e.target.value)}>
          <option>Tous statuts</option>
          <option>Actif</option>
          <option>Inactif</option>
        </select>
      </div>

      {/* CARDS */}
      <div className="teachers-grid">
        {filtered.map((t) => (
          <div className="teacher-card" key={t.id}>

            {/* CARD HEADER */}
            <div className="tcard-header">
              <div className="tcard-avatar" style={{ background: t.color }}>
                {t.initials}
              </div>
              <div>
                <h4>{t.nom}</h4>
                <span className="tcard-email">{t.email}</span>
              </div>
            </div>

            {/* INFOS GRID */}
            <div className="tcard-grid">
              <div className="tcard-info">
                <span className="tcard-label">SPECIALITE</span>
                <p>{t.specialite}</p>
              </div>
              <div className="tcard-info">
                <span className="tcard-label">GRADE</span>
                <p>{t.grade}</p>
              </div>
              <div className="tcard-info">
                <span className="tcard-label">COURS</span>
                <span className="badge-cours">{t.cours}</span>
              </div>
              <div className="tcard-info">
                <span className="tcard-label">SYLLABUS</span>
                <span className={`badge-syllabus badge-syllabus-${t.syllabus.type}`}>
                  ● {t.syllabus.label}
                </span>
              </div>
            </div>

            {/* FOOTER */}
            <div className="tcard-footer">
              <span className="tcard-statut">● Actif</span>
              <button className="btn-modifier">Modifier</button>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
      <TeacherModal show={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
}

export default Teachers;
