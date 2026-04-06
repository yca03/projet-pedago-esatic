import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";

import {
  FaThLarge,
  FaTasks,
  FaFileAlt,
  FaChartLine,
  FaBars,
  FaCalendarAlt, 
  FaBell,        
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

const navItems = [
  {
    section: "MON ESPACE",
    links: [
      {
        to: "/teacher/TeacherDashboard",
        icon: <FaThLarge />,
        label: "Tableau de bord",
      },
      {
        to: "/teacher/Attributions",
        icon: <FaTasks />,
        label: "Mes attributions",
      },
      {
        to: "/teacher/Syllabus",
        icon: <FaFileAlt />,
        label: "Mes Syllabus",
      },
       {
        to: "/teacher/Progressions",
        icon: <FaChartLine />,
        label: "Progression",
      },
    ],
  },
  {
    section: "SUIVI",
    links: [
     
      {
        to: "/teacher/Reunions",
        icon: <FaCalendarAlt />,
        label: "Réunion",
      },
      {
        to: "/teacher/Notifications",
        icon: <FaBell />,
        label: "Notifications",
      },
    ],
  },
];

function TeacherSidebar() {
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

            {open && (
              <p className="sidebar-title">{group.section}</p>
            )}

            {group.links.map((item) => (
              <li
                key={item.to}
                className={isActive(item.to) ? "active" : ""}
              >
                <Link to={item.to}>
                  <span className="nav-icon">{item.icon}</span>
                  {open && <span className="nav-label">{item.label}</span>}
                </Link>
              </li>
            ))}

          </React.Fragment>
        ))}
      </ul>

      {/* LOGOUT */}
      {open && (
        <div className="sidebar-logout">
          <Link
            to="/login"
            onClick={() => localStorage.clear()}
          >
            <FaSignOutAlt />
            <span>Se déconnecter</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TeacherSidebar;