import React from "react";
import { useNavigate } from "react-router-dom";
import "./DPDashboard.css";
import {
  FaCheckDouble,
  FaChalkboardTeacher,
  FaBook,
  FaTimesCircle,
} from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaCheckDouble />,       iconBg: "#f0fdf4", iconColor: "#16a34a", value: 12, label: "Validations finales"   },
  { id: 2, icon: <FaChalkboardTeacher />, iconBg: "#eff6ff", iconColor: "#2563eb", value: 47, label: "Enseignants actifs"    },
  { id: 3, icon: <FaBook />,              iconBg: "#fff7ed", iconColor: "#f97316", value: 84, label: "Cours au total"        },
  { id: 4, icon: <FaTimesCircle />,       iconBg: "#fef2f2", iconColor: "#ef4444", value: 3,  label: "Syllabus rejetes"      },
];

const validations = [
  { id: 1, code: "INF301-ALGO", enseignant: "Prof. KONE",  statut: "Att. DP",  type: "waiting" },
  { id: 2, code: "INF305-BDD",  enseignant: "Dr. TOURE",   statut: "Att. DP",  type: "waiting" },
  { id: 3, code: "INF402-RES",  enseignant: "M. DIALLO",   statut: "Valide",   type: "valid"   },
];

const badgeClass = {
  valid:   "dp-badge-valid",
  waiting: "dp-badge-waiting",
  rejected:"dp-badge-rejected",
};

function DPDashboard() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="dp-page">

      {/* HEADER */}
      <div className="dp-header">
        <h2>Tableau de bord</h2>
        <p className="dp-subtitle">Bienvenue, {userData.nom || "Directeur"}</p>
      </div>

      {/* STATS */}
      <div className="dp-stats">
        {stats.map((s) => (
          <div className="dp-stat-card" key={s.id}>
            <div className="dp-stat-icon" style={{ background: s.iconBg, color: s.iconColor }}>
              {s.icon}
            </div>
            <p className="dp-stat-value">{s.value}</p>
            <p className="dp-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      <div className="dp-bottom">

        {/* VALIDATIONS EN ATTENTE */}
        <div className="dp-card">
          <div className="dp-card-header">
            <div>
              <h3>Validations en attente</h3>
              <p className="dp-card-subtitle">Syllabus a valider definitivement</p>
            </div>
            <button onClick={() => navigate("/dp/validations")}>Voir tout</button>
          </div>

          <table className="dp-table">
            <thead>
              <tr>
                <th>CODE</th>
                <th>ENSEIGNANT</th>
                <th>STATUT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {validations.map((v) => (
                <tr key={v.id}>
                  <td><span className="dp-code">{v.code}</span></td>
                  <td className="dp-ens">{v.enseignant}</td>
                  <td>
                    <span className={`dp-badge ${badgeClass[v.type]}`}>
                      ● {v.statut}
                    </span>
                  </td>
                  <td>
                    {v.type === "waiting" && (
                      <button className="dp-btn-valider" onClick={() => navigate("/dp/validations")}>
                        Valider →
                      </button>
                    )}
                    {v.type === "valid" && (
                      <span className="dp-done">✓ Validé</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ACTIONS RAPIDES */}
        <div className="dp-card">
          <h3>Actions rapides</h3>
          <div className="dp-actions">
            <button className="dp-btn-primary" onClick={() => navigate("/dp/validations")}>
              ✓ Valider des syllabus
            </button>
            <button className="dp-btn-secondary" onClick={() => navigate("/dp/rapports")}>
              📊 Voir les rapports
            </button>
            <button className="dp-btn-secondary" onClick={() => navigate("/dp/reunions")}>
              👥 Planifier une reunion
            </button>
            <button className="dp-btn-secondary" onClick={() => navigate("/dp/enseignants")}>
              👨‍🏫 Voir les enseignants
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DPDashboard;