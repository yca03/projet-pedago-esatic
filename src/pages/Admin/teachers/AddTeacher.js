import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"; // importer Button si tu veux l'utiliser
import "./AddTeacher.css";

function AddTeacher() {
  const navigate = useNavigate(); // ⚠️ créer navigate

  return (
    <div className="add-teacher-page">
      <div className="card-form">
        <h2>+ Ajouter un enseignant</h2>
        <form>
          <div className="row">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />
          </div>
          <input type="email" placeholder="Email" />
          <div className="row">
            <select>
              <option>Grade académique</option>
              <option>Assistant</option>
              <option>Maître de conférences</option>
              <option>Professeur</option>
            </select>
            <input type="text" placeholder="Spécialité" />
          </div>
          <div className="form-footer">
            <Button 
              type="button" 
              variant="secondary" 
              onClick={() => navigate("/enseignants")} // redirige vers la liste
            >
              Retour
            </Button>
            <button type="submit" className="save">+ Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTeacher;