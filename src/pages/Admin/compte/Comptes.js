import React, { useState } from "react";
import "./Comptes.css";
import CompteModal from "./CompteModal";

const comptesData = [
  {
    id: 1,
    initials: "KJ",
    nom: "Dr. Kouassi JOHNSON",
    grade: "Docteur",
    email: "k.johnson@esatic.ci",
    role: "RUP",
    up: "UP Informatique",
    specialite: "Bases de donnees",
    statut: "Actif",
    color: "#2563eb",
  },
  {
    id: 2,
    initials: "AK",
    nom: "Prof. Amara KONE",
    grade: "Maitre de conferences",
    email: "a.kone@esatic.ci",
    role: "ENS",
    up: "UP Informatique",
    specialite: "Algorithmes & IA",
    statut: "Actif",
    color: "#2563eb",
  },
  {
    id: 3,
    initials: "PT",
    nom: "Dr. Pauline TOURE",
    grade: "Docteur",
    email: "p.toure@esatic.ci",
    role: "ENS",
    up: "UP Informatique",
    specialite: "Bases de donnees",
    statut: "Actif",
    color: "#2563eb",
  },
  {
    id: 4,
    initials: "MD",
    nom: "M. Moussa DIALLO",
    grade: "Assistant",
    email: "m.diallo@esatic.ci",
    role: "ENS",
    up: "UP Informatique",
    specialite: "Reseaux & Telecom",
    statut: "Actif",
    color: "#2563eb",
  },
  {
    id: 5,
    initials: "SA",
    nom: "Sys. Admin",
    grade: "Administrateur Systeme",
    email: "admin@esatic.ci",
    role: "ADM",
    up: "—",
    specialite: "—",
    statut: "Actif",
    color: "#475569",
  },
];

const roleColors = {
  RUP: { bg: "#dbeafe", color: "#2563eb" },
  ENS: { bg: "#e0f2fe", color: "#0284c7" },
  ADM: { bg: "#f3e8ff", color: "#7c3aed" },
  CFI: { bg: "#fef9c3", color: "#ca8a04" },
};

function Comptes() {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("Tous roles");
  const [statutFilter, setStatutFilter] = useState("Tous statuts");
  const [comptes, setComptes] = useState(comptesData);

  const filtered = comptes.filter((c) => {
    const matchSearch =
      c.nom.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = roleFilter === "Tous roles" || c.role === roleFilter;
    const matchStatut = statutFilter === "Tous statuts" || c.statut === statutFilter;
    return matchSearch && matchRole && matchStatut;
  });

  const handleDesactiver = (id) => {
    setComptes((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, statut: c.statut === "Actif" ? "Inactif" : "Actif" } : c
      )
    );
  };

  const handleSupprimer = (id) => {
    setComptes((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="comptes-page">

      {/* PAGE HEADER */}
      <div className="comptes-header">
        <div>
          <h2>Comptes Utilisateurs</h2>
          <p className="comptes-subtitle">Gestion des acces a la plateforme GUP</p>
        </div>
        <button className="btn-nouveau" onClick={() => setShowModal(true)}>
          + Nouveau compte
        </button>
      </div>

      {/* FILTERS BAR */}
      <div className="comptes-filters">
        <input
          placeholder="🔍 Rechercher nom, email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
          <option>Tous roles</option>
          <option>ENS</option>
          <option>RUP</option>
          <option>ADM</option>
          <option>CFI</option>
        </select>
        <select value={statutFilter} onChange={(e) => setStatutFilter(e.target.value)}>
          <option>Tous statuts</option>
          <option>Actif</option>
          <option>Inactif</option>
        </select>
        <span className="comptes-count">{filtered.length} comptes</span>
      </div>

      {/* TABLE */}
      <div className="comptes-table-wrap">
        <table className="comptes-table">
          <thead>
            <tr>
              <th>UTILISATEUR ↕</th>
              <th>EMAIL</th>
              <th>ROLE ↕</th>
              <th>UP / AFFECTATION</th>
              <th>SPECIALITE</th>
              <th>STATUT ↕</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>

                {/* UTILISATEUR */}
                <td>
                  <div className="user-cell">
                    <div className="user-avatar" style={{ background: c.color }}>
                      {c.initials}
                    </div>
                    <div>
                      <p className="user-nom">{c.nom}</p>
                      <p className="user-grade">{c.grade}</p>
                    </div>
                  </div>
                </td>

                {/* EMAIL */}
                <td>
                  <span className="user-email">{c.email}</span>
                </td>

                {/* ROLE */}
                <td>
                  <span
                    className="role-badge"
                    style={{
                      background: roleColors[c.role]?.bg || "#f1f5f9",
                      color: roleColors[c.role]?.color || "#475569",
                    }}
                  >
                    {c.role}
                  </span>
                </td>

                {/* UP */}
                <td className="td-up">{c.up}</td>

                {/* SPECIALITE */}
                <td className="td-spe">{c.specialite}</td>

                {/* STATUT */}
                <td>
                  <span className={`statut-badge ${c.statut === "Actif" ? "statut-actif" : "statut-inactif"}`}>
                    ● {c.statut}
                  </span>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="actions-cell">
                    <button className="btn-modifier">✎ Modifier</button>
                    <button
                      className={`btn-desactiver ${c.statut === "Inactif" ? "btn-reactiver" : ""}`}
                      onClick={() => handleDesactiver(c.id)}
                    >
                      {c.statut === "Actif" ? "Desactiver" : "Reactiver"}
                    </button>
                    <button className="btn-supprimer" onClick={() => handleSupprimer(c.id)}>
                      🗑
                    </button>
                  </div>
                </td>

              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="td-empty">
                  Aucun compte trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <CompteModal show={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
}

export default Comptes;
