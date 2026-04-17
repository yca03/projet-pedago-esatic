import React, { useState } from "react";
import "./DPNotifications.css";
import { FaBell, FaClock } from "react-icons/fa";

const initNotifs = [
  { id: 1, message: <>Le syllabus <strong>INF301-ALGO</strong> est en attente de votre validation.</>,  temps: "il y a 35 min", tag: "ALRT-03", lu: false },
  { id: 2, message: <>La progression <strong>INF305-BDD</strong> a ete soumise par Dr. P. TOURE.</>,    temps: "il y a 2h",     tag: "ALRT-03", lu: false },
  { id: 3, message: <>Rappel : reunion UP Informatique dans <strong>3 jours</strong> (21/03/2026).</>,  temps: "il y a 4h",     tag: "ALRT-09", lu: false },
  { id: 4, message: <>Le cours <strong>INF402-RES</strong> vous a ete attribue par le RUP.</>,           temps: "il y a 2 jours", tag: "Attribution", lu: true },
  { id: 5, message: <>Le syllabus <strong>INF402-RES</strong> a ete valide definitivement par le DP.</>, temps: "il y a 5 jours", tag: "ALRT-06", lu: true  },
];

function DPNotifications() {
  const [notifs, setNotifs] = useState(initNotifs);
  const nonLues = notifs.filter((n) => !n.lu).length;

  const toutMarquerLu = () => setNotifs((p) => p.map((n) => ({ ...n, lu: true })));
  const marquerLu     = (id) => setNotifs((p) => p.map((n) => n.id === id ? { ...n, lu: true } : n));

  return (
    <div className="dpn-page">
      <div className="dpn-header">
        <div>
          <h2>Notifications</h2>
          <p className="dpn-subtitle">Centre de notifications</p>
        </div>
        {nonLues > 0 && (
          <button className="dpn-btn-tout-lu" onClick={toutMarquerLu}>
            Tout marquer comme lu
          </button>
        )}
      </div>

      <div className="dpn-card">
        {nonLues > 0 && (
          <div className="dpn-badge-header">
            <FaBell className="dpn-bell-icon" />
            <span>{nonLues} non lues</span>
          </div>
        )}
        <div className="dpn-list">
          {notifs.map((n) => (
            <div key={n.id} className={`dpn-item ${!n.lu ? "dpn-unread" : ""}`} onClick={() => marquerLu(n.id)}>
              <div className="dpn-dot-wrap">
                <span className={`dpn-dot ${!n.lu ? "dpn-dot-blue" : "dpn-dot-grey"}`} />
              </div>
              <div className="dpn-content">
                <p className="dpn-message">{n.message}</p>
                <p className="dpn-meta">
                  <FaClock className="dpn-clock" />
                  {n.temps} · <span className="dpn-tag">{n.tag}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DPNotifications;