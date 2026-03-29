import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";
import {
  FaThLarge,
  FaChalkboardTeacher,
  FaBook,
  FaUserShield,
  FaClipboardList,
  FaBell,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

const navItems = [
  {
    section: "GESTION",
    links: [
      { to: "/dashboard",    icon: <FaThLarge />,          label: "Tableau de bord" },
      { to: "/enseignants",  icon: <FaChalkboardTeacher />, label: "Enseignants" },
      { to: "/cours",        icon: <FaBook />,              label: "Cours" },
      { to: "/comptes",      icon: <FaUserShield />,        label: "Comptes" },
    ],
  },
  {
    section: "SYSTÈME",
    links: [
      { to: "/journaux",      icon: <FaClipboardList />, label: "Journaux" },
      { to: "/notifications", icon: <FaBell />,          label: "Notifications" },
    ],
  },
];

function Sidebar() {
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

      {/* NAV */}
      <ul>
        {navItems.map((group) => (
          <React.Fragment key={group.section}>

            {open && <p className="sidebar-title">{group.section}</p>}

            {group.links.map((item) => (
              <li key={item.to} className={isActive(item.to) ? "active" : ""}>
                <Link to={item.to}>
                  <span className="nav-icon">{item.icon}</span>
                  {open && <span className="nav-label">{item.label}</span>}
                </Link>
              </li>
            ))}

          </React.Fragment>
        ))}
      </ul>

      {/* Déconnexion */}
      {open && (
        <div className="sidebar-logout">
          <Link
            to="/login"
            onClick={() => localStorage.removeItem("user")}
          >
            <FaSignOutAlt />
            <span>Se déconnecter</span>
          </Link>
        </div>
      )}

    </div>
  );
}

export default Sidebar;