import React from "react";
import "./AllUp.css";

const upsData = [
  { id: 1, code: "INF",  nom: "UP Informatique",   rup: "Dr. K. JOHNSON",   enseignants: 12, cours: 18, taux: 78  },
  { id: 2, code: "RES",  nom: "UP Reseaux",         rup: "Prof. M. BAMBA",   enseignants: 8,  cours: 12, taux: 92  },
  { id: 3, code: "MATH", nom: "UP Mathematiques",   rup: "Dr. A. COULIBALY", enseignants: 6,  cours: 10, taux: 45  },
  { id: 4, code: "GES",  nom: "UP Gestion",         rup: "Prof. S. DIOMANDE",enseignants: 9,  cours: 14, taux: 88  },
  { id: 5, code: "LNG",  nom: "UP Langues",         rup: "Mme F. TRAORE",    enseignants: 5,  cours: 8,  taux: 60  },
];

function getTauxColor(t) {
  return t >= 80 ? "#16a34a" : t >= 60 ? "#f97316" : "#ef4444";
}

function CFIAllUp() {
  return (
    <div className="cfiup-page">
      <div className="cfiup-header">
        <h2>Toutes les UP</h2>
        <p className="cfiup-subtitle">ESATIC · {upsData.length} unites actives</p>
      </div>
      <div className="cfiup-grid">
        {upsData.map((up) => (
          <div className="cfiup-card" key={up.id}>
            <div className="cfiup-top">
              <span className="cfiup-code">{up.code}</span>
              <span className="cfiup-statut">● Active</span>
            </div>
            <h3 className="cfiup-nom">{up.nom}</h3>
            <p className="cfiup-rup">RUP : {up.rup}</p>
            <div className="cfiup-stats">
              <div className="cfiup-stat"><p className="cfiup-sv">{up.enseignants}</p><p className="cfiup-sl">Enseignants</p></div>
              <div className="cfiup-stat"><p className="cfiup-sv">{up.cours}</p><p className="cfiup-sl">Cours</p></div>
            </div>
            <div className="cfiup-taux">
              <p className="cfiup-tl">Taux de depot syllabus</p>
              <div className="cfiup-bar"><div className="cfiup-fill" style={{ width:`${up.taux}%`, background: getTauxColor(up.taux) }} /></div>
              <p className="cfiup-tv" style={{ color: getTauxColor(up.taux) }}>{up.taux}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CFIAllUp;