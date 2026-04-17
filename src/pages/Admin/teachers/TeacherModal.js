import React, { useState, useEffect } from "react";
import "./TeacherModal.css";

function TeacherModal({ show, onClose, onSave, editingTeacher }) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    grade: "",
    specialite: "",
    photo: null,
    photoPreview: null,
  });

  useEffect(() => {
    if (editingTeacher) {
      setFormData({
        nom: editingTeacher.nom || "",
        prenom: editingTeacher.prenom || "",
        email: editingTeacher.email || "",
        grade: editingTeacher.grade || "",
        specialite: editingTeacher.specialite || "",
        photo: editingTeacher.photo || null,
        photoPreview: editingTeacher.photo || null,
      });
    } else {
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        grade: "",
        specialite: "",
        photo: null,
        photoPreview: null,
      });
    }
  }, [editingTeacher, show]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photo: file,
          photoPreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (onSave) {
      onSave(formData);
    }
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      nom: "",
      prenom: "",
      email: "",
      grade: "",
      specialite: "",
      photo: null,
      photoPreview: null,
    });
    onClose();
  };

  if (!show) return null;

  return (
    <div className="tmodal-overlay" onClick={handleClose}>
      <div className="tmodal" onClick={(e) => e.stopPropagation()}>
        {/* HEADER */}
        <div className="tmodal-header">
          <h3>{editingTeacher ? "Modifier l'enseignant" : "+ Ajouter un enseignant"}</h3>
          <span className="tmodal-close" onClick={handleClose}>
            ✖
          </span>
        </div>

        {/* BODY */}
        <div className="tmodal-body">
          {/* PHOTO UPLOAD */}
          <div className="tmodal-photo-section">
            <div className="tmodal-photo-container">
              {formData.photoPreview ? (
                <img src={formData.photoPreview} alt="Aperçu" className="tmodal-photo-preview" />
              ) : (
                <div className="tmodal-photo-placeholder">
                  <span>📷</span>
                </div>
              )}
            </div>
            <label className="tmodal-photo-label">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
              <span className="tmodal-photo-btn">Changer la photo</span>
            </label>
          </div>

          <div className="tmodal-row">
            <div className="tmodal-field">
              <label>Nom</label>
              <input
                placeholder="Ex: KONE"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
              />
            </div>
            <div className="tmodal-field">
              <label>Prénom</label>
              <input
                placeholder="Ex: Amara"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="tmodal-field">
            <label>Email</label>
            <input
              placeholder="Ex: a.kone@esatic.ci"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="tmodal-row">
            <div className="tmodal-field">
              <label>Grade académique</label>
              <select name="grade" value={formData.grade} onChange={handleInputChange}>
                <option value="">Sélectionner</option>
                <option value="Assistant">Assistant</option>
                <option value="Maitre de conférences">Maitre de conférences</option>
                <option value="Docteur">Docteur</option>
                <option value="Professeur">Professeur</option>
              </select>
            </div>
            <div className="tmodal-field">
              <label>Spécialité</label>
              <input
                placeholder="Ex: Algorithmes & IA"
                name="specialite"
                value={formData.specialite}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="tmodal-footer">
          <button className="tmodal-cancel" onClick={handleClose}>
            Annuler
          </button>
          <button className="tmodal-save" onClick={handleSubmit}>
            {editingTeacher ? "Mettre à jour" : "+ Enregistrer"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherModal;
