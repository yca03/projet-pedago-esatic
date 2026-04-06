import React from "react";
import { useNavigate } from "react-router-dom";
import "./TeacherDashboard.css";
import {
  FaBook,
  FaCheckCircle,
  FaHourglassHalf,
  FaTimes,
  FaExclamationTriangle,
} from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaBook />,          iconBg: "#fff7ed", iconColor: "#f97316", value: 4, label: "Cours attribues"  },
  { id: 2, icon: <FaCheckCircle />,   iconBg: "#f0fdf4", iconColor: "#16a34a", value: 2, label: "Syllabus valides" },
  { id: 3, icon: <FaHourglassHalf />, iconBg: "#fffbeb", iconColor: "#f59e0b", value: 1, label: "En attente"       },
  { id: 4, icon: <FaTimes />,         iconBg: "#fef2f2", iconColor: "#ef4444", value: 1, label: "Rejete"           },
];

const mesCours = [
  { id: 1, code: "INF301-ALGO", titre: "Algorithmique",    filiere: "Licence SIGL", syllabus: "Rejete",     sylType: "rejected", progression: "Non depose", progType: "pending", action: "corriger"  },
  { id: 2, code: "INF305-BDD",  titre: "Bases de donnees", filiere: "Licence MBDS", syllabus: "Att. CFI",   sylType: "waiting",  progression: "Valide",     progType: "valid",   action: "voir"      },
  { id: 3, code: "INF402-RES",  titre: "Reseaux",          filiere: "Master SITW",  syllabus: "Valide",     sylType: "valid",    progression: "Valide",     progType: "valid",   action: "voir"      },
  { id: 4, code: "INF410-SEC",  titre: "Securite info",    filiere: "Master SITW",  syllabus: "Non soumis", sylType: "pending",  progression: "Non depose", progType: "pending", action: "soumettre" },
];

const badgeClass = {
  valid:    "tdash-badge-valid",
  rejected: "tdash-badge-rejected",
  waiting:  "tdash-badge-waiting",
  pending:  "tdash-badge-pending",
};

function TeacherDashboard() {
  const navigate  = useNavigate();
  // const userData  = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="tdash-page">

      {/* ALERTE REJET */}
      <div className="tdash-alert">
        <FaExclamationTriangle className="tdash-alert-icon" />
        <div className="tdash-alert-body">
          <p className="tdash-alert-title">Syllabus rejete – correction requise</p>
          <p className="tdash-alert-msg">
            INF301-ALGO : "Les modalites d evaluation sont incompletes."
          </p>
        </div>
        <button className="tdash-alert-btn" onClick={() => navigate("/teacher/syllabus")}>
          Corriger →
        </button>
      </div>

      {/* STATS */}
      <div className="tdash-stats">
        {stats.map((s) => (
          <div className="tdash-stat-card" key={s.id}>
            <div className="tdash-stat-icon" style={{ background: s.iconBg, color: s.iconColor }}>
              {s.icon}
            </div>
            <p className="tdash-stat-value">{s.value}</p>
            <p className="tdash-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* TABLEAU */}
      <div className="tdash-card">
        <div className="tdash-card-header">
          <div>
            <h3>Mes cours et documents</h3>
            <p className="tdash-card-subtitle">Statut des syllabus et progressions</p>
          </div>
        </div>

        <table className="tdash-table">
          <thead>
            <tr>
              <th>COURS</th>
              <th>FILIERE / NIVEAU</th>
              <th>SYLLABUS</th>
              <th>PROGRESSION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {mesCours.map((c) => (
              <tr key={c.id}>
                <td>
                  <span className="tdash-code">{c.code}</span>
                  <p className="tdash-cours-titre">{c.titre}</p>
                </td>
                <td>
                  <span className="tdash-filiere">{c.filiere}</span>
                </td>
                <td>
                  <span className={`tdash-badge ${badgeClass[c.sylType]}`}>
                    ● {c.syllabus}
                  </span>
                </td>
                <td>
                  <span className={`tdash-badge ${badgeClass[c.progType]}`}>
                    ● {c.progression}
                  </span>
                </td>
                <td>
                  {c.action === "corriger" && (
                    <button className="tdash-btn-corriger" onClick={() => navigate("/teacher/syllabus")}>
                      Corriger →
                    </button>
                  )}
                  {c.action === "voir" && (
                    <button className="tdash-btn-voir" onClick={() => navigate("/teacher/cours")}>
                      Voir
                    </button>
                  )}
                  {c.action === "soumettre" && (
                    <button className="tdash-btn-soumettre" onClick={() => navigate("/teacher/syllabus")}>
                      Soumettre
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default TeacherDashboard;