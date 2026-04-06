import React from "react";
import { useNavigate } from "react-router-dom";
import "./CFIDashboard.css";
import {
  FaBuilding,
  FaChalkboardTeacher,
  FaBook,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaBuilding />,          iconBg: "#eff6ff", iconColor: "#6366f1", value: 6,  label: "Unites pedagogiques" },
  { id: 2, icon: <FaChalkboardTeacher />, iconBg: "#f0fdf4", iconColor: "#16a34a", value: 47, label: "Enseignants"          },
  { id: 3, icon: <FaBook />,              iconBg: "#fff7ed", iconColor: "#f97316", value: 84, label: "Cours total"          },
  { id: 4, icon: <FaCheckCircle />,       iconBg: "#fdf2f8", iconColor: "#ec4899", value: 3,  label: "Docs a valider"       },
];

const upsData = [
  { id: 1, nom: "UP Informatique",  taux: 78  },
  { id: 2, nom: "UP Reseaux",       taux: 92  },
  { id: 3, nom: "UP Mathematiques", taux: 45  },
  { id: 4, nom: "UP Gestion",       taux: 88  },
  { id: 5, nom: "UP Langues",       taux: 60  },
];

function getTauxColor(taux) {
  if (taux >= 80) return "#16a34a";
  if (taux >= 60) return "#f97316";
  return "#ef4444";
}

function CFIDashboard() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const prenom   = (userData.nom || "M. ASSI").split(" ").slice(-1)[0];

  return (
    <div className="cfi-dash-page">

      {/* HEADER */}
      <div className="cfi-dash-header">
        <h2>👋 Bonjour, {prenom}</h2>
        <p className="cfi-dash-subtitle">
          Chef de la Formation Initiale · Toutes les UPs · ESATIC
        </p>
      </div>

      {/* ALERTE */}
      <div className="cfi-dash-alert">
        <span className="cfi-dash-alert-icon">ℹ</span>
        <div>
          <p className="cfi-dash-alert-title">
            3 documents en attente de votre validation (niveau 2)
          </p>
          <button
            className="cfi-dash-alert-btn"
            onClick={() => navigate("/cfi/validations")}
          >
            Traiter maintenant →
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="cfi-dash-stats">
        {stats.map((s) => (
          <div className="cfi-dash-stat-card" key={s.id}>
            <div
              className="cfi-dash-stat-icon"
              style={{ background: s.iconBg, color: s.iconColor }}
            >
              {s.icon}
            </div>
            <p className="cfi-dash-stat-value">{s.value}</p>
            <p className="cfi-dash-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* TAUX DE DEPOT */}
      <div className="cfi-dash-card">
        <div className="cfi-dash-card-header">
          <h3>Taux de depot par Unite Pedagogique</h3>
          <p className="cfi-dash-card-subtitle">Syllabus deposes sur total des cours</p>
        </div>

        <div className="cfi-dash-ups">
          {upsData.map((up) => (
            <div className="cfi-dash-up-row" key={up.id}>
              <span className="cfi-dash-up-nom">{up.nom}</span>
              <div className="cfi-dash-up-bar">
                <div
                  className="cfi-dash-up-fill"
                  style={{ width: `${up.taux}%`, background: getTauxColor(up.taux) }}
                />
              </div>
              <span
                className="cfi-dash-up-taux"
                style={{ color: getTauxColor(up.taux) }}
              >
                {up.taux}%
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default CFIDashboard;