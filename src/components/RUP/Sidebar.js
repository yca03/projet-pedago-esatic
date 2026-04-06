import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";
import {
  FaThLarge, FaChalkboardTeacher, FaBook,
  FaFileAlt, FaChartLine, FaCheckDouble,
  FaCalendarAlt, FaBell, FaBars, FaTimes, FaSignOutAlt,
} from "react-icons/fa";

const navItems = [
  {
    section: "MON UP",
    links: [
      { to: "/rup/dashboard",      icon: <FaThLarge />,          label: "Tableau de bord"  },
      { to: "/rup/enseignants",    icon: <FaChalkboardTeacher />, label: "Enseignants"  },
      { to: "/rup/cours",          icon: <FaBook />,             label: "Cours"  },
      { to: "/rup/syllabus",       icon: <FaFileAlt />,          label: "Syllabus"  },
      { to: "/rup/progressions",   icon: <FaChartLine />,        label: "Progressions"},
    ],
  },
  {
    section: "GESTION",
    links: [
      { to: "/rup/validations",    icon: <FaCheckDouble />,      label: "Validations"},
      { to: "/rup/reunions",       icon: <FaCalendarAlt />,      label: "Reunions"},
      { to: "/rup/notifications",  icon: <FaBell />,             label: "Notifications" },
    ],
  },
];

function RUPSidebar() {
  const [open, setOpen]  = useState(true);
  const location         = useLocation();
  const isActive         = (path) => location.pathname === path;
  const userData         = JSON.parse(localStorage.getItem("user") || "{}");

  const mots     = (userData.nom || "").split(" ").filter((m) => m.length > 1);
  const initiales = (
    (mots[mots.length - 2]?.[0] || "") +
    (mots[mots.length - 1]?.[0] || "")
  ).toUpperCase();

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>

      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={18} /> : <FaBars size={18} />}
      </div>

      {open && (
        <div className="logo">
          <img src={logo} alt="ESATIC Logo" />
        </div>
      )}

      <ul>
        {navItems.map((group) => (
          <React.Fragment key={group.section}>
            {open && <p className="sidebar-title">{group.section}</p>}
            {group.links.map((item) => (
              <li key={item.to} className={isActive(item.to) ? "active" : ""}>
                <Link to={item.to}>
                  <span className="nav-icon">{item.icon}</span>
                  {open && <span className="nav-label">{item.label}</span>}
                  {open && item.badge && (
                    <span className="nav-badge">{item.badge}</span>
                  )}
                </Link>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      {open && (
        <div className="sidebar-logout">
          <Link to="/login" onClick={() => localStorage.removeItem("user")}>
            <FaSignOutAlt />
            <span>Se déconnecter</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default RUPSidebar;