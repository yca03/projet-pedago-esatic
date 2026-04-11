import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import {
  FaBuilding,
  FaChalkboardTeacher,
  FaBook,
  FaKey,
  FaPlus,
  FaNewspaper,
  FaCheckCircle,
  FaArrowUp,
  FaTimes,
  FaUserPlus,
} from "react-icons/fa";
import UPModal from "./UPModal"; // 👈 AJOUT

const stats = [
  {
    id: 1,
    icon: <FaBuilding />,
    iconBg: "#eff6ff",
    iconColor: "#6366f1",
    value: 6,
    label: "Unites pedagogiques",
    badge: null,
  },
  {
    id: 2,
    icon: <FaChalkboardTeacher />,
    iconBg: "#f0fdf4",
    iconColor: "#16a34a",
    value: 47,
    label: "Enseignants actifs",
    badge: "+5%",
  },
  {
    id: 3,
    icon: <FaBook />,
    iconBg: "#fff7ed",
    iconColor: "#f97316",
    value: 84,
    label: "Cours au total",
    badge: null,
  },
  {
    id: 4,
    icon: <FaKey />,
    iconBg: "#fdf2f8",
    iconColor: "#ec4899",
    value: 58,
    label: "Comptes actifs",
    badge: null,
  },
];

const activites = [
  {
    id: 1,
    icon: <FaCheckCircle />,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    titre: "Syllabus INF301 valide",
    auteur: "k.johnson",
    temps: "2j",
  },
  {
    id: 2,
    icon: <FaArrowUp />,
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    titre: "Progression INF305 deposee",
    auteur: "a.kone",
    temps: "2j",
  },
  {
    id: 3,
    icon: <FaTimes />,
    iconBg: "#fee2e2",
    iconColor: "#dc2626",
    titre: "Syllabus INF402 rejete",
    auteur: "b.assi",
    temps: "3j",
  },
  {
    id: 4,
    icon: <FaUserPlus />,
    iconBg: "#f1f5f9",
    iconColor: "#475569",
    titre: "Nouveau compte cree",
    auteur: "admin",
    temps: "5j",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  const [showUPModal, setShowUPModal] = useState(false); // 👈 AJOUT

  return (
    <div className="dashboard-page">

      {/* PAGE HEADER */}
      <div className="dashboard-header">
        <h2>Tableau de bord</h2>
        <p className="dashboard-subtitle">Vue d'ensemble de votre espace</p>
      </div>

      {/* STATS CARDS */}
      <div className="dashboard-stats">
        {stats.map((s) => (
          <div className="stat-card" key={s.id}>
            <div className="stat-top">
              <div
                className="stat-icon"
                style={{ background: s.iconBg, color: s.iconColor }}
              >
                {s.icon}
              </div>
              {s.badge && <span className="stat-badge">{s.badge}</span>}
            </div>
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="dashboard-bottom">

        {/* ACTIONS RAPIDES */}
        <div className="dashboard-actions">
          <h3>Actions rapides</h3>
          <p className="section-subtitle">Operations frequentes</p>

          <div className="actions-list">
            <button
              className="action-btn action-primary"
              onClick={() => navigate("/cours")}
            >
              <FaPlus /> + Creer un cours
            </button>

            <button
              className="action-btn action-secondary"
              onClick={() => navigate("/enseignants")}
            >
              <FaPlus /> + Ajouter un enseignant
            </button>

            {/* 👇 AJOUT : bouton Gérer les UPs */}
            <button
              className="action-btn action-up"
              onClick={() => setShowUPModal(true)}
            >
              <FaBuilding /> Gérer les Unités Pédagogiques
            </button>

            <button
              className="action-btn action-tertiary"
              onClick={() => navigate("/journaux")}
            >
              <FaNewspaper /> Voir les journaux
            </button>
          </div>
        </div>

        {/* ACTIVITE RECENTE */}
        <div className="dashboard-activite">
          <h3>Activite recente</h3>

          <div className="activite-list">
            {activites.map((a) => (
              <div className="activite-item" key={a.id}>
                <div
                  className="activite-icon"
                  style={{ background: a.iconBg, color: a.iconColor }}
                >
                  {a.icon}
                </div>
                <div className="activite-info">
                  <p className="activite-titre">{a.titre}</p>
                  <p className="activite-meta">
                    {a.auteur} · {a.temps}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 👇 AJOUT : Modal Unités Pédagogiques */}
      <UPModal show={showUPModal} onClose={() => setShowUPModal(false)} />

    </div>
  );
}

export default Dashboard;