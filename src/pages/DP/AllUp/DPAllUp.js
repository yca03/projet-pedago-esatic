import React from "react";
import "./DPAllUp.css";

const upsData = [
  { id: 1, code: "INF", nom: "UP Informatique",   statut: "Active", rup: "Dr. K. JOHNSON",  enseignants: 12, cours: 18, taux: 78  },
  { id: 2, code: "RES", nom: "UP Reseaux",        statut: "Active", rup: "Prof. M. BAMBA",  enseignants: 8,  cours: 12, taux: 92  },
  { id: 3, code: "MATH",nom: "UP Mathematiques",  statut: "Active", rup: "Dr. A. COULIBALY",enseignants: 6,  cours: 10, taux: 45  },
  { id: 4, code: "GES", nom: "UP Gestion",        statut: "Active", rup: "Prof. S. DIOMANDE",enseignants: 9, cours: 14, taux: 88  },
  { id: 5, code: "LNG", nom: "UP Langues",        statut: "Active", rup: "Mme F. TRAORE",   enseignants: 5,  cours: 8,  taux: 60  },
];

function getTauxColor(taux) {
  if (taux >= 80) return "#16a34a";
  if (taux >= 60) return "#f97316";
  return "#ef4444";
}

function DPAllUp() {
  return (
    <div className="up-page">
      <div className="up-header">
        <h2>Unites Pedagogiques</h2>
        <p className="up-subtitle">ESATIC · {upsData.length} unites actives</p>
      </div>

      <div className="up-grid">
        {upsData.map((up) => (
          <div className="up-card" key={up.id}>

            <div className="up-card-top">
              <span className="up-code">{up.code}</span>
              <span className="up-statut">● {up.statut}</span>
            </div>

            <h3 className="up-nom">{up.nom}</h3>
            <p className="up-rup">RUP : {up.rup}</p>

            <div className="up-stats">
              <div className="up-stat">
                <p className="up-stat-value">{up.enseignants}</p>
                <p className="up-stat-label">Enseignants</p>
              </div>
              <div className="up-stat">
                <p className="up-stat-value">{up.cours}</p>
                <p className="up-stat-label">Cours</p>
              </div>
            </div>

            <div className="up-taux">
              <p className="up-taux-label">Taux de depot syllabus</p>
              <div className="up-progress-bar">
                <div
                  className="up-progress-fill"
                  style={{ width: `${up.taux}%`, background: getTauxColor(up.taux) }}
                />
              </div>
              <p className="up-taux-value" style={{ color: getTauxColor(up.taux) }}>
                {up.taux}%
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default DPAllUp;