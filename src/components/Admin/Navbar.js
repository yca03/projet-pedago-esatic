import React, { useState } from "react";
import { FaUserCircle, FaBell, FaEnvelope, FaSearch } from "react-icons/fa";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-top">

      {/* Partie gauche */}
      <div className="navbar-left">
        <h4 className="title-icon">Plateforme pédagogique ESATIC</h4>
      </div>

      {/* Barre de recherche */}
      <div className="navbar-search">
        <FaSearch className="search-icon"/>
        <input type="text" placeholder="Rechercher cours, enseignants..." />
      </div>

      {/* Partie droite */}
      <div className="navbar-right">

        {/* Messages */}
        <div className="nav-icon">
          <FaEnvelope size={20}/>
          <span className="badge">3</span>
        </div>

        {/* Notifications */}
        <div className="nav-icon">
          <FaBell size={20}/>
          <span className="badge">5</span>
        </div>

        {/* Menu utilisateur */}
        <div className="user-dropdown" onClick={() => setOpen(!open)}>
          <FaUserCircle size={25}/>
          <span>Chris Arnold</span>

          <div className={`dropdown-menu ${open ? "show" : ""}`}>
            <ul>
              <li>Profil</li>
              <li>Paramètres</li>
              <li className="logout">Déconnexion</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Navbar;