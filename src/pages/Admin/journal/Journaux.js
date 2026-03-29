import React from "react";
import "./Journaux.css";

const logsData = [
  {
    id: 1,
    date: "2026-03-19 10:42",
    type: "VALIDATION",
    message: "Syllabus INF301 valide par k.johnson@esatic.ci",
  },
  {
    id: 2,
    date: "2026-03-19 09:15",
    type: "UPLOAD",
    message: "Progression INF305 deposee par a.kone@esatic.ci",
  },
  {
    id: 3,
    date: "2026-03-18 16:30",
    type: "REJET",
    message: "Syllabus INF402 rejete par b.assi@esatic.ci",
  },
  {
    id: 4,
    date: "2026-03-18 14:00",
    type: "AUTH",
    message: "Connexion l.ouattara@esatic.ci",
  },
  {
    id: 5,
    date: "2026-03-17 11:20",
    type: "CREATION",
    message: "Nouveau compte cree pour m.diallo@esatic.ci",
  },
  {
    id: 6,
    date: "2026-03-17 08:45",
    type: "ATTRIBUTION",
    message: "Cours INF402-RES attribue a m.diallo@esatic.ci par RUP",
  },
];

const typeColors = {
  VALIDATION: { color: "#7c3aed" },
  UPLOAD:     { color: "#7c3aed" },
  REJET:      { color: "#7c3aed" },
  AUTH:       { color: "#7c3aed" },
  CREATION:   { color: "#7c3aed" },
  ATTRIBUTION:{ color: "#7c3aed" },
};

function Journaux() {
  return (
    <div className="journaux-page">

      {/* PAGE HEADER */}
      <div className="journaux-header">
        <div>
          <h2>Journaux systeme</h2>
          <p className="journaux-subtitle">Historique des actions</p>
        </div>
      </div>

      {/* LOG CARD */}
      <div className="journaux-card">
        <div className="log-list">
          {logsData.map((log) => (
            <div className="log-line" key={log.id}>
              <span className="log-date">{log.date}</span>
              <span className="log-sep">|</span>
              <span
                className="log-type"
                style={{ color: typeColors[log.type]?.color || "#475569" }}
              >
                {log.type}
              </span>
              <span className="log-sep">|</span>
              <span className="log-message">{log.message}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Journaux;
