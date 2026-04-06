import React from "react";
import { useNavigate } from "react-router-dom";
import "./RUPDashboard.css";
import { FaChalkboardTeacher, FaBook, FaExclamationTriangle } from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaChalkboardTeacher />, iconBg: "#eff6ff", iconColor: "#2563eb", value: 12,   label: "Enseignants",      bar: null   },
  { id: 2, icon: <FaBook />,              iconBg: "#f0fdf4", iconColor: "#16a34a", value: 18,   label: "Cours actifs",     bar: null   },
  { id: 3, icon: "📋",                   iconBg: "#fff7ed", iconColor: "#f97316", value: "77%", label: "Syllabus deposes", bar: 77     },
  { id: 4, icon: "📈",                   iconBg: "#fdf2f8", iconColor: "#ec4899", value: "61%", label: "Progressions",     bar: 61     },
];

const docsValider = [
  { id: 1, cours: "INF301", enseignant: "Prof. KONE",  type: "Syllabus",    typeClass: "rup-type-syl",  soumis: "il y a 2j" },
  { id: 2, cours: "INF305", enseignant: "Dr. TOURE",   type: "Progression", typeClass: "rup-type-prog", soumis: "il y a 1j" },
  { id: 3, cours: "INF402", enseignant: "M. DIALLO",   type: "Syllabus",    typeClass: "rup-type-syl",  soumis: "3h"        },
];

const participants = [
  { initiales: "KJ", color: "#2563eb" },
  { initiales: "AK", color: "#16a34a" },
  { initiales: "PT", color: "#ea580c" },
  { initiales: "MD", color: "#7c3aed" },
];

function RUPDashboard() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="rup-dash-page">

      {/* ALERTE */}
      <div className="rup-dash-alert">
        <FaExclamationTriangle className="rup-alert-icon" />
        <div>
          <p className="rup-alert-title">4 documents en attente de votre validation (niveau 1)</p>
          <button className="rup-alert-btn" onClick={() => navigate("/rup/validations")}>
            Traiter les validations →
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="rup-dash-stats">
        {stats.map((s) => (
          <div className="rup-stat-card" key={s.id}>
            <div className="rup-stat-icon" style={{ background: s.iconBg, color: s.iconColor }}>
              {typeof s.icon === "string" ? <span>{s.icon}</span> : s.icon}
            </div>
            <p className="rup-stat-value">{s.value}</p>
            <p className="rup-stat-label">{s.label}</p>
            {s.bar && (
              <div className="rup-stat-bar">
                <div className="rup-stat-fill" style={{ width: `${s.bar}%`, background: s.bar >= 80 ? "#16a34a" : "#ef4444" }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="rup-dash-bottom">

        {/* DOCS A VALIDER */}
        <div className="rup-dash-card">
          <div className="rup-card-head">
            <div>
              <h3>Documents a valider</h3>
              <p className="rup-card-sub">Syllabus et progressions soumis</p>
            </div>
            <span className="rup-count-badge">4</span>
          </div>

          <table className="rup-table">
            <thead>
              <tr>
                <th>COURS</th>
                <th>ENSEIGNANT</th>
                <th>TYPE</th>
                <th>SOUMIS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {docsValider.map((d) => (
                <tr key={d.id}>
                  <td><span className="rup-code">{d.cours}</span></td>
                  <td className="rup-ens">{d.enseignant}</td>
                  <td><span className={`rup-type ${d.typeClass}`}>{d.type}</span></td>
                  <td className="rup-soumis">{d.soumis}</td>
                  <td>
                    <button className="rup-btn-valider" onClick={() => navigate("/rup/validations")}>
                      Valider
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PROCHAINE REUNION */}
        <div className="rup-dash-card">
          <div className="rup-card-head">
            <div>
              <h3>Prochaine reunion</h3>
              <p className="rup-card-sub">UP Informatique</p>
            </div>
            <button className="rup-btn-planifier" onClick={() => navigate("/rup/reunions")}>
              + Planifier
            </button>
          </div>

          <div className="rup-reunion-card">
            <div className="rup-reunion-top">
              <h4>Reunion mensuelle – Syllabus</h4>
            </div>
            <p className="rup-reunion-date">📅 Vendredi 21 mars 2026 · 10h00</p>
            <div className="rup-reunion-participants">
              <div className="rup-avatars">
                {participants.map((p, i) => (
                  <div key={i} className="rup-avatar" style={{ background: p.color }}>
                    {p.initiales}
                  </div>
                ))}
              </div>
              <span className="rup-nb">8 participants</span>
            </div>
            <button className="rup-btn-details" onClick={() => navigate("/rup/reunions")}>
              Voir les details →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RUPDashboard;