import React, { useState } from "react";
import "./Teachers.css";
import TeacherModal from "./TeacherModal";

const initialTeachersData = [
  {
    id: 1,
    initials: "AK",
    nom: "KONE",
    prenom: "Amara",
    email: "a.kone@esatic.ci",
    specialite: "Algorithmes & IA",
    grade: "Maitre conf.",
    cours: "3 cours",
    syllabus: { label: "2/3", type: "warning" },
    color: "#2563eb",
    photo: null,
  },
  {
    id: 2,
    initials: "PT",
    nom: "TOURE",
    prenom: "Pauline",
    email: "p.toure@esatic.ci",
    specialite: "Bases de donnees",
    grade: "Docteur",
    cours: "2 cours",
    syllabus: { label: "2/2", type: "valid" },
    color: "#16a34a",
    photo: null,
  },
  {
    id: 3,
    initials: "MD",
    nom: "DIALLO",
    prenom: "Moussa",
    email: "m.diallo@esatic.ci",
    specialite: "Reseaux",
    grade: "Assistant",
    cours: "4 cours",
    syllabus: { label: "1/4", type: "rejected" },
    color: "#ea580c",
    photo: null,
  },
];

function Teachers() {
  const [teachers, setTeachers] = useState(initialTeachersData);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [statut, setStatut] = useState("Tous statuts");
  const [editingTeacher, setEditingTeacher] = useState(null);

  const filtered = teachers.filter((t) =>
    `${t.nom} ${t.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddTeacher = () => {
    setEditingTeacher(null);
    setShowModal(true);
  };

  const handleEditTeacher = (teacher) => {
    setEditingTeacher(teacher);
    setShowModal(true);
  };

  const handleSaveTeacher = (formData) => {
    if (editingTeacher) {
      // Modification
      setTeachers((prev) =>
        prev.map((t) =>
          t.id === editingTeacher.id
            ? {
                ...t,
                nom: formData.nom,
                prenom: formData.prenom,
                email: formData.email,
                grade: formData.grade,
                specialite: formData.specialite,
                photo: formData.photoPreview || t.photo,
              }
            : t
        )
      );
    } else {
      // Ajout
      const newTeacher = {
        id: Math.max(...teachers.map((t) => t.id), 0) + 1,
        initials: `${formData.prenom[0]}${formData.nom[0]}`.toUpperCase(),
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        specialite: formData.specialite,
        grade: formData.grade,
        cours: "0 cours",
        syllabus: { label: "0/0", type: "valid" },
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        photo: formData.photoPreview,
      };
      setTeachers((prev) => [...prev, newTeacher]);
    }
    setShowModal(false);
  };

  return (
    <div className="teachers-page">

      {/* PAGE HEADER */}
      <div className="teachers-header">
        <div>
          <h2>Enseignants</h2>
          <p className="teachers-subtitle">UP Informatique</p>
        </div>
        <button className="btn-add" onClick={handleAddTeacher}>
          + Ajouter
        </button>
      </div>

      {/* FILTERS */}
      <div className="teachers-filters">
        <input
          placeholder="🔍 Rechercher un enseignant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={statut} onChange={(e) => setStatut(e.target.value)}>
          <option>Tous statuts</option>
          <option>Actif</option>
          <option>Inactif</option>
        </select>
      </div>

      {/* CARDS */}
      <div className="teachers-grid">
        {filtered.map((t) => (
          <div className="teacher-card" key={t.id}>

            {/* CARD HEADER */}
            <div className="tcard-header">
              <div className="tcard-avatar" style={{ background: t.color }}>
                {t.photo ? (
                  <img src={t.photo} alt={t.nom} className="tcard-avatar-img" />
                ) : (
                  t.initials
                )}
              </div>
              <div>
                <h4>{`${t.prenom} ${t.nom}`}</h4>
                <span className="tcard-email">{t.email}</span>
              </div>
            </div>

            {/* INFOS GRID */}
            <div className="tcard-grid">
              <div className="tcard-info">
                <span className="tcard-label">SPECIALITE</span>
                <p>{t.specialite}</p>
              </div>
              <div className="tcard-info">
                <span className="tcard-label">GRADE</span>
                <p>{t.grade}</p>
              </div>
              <div className="tcard-info">
                <span className="tcard-label">COURS</span>
                <span className="badge-cours">{t.cours}</span>
              </div>
              <div className="tcard-info">
                <span className="tcard-label">SYLLABUS</span>
                <span className={`badge-syllabus badge-syllabus-${t.syllabus.type}`}>
                  ● {t.syllabus.label}
                </span>
              </div>
            </div>

            {/* FOOTER */}
            <div className="tcard-footer">
              <span className="tcard-statut">● Actif</span>
              <button
                className="btn-modifier"
                onClick={() => handleEditTeacher(t)}
              >
                Modifier
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* MODAL */}
      <TeacherModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveTeacher}
        editingTeacher={editingTeacher}
      />

    </div>
  );
}

export default Teachers;
