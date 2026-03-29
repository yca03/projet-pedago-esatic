import React, { useState } from "react";
import "./Notifications.css";
import { FaBell, FaClock } from "react-icons/fa";

const notifData = [
  {
    id: 1,
    message: (
      <>
        Le syllabus <strong>INF301-ALGO</strong> est en attente de votre validation.
      </>
    ),
    temps: "il y a 35 min",
    tag: "ALRT-03",
    lu: false,
  },
  {
    id: 2,
    message: (
      <>
        La progression <strong>INF305-BDD</strong> a ete soumise par Dr. P. TOURE.
      </>
    ),
    temps: "il y a 2h",
    tag: "ALRT-03",
    lu: false,
  },
  {
    id: 3,
    message: (
      <>
        Rappel : reunion UP Informatique dans <strong>3 jours</strong> (21/03/2026).
      </>
    ),
    temps: "il y a 4h",
    tag: "ALRT-09",
    lu: false,
  },
  {
    id: 4,
    message: (
      <>
        Le cours <strong>INF402-RES</strong> vous a ete attribue par le RUP.
      </>
    ),
    temps: "il y a 2 jours",
    tag: "Attribution",
    lu: true,
  },
  {
    id: 5,
    message: (
      <>
        Le syllabus <strong>INF402-RES</strong> a ete valide definitivement par le DP.
      </>
    ),
    temps: "il y a 5 jours",
    tag: "ALRT-06",
    lu: true,
  },
];

function Notifications() {
  const [notifs, setNotifs] = useState(notifData);

  const nonLues = notifs.filter((n) => !n.lu).length;

  const toutMarquerLu = () => {
    setNotifs((prev) => prev.map((n) => ({ ...n, lu: true })));
  };

  const marquerLu = (id) => {
    setNotifs((prev) =>
      prev.map((n) => (n.id === id ? { ...n, lu: true } : n))
    );
  };

  return (
    <div className="notif-page">

      {/* PAGE HEADER */}
      <div className="notif-header">
        <div>
          <h2>Notifications</h2>
          <p className="notif-subtitle">Centre de notifications</p>
        </div>
        {nonLues > 0 && (
          <button className="btn-tout-lu" onClick={toutMarquerLu}>
            Tout marquer comme lu
          </button>
        )}
      </div>

      {/* CARD */}
      <div className="notif-card">

        {/* BADGE non lues */}
        {nonLues > 0 && (
          <div className="notif-badge-header">
            <FaBell className="notif-bell-icon" />
            <span>{nonLues} non lues</span>
          </div>
        )}

        {/* LISTE */}
        <div className="notif-list">
          {notifs.map((n, index) => (
            <div
              key={n.id}
              className={`notif-item ${!n.lu ? "notif-unread" : ""}`}
              onClick={() => marquerLu(n.id)}
            >
              <div className="notif-dot-wrap">
                <span className={`notif-dot ${!n.lu ? "dot-blue" : "dot-grey"}`} />
              </div>

              <div className="notif-content">
                <p className="notif-message">{n.message}</p>
                <p className="notif-meta">
                  <FaClock className="notif-clock" />
                  {n.temps} · <span className="notif-tag">{n.tag}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Notifications;
