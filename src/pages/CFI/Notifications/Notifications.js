import React, { useState } from "react";
import "./Notifications.css";
import { FaBell, FaClock } from "react-icons/fa";

const initNotifs = [
  { id: 1, message: <>Le syllabus <strong>INF301-ALGO</strong> est en attente de votre validation.</>,  temps: "il y a 35 min", tag: "ALRT-03", lu: false },
  { id: 2, message: <>La progression <strong>INF305-BDD</strong> a ete soumise par Dr. P. TOURE.</>,    temps: "il y a 2h",     tag: "ALRT-03", lu: false },
  { id: 3, message: <>Rappel : reunion UP Informatique dans <strong>3 jours</strong> (21/03/2026).</>,  temps: "il y a 4h",     tag: "ALRT-09", lu: false },
  { id: 4, message: <>Le syllabus <strong>MATH201</strong> a ete soumis pour validation CFI.</>,         temps: "il y a 1 jour",  tag: "ALRT-02", lu: true  },
  { id: 5, message: <>Le syllabus <strong>INF402-RES</strong> a ete valide par le DP.</>,               temps: "il y a 5 jours", tag: "ALRT-06", lu: true  },
];

function CFINotifications() {
  const [notifs, setNotifs] = useState(initNotifs);
  const nonLues = notifs.filter((n) => !n.lu).length;
  const toutLu  = () => setNotifs((p) => p.map((n) => ({ ...n, lu: true })));
  const marquer = (id) => setNotifs((p) => p.map((n) => n.id === id ? { ...n, lu: true } : n));

  return (
    <div className="cfin-page">
      <div className="cfin-header">
        <div>
          <h2>Notifications</h2>
          <p className="cfin-subtitle">Centre de notifications</p>
        </div>
        {nonLues > 0 && <button className="cfin-btn-tout-lu" onClick={toutLu}>Tout marquer comme lu</button>}
      </div>
      <div className="cfin-card">
        {nonLues > 0 && (
          <div className="cfin-badge-header">
            <FaBell className="cfin-bell" />
            <span>{nonLues} non lues</span>
          </div>
        )}
        <div className="cfin-list">
          {notifs.map((n) => (
            <div key={n.id} className={`cfin-item ${!n.lu ? "cfin-unread" : ""}`} onClick={() => marquer(n.id)}>
              <div className="cfin-dot-wrap">
                <span className={`cfin-dot ${!n.lu ? "cfin-dot-blue" : "cfin-dot-grey"}`} />
              </div>
              <div className="cfin-content">
                <p className="cfin-message">{n.message}</p>
                <p className="cfin-meta"><FaClock className="cfin-clock" />{n.temps} · <span className="cfin-tag">{n.tag}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CFINotifications;