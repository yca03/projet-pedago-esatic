import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { FaChalkboardTeacher, FaBook, FaFileAlt, FaChartLine, FaUsers, FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>

      {/* Bouton pour ouvrir/fermer */}
      <div className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={20}/> : <FaBars size={20}/>}
      </div>

      {/* Logo */}
            {open && (
        <div className="logo">
            <img src={logo} alt="ESATIC Logo" />
        </div>
        )}

      <ul>
        <li>
          <Link to="/">
            <FaChartLine/> {open && "Dashboard"}
          </Link>
        </li>

        <li>
          <Link to="/enseignants">
            <FaChalkboardTeacher/> {open && "Enseignants"}
          </Link>
        </li>

        <li>
          <Link to="/cours">
            <FaBook/> {open && "Cours"}
          </Link>
        </li>

        <li>
          <Link to="/syllabus">
            <FaFileAlt/> {open && "Syllabus"}
          </Link>
        </li>

        <li>
          <Link to="/progression">
            <FaChartLine/> {open && "Progression"}
          </Link>
        </li>

        <li>
          <Link to="/reunions">
            <FaUsers/> {open && "Réunions"}
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;