import React, { useState } from "react";
import "./CoursAttributions.css";
import CoursModal from "./CoursModal";

// donnees de base des cours
const coursData = [
  {
    id: 1,
    code: "INF301-ALGO",
    titre: "Algorithmique avancee",
    statut: "Actif",
    niveaux: ["Licence", "SIGL"],
    enseignant: { initials: "AK", nom: "Prof. KONE", color: "#2563eb" },
    syllabus: { label: "Rejeté", type: "rejected" },
    progression: { label: "Non déposé", type: "pending" },
  },
  {
    id: 2,
    code: "INF305-BDD",
    titre: "Bases de donnees avancees",
    statut: "Actif",
    niveaux: ["Licence", "MBDS"],
    enseignant: { initials: "PT", nom: "Dr. TOURE", color: "#16a34a" },
    syllabus: { label: "Att. CFI", type: "waiting" },
    progression: { label: "Valide", type: "valid" },
  },
  {
    id: 3,
    code: "INF402-RES",
    titre: "Reseaux informatiques",
    statut: "Actif",
    niveaux: ["Master", "SITW"],
    enseignant: { initials: "MD", nom: "M. DIALLO", color: "#ea580c" },
    syllabus: { label: "Valide", type: "valid" },
    progression: { label: "Valide", type: "valid" },
  },
  {
    id: 4,
    code: "INF410-SEC",
    titre: "Securite informatique",
    statut: "Actif",
    niveaux: ["Master", "SITW"],
    enseignant: { initials: "AK", nom: "Prof. KONE", color: "#2563eb" },
    syllabus: { label: "Valide", type: "valid" },
    progression: { label: "Att. CFI", type: "waiting" },
  },
];

function StatusBadge({ label, type }) {
  return <span className={`badge badge-${type}`}>● {label}</span>;
}

function CoursAttributions() {
  const [showModal, setShowModal] = useState(false);

  // liste des cours stockee localement
  const [cours, setCours] = useState(coursData);

  // le cours qu'on veut modifier
  const [coursAModifier, setCoursAModifier] = useState(null);

  // afficher ou cacher le modal de modification
  const [showEditModal, setShowEditModal] = useState(false);

  // les champs du formulaire
  const [formData, setFormData] = useState({
    titre: "",
    code: "",
    statut: "",
    niveau: "",
    filiere: "",
    enseignant: "",
  });

  // message de confirmation
  const [message, setMessage] = useState("");

  // ouvrir le modal avec les infos du cours selectionne
  const ouvrirModification = (c) => {
    setCoursAModifier(c);
    setFormData({
      titre: c.titre,
      code: c.code,
      statut: c.statut,
      niveau: c.niveaux[0] || "",
      filiere: c.niveaux[1] || "",
      enseignant: c.enseignant.nom,
    });
    setMessage("");
    setShowEditModal(true);
  };

  // mettre a jour le formulaire quand on tape
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // enregistrer les modifications localement
  const enregistrer = () => {
    if (!formData.titre || !formData.code) {
      setMessage("⚠️ Veuillez remplir les champs obligatoires.");
      return;
    }

    // on met a jour la carte du cours directement dans la liste
    setCours(cours.map((c) =>
      c.id === coursAModifier.id
        ? {
            ...c,
            titre: formData.titre,
            code: formData.code,
            statut: formData.statut,
            niveaux: [formData.niveau, formData.filiere].filter(Boolean),
            enseignant: { ...c.enseignant, nom: formData.enseignant },
          }
        : c
    ));

    setMessage("✅ Modifications enregistrées !");

    // fermer le modal apres 1.5 secondes
    setTimeout(() => {
      setShowEditModal(false);
      setMessage("");
    }, 1500);
  };

  return (
    <div className="cours-page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <h2>Cours et Attributions</h2>
          <p className="page-subtitle">UP Informatique · {cours.length} cours actifs</p>
        </div>
        <button className="btn-new" onClick={() => setShowModal(true)}>
          + Nouveau cours
        </button>
      </div>

      {/* CARDS GRID */}
      <div className="cours-grid">
        {cours.map((c) => (
          <div className="cours-card" key={c.id}>

            {/* TOP ROW */}
            <div className="cours-card-top">
              <span className="cours-code">{c.code}</span>
              <span className="cours-statut">● {c.statut}</span>
            </div>

            {/* TITRE */}
            <h3 className="cours-titre">{c.titre}</h3>

            {/* NIVEAUX */}
            <div className="cours-niveaux">
              {c.niveaux.map((n) => (
                <span className="niveau-tag" key={n}>{n}</span>
              ))}
            </div>

            {/* ENSEIGNANT */}
            <div className="cours-enseignant">
              <div className="avatar-sm" style={{ background: c.enseignant.color }}>
                {c.enseignant.initials}
              </div>
              <span>{c.enseignant.nom}</span>
            </div>

            {/* SYLLABUS & PROGRESSION */}
            <div className="cours-meta">
              <div className="meta-col">
                <span className="meta-label">SYLLABUS</span>
                <StatusBadge {...c.syllabus} />
              </div>
              <div className="meta-col">
                <span className="meta-label">PROGRESSION</span>
                <StatusBadge {...c.progression} />
              </div>
            </div>

            {/* FOOTER ACTIONS */}
            <div className="cours-actions">
              <button className="btn-docs">Voir docs</button>
              {/* ouvrir le modal de modification */}
              <button className="btn-modifier" onClick={() => ouvrirModification(c)}>
                Modifier attr.
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL CREATION */}
      <CoursModal show={showModal} onClose={() => setShowModal(false)} />

      {/* MODAL MODIFICATION */}
      {showEditModal && coursAModifier && (
        <div className="cmodal-overlay" onClick={() => setShowEditModal(false)}>
          <div className="cmodal" onClick={(e) => e.stopPropagation()}>

            {/* HEADER */}
            <div className="cmodal-header">
              <h3>✏️ Modifier le cours</h3>
              <span className="cmodal-close" onClick={() => setShowEditModal(false)}>✖</span>
            </div>

            {/* BODY */}
            <div className="cmodal-body">

              <div className="cmodal-row">
                <div className="cmodal-field">
                  <label>Code du cours *</label>
                  <input
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="Ex: INF301-ALGO"
                  />
                </div>
                <div className="cmodal-field">
                  <label>Statut</label>
                  <select name="statut" value={formData.statut} onChange={handleChange}>
                    <option>Actif</option>
                    <option>Inactif</option>
                    <option>Archivé</option>
                  </select>
                </div>
              </div>

              <div className="cmodal-field">
                <label>Intitulé du cours *</label>
                <input
                  name="titre"
                  value={formData.titre}
                  onChange={handleChange}
                  placeholder="Ex: Algorithmique avancee"
                />
              </div>

              <div className="cmodal-row">
                <div className="cmodal-field">
                  <label>Niveau</label>
                  <select name="niveau" value={formData.niveau} onChange={handleChange}>
                    <option>Licence</option>
                    <option>Master</option>
                    <option>Doctorat</option>
                  </select>
                </div>
                <div className="cmodal-field">
                  <label>Filière</label>
                  <input
                    name="filiere"
                    value={formData.filiere}
                    onChange={handleChange}
                    placeholder="Ex: SIGL"
                  />
                </div>
              </div>

              <div className="cmodal-field">
                <label>Enseignant attribué</label>
                <select name="enseignant" value={formData.enseignant} onChange={handleChange}>
                  <option>Prof. KONE</option>
                  <option>Dr. TOURE</option>
                  <option>M. DIALLO</option>
                </select>
              </div>

              {/* message succes ou erreur */}
              {message && (
                <p style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: message.startsWith("✅") ? "#16a34a" : "#dc2626",
                  margin: 0
                }}>
                  {message}
                </p>
              )}

            </div>

            {/* FOOTER */}
            <div className="cmodal-footer">
              <button className="cmodal-cancel" onClick={() => setShowEditModal(false)}>
                Annuler
              </button>
              <button className="cmodal-save" onClick={enregistrer}>
                💾 Enregistrer
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default CoursAttributions;