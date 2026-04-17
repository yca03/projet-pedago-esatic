
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";

import {
  FaThLarge,
  FaFileAlt,
  FaChartLine,
  FaBell,
  FaTimes,
  FaSignOutAlt,
  FaBuilding,
  FaCheckDouble,
  FaBars,
} from "react-icons/fa";

const navItems = [
  {
    section: "SUPERVISION",
    links: [
      { to: "/cfi/dashboard",      icon: <FaThLarge />,    label: "Tableau de bord" },
      { to: "/cfi/allup",          icon: <FaBuilding />,   label: "Toutes les UP"   },
      { to: "/cfi/syllabus",       icon: <FaFileAlt />,    label: "Syllabus"        },
      { to: "/cfi/progressions",   icon: <FaChartLine />,  label: "Progressions"    },
    ],
  },
  {
    section: "ACTIONS",
    links: [
      { to: "/cfi/validations",    icon: <FaCheckDouble />, label: "Validations CFI" },
      { to: "/cfi/notifications",  icon: <FaBell />,        label: "Notifications",  },
    ],
  },
];

function CFISidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>

      {/* Toggle */}
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={18} /> : <FaBars size={18} />}
      </div>

      {/* Logo */}
      {open && (
        <div className="logo">
          <img src={logo} alt="ESATIC Logo" />
        </div>
      )}

      {/* MENU */}
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

      {/* Déconnexion */}
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

export default CFISidebar;