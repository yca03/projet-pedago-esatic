import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./AddTeacher.css";

function AddTeacher() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    grade: "",
    specialite: "",
    photo: null,
    photoPreview: null,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez envoyer les données au serveur
    console.log("Données à enregistrer:", formData);
    navigate("/enseignants");
  };

  return (
    <div className="add-teacher-page">
      <div className="card-form">
        <h2>+ Ajouter un enseignant</h2>
        
        {/* PHOTO SECTION */}
        <div className="form-photo-section">
          <div className="form-photo-container">
            {formData.photoPreview ? (
              <img src={formData.photoPreview} alt="Aperçu" className="form-photo-preview" />
            ) : (
              <div className="form-photo-placeholder">
                <span>📷</span>
              </div>
            )}
          </div>
          <label className="form-photo-label">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              style={{ display: "none" }}
            />
            <span className="form-photo-btn">Changer la photo</span>
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              placeholder="Nom"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Prénom"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="row">
            <select
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
              required
            >
              <option value="">Grade académique</option>
              <option value="Assistant">Assistant</option>
              <option value="Maitre de conférences">Maitre de conférences</option>
              <option value="Professeur">Professeur</option>
              <option value="Docteur">Docteur</option>
            </select>
            <input
              type="text"
              placeholder="Spécialité"
              name="specialite"
              value={formData.specialite}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-footer">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate("/enseignants")}
            >
              Retour
            </Button>
            <button type="submit" className="save">
              + Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTeacher;
