import React from "react";
import "./Reunions.css";
import { FaCalendarAlt } from "react-icons/fa";

const aVenir = [
  {
    id: 1,
    titre: "Reunion mensuelle – Syllabus",
    statut: "Planifiee",
    date: "Vendredi 21 mars 2026 · 10h00 – 12h00",
    description: "Revue des syllabus manquants, point sur les validations en attente, retours enseignants.",
    participants: [
      { initiales: "KJ", color: "#2563eb" },
      { initiales: "AK", color: "#16a34a" },
      { initiales: "PT", color: "#ea580c" },
      { initiales: "MD", color: "#7c3aed" },
    ],
    nbParticipants: 8,
  },
];

const passees = [
  {
    id: 1,
    titre: "Reunion de rentree 2025–2026",
    statut: "Tenue",
    date: "Lundi 3 mars 2026 · 09h00",
    description: "Compte rendu disponible · 3 difficultes identifiees",
  },
];

function Reunions() {
  return (
    <div className="reun-page">

      {/* HEADER */}
      <div className="reun-header">
        <h2>Reunions Pedagogiques</h2>
        <p className="reun-subtitle">Planning des reunions de l UP</p>
      </div>

      {/* DEUX COLONNES */}
      <div className="reun-grid">

        {/* A VENIR */}
        <div className="reun-col">
          <p className="reun-col-title">A VENIR</p>
          {aVenir.map((r) => (
            <div className="reun-card" key={r.id}>

              <div className="reun-card-top">
                <h3>{r.titre}</h3>
                <span className="reun-badge reun-badge-planifiee">● {r.statut}</span>
              </div>

              <p className="reun-date">
                <FaCalendarAlt className="reun-cal-icon" />
                {r.date}
              </p>

              <p className="reun-desc">{r.description}</p>

              <div className="reun-participants">
                <div className="reun-avatars">
                  {r.participants.map((p, i) => (
                    <div
                      key={i}
                      className="reun-avatar"
                      style={{ background: p.color, zIndex: r.participants.length - i }}
                    >
                      {p.initiales}
                    </div>
                  ))}
                </div>
                <span className="reun-nb">{r.nbParticipants} participants</span>
              </div>

              <button className="reun-btn-details">Voir les details →</button>

            </div>
          ))}
        </div>

        {/* PASSEES */}
        <div className="reun-col">
          <p className="reun-col-title">PASSEES</p>
          {passees.map((r) => (
            <div className="reun-card" key={r.id}>

              <div className="reun-card-top">
                <h3>{r.titre}</h3>
                <span className="reun-badge reun-badge-tenue">● {r.statut}</span>
              </div>

              <p className="reun-date">
                <FaCalendarAlt className="reun-cal-icon" />
                {r.date}
              </p>

              <p className="reun-desc">{r.description}</p>

              <button className="reun-btn-cr">Voir le compte rendu →</button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Reunions;