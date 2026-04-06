import React from "react";
import { useNavigate } from "react-router-dom";
import "./Attributions.css";

const coursData = [
  {
    id: 1,
    code: "INF301-ALGO",
    titre: "Algorithmique avancee",
    niveaux: ["Licence", "SIGL"],
    syllabus: { label: "Rejete",     type: "rejected" },
    progression: { label: "Non depose", type: "pending" },
    action: "ouvrir",
  },
  {
    id: 2,
    code: "INF305-BDD",
    titre: "Bases de donnees",
    niveaux: ["Licence", "MBDS"],
    syllabus: { label: "Att. CFI",   type: "waiting" },
    progression: { label: "Valide",  type: "valid" },
    action: "consulter",
  },
  {
    id: 3,
    code: "INF402-RES",
    titre: "Reseaux informatiques",
    niveaux: ["Master", "SITW"],
    syllabus: { label: "Valide",     type: "valid" },
    progression: { label: "Valide",  type: "valid" },
    action: "consulter",
  },
  {
    id: 4,
    code: "INF410-SEC",
    titre: "Securite informatique",
    niveaux: ["Master", "SIGL"],
    syllabus: { label: "Non soumis", type: "pending" },
    progression: { label: "Non depose", type: "pending" },
    action: "ouvrir",
  },
];

const badgeClass = {
  valid:    "mc-badge-valid",
  rejected: "mc-badge-rejected",
  waiting:  "mc-badge-waiting",
  pending:  "mc-badge-pending",
};

function StatusBadge({ label, type }) {
  return (
    <span className={`mc-badge ${badgeClass[type]}`}>● {label}</span>
  );
}

function MesAttributions() {
  const navigate = useNavigate();

  return (
    <div className="mc-page">

      {/* PAGE HEADER */}
      <div className="mc-header">
        <div>
          <h2>Mes cours attribues</h2>
          <p className="mc-subtitle">UP Informatique · {coursData.length} cours</p>
        </div>
      </div>

      {/* GRID */}
      <div className="mc-grid">
        {coursData.map((c) => (
          <div className="mc-card" key={c.id}>

            {/* TOP */}
            <div className="mc-card-top">
              <span className="mc-code">{c.code}</span>
              <StatusBadge {...c.syllabus} />
            </div>

            {/* TITRE */}
            <h3 className="mc-titre">{c.titre}</h3>

            {/* NIVEAUX */}
            <div className="mc-niveaux">
              {c.niveaux.map((n) => (
                <span className="mc-niveau-tag" key={n}>{n}</span>
              ))}
            </div>

            {/* SYLLABUS & PROGRESSION */}
            <div className="mc-meta">
              <div className="mc-meta-col">
                <span className="mc-meta-label">SYLLABUS</span>
                <StatusBadge {...c.syllabus} />
              </div>
              <div className="mc-meta-col">
                <span className="mc-meta-label">PROGRESSION</span>
                <StatusBadge {...c.progression} />
              </div>
            </div>

            {/* ACTION */}
            <div className="mc-footer">
              {c.action === "ouvrir" && (
                <button
                  className="mc-btn-ouvrir"
                  onClick={() => navigate("/teacher/syllabus")}
                >
                  Ouvrir →
                </button>
              )}
              {c.action === "consulter" && (
                <button className="mc-btn-consulter">
                  Consulter
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default MesAttributions;