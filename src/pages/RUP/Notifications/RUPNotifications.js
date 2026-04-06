import React, { useState } from "react";
import "./RUPNotifications.css";
import { FaBell, FaClock } from "react-icons/fa";

const initNotifs = [
  {
    id: 1,
    message: <>Le syllabus <strong>INF301-ALGO</strong> est en attente de votre validation.</>,
    temps: "il y a 35 min",
    tag: "ALRT-03",
    lu: false,
  },
  {
    id: 2,
    message: <>La progression <strong>INF305-BDD</strong> a ete soumise par Dr. P. TOURE.</>,
    temps: "il y a 2h",
    tag: "ALRT-03",
    lu: false,
  },
  {
    id: 3,
    message: <>Rappel : reunion UP Informatique dans <strong>3 jours</strong> (21/03/2026).</>,
    temps: "il y a 4h",
    tag: "ALRT-09",
    lu: false,
  },
  {
    id: 4,
    message: <>Le cours <strong>INF402-RES</strong> vous a ete attribue par le RUP.</>,
    temps: "il y a 2 jours",
    tag: "Attribution",
    lu: true,
  },
  {
    id: 5,
    message: <>Le syllabus <strong>INF402-RES</strong> a ete valide definitivement par le DP.</>,
    temps: "il y a 5 jours",
    tag: "ALRT-06",
    lu: true,
  },
];

function RUPNotifications() {
  const [notifs, setNotifs] = useState(initNotifs);

  const nonLues = notifs.filter((n) => !n.lu).length;

  const toutMarquerLu = () =>
    setNotifs((prev) => prev.map((n) => ({ ...n, lu: true })));

  const marquerLu = (id) =>
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, lu: true } : n))
    );

  return (
    <div className="tn-page">

      {/* HEADER */}
      <div className="tn-header">
        <div>
          <h2>Notifications</h2>
          <p className="tn-subtitle">Centre de notifications</p>
        </div>
        {nonLues > 0 && (
          <button className="tn-btn-tout-lu" onClick={toutMarquerLu}>
            Tout marquer comme lu
          </button>
        )}
      </div>

      {/* CARD */}
      <div className="tn-card">

        {/* BADGE NON LUES */}
        {nonLues > 0 && (
          <div className="tn-badge-header">
            <FaBell className="tn-bell-icon" />
            <span>{nonLues} non lues</span>
          </div>
        )}

        {/* LISTE */}
        <div className="tn-list">
          {notifs.map((n) => (
            <div
              key={n.id}
              className={`tn-item ${!n.lu ? "tn-unread" : ""}`}
              onClick={() => marquerLu(n.id)}
            >
              <div className="tn-dot-wrap">
                <span className={`tn-dot ${!n.lu ? "tn-dot-blue" : "tn-dot-grey"}`} />
              </div>
              <div className="tn-content">
                <p className="tn-message">{n.message}</p>
                <p className="tn-meta">
                  <FaClock className="tn-clock" />
                  {n.temps} · <span className="tn-tag">{n.tag}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default RUPNotifications;