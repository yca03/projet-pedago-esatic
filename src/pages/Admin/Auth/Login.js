import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../../assets/logo.webp";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = (e) => {
  e.preventDefault();

  if(email && password){

    // sauvegarder utilisateur
    localStorage.setItem("user", email);

    // redirection
    navigate("/dashboard");

  }else{
    alert("Veuillez remplir les champs");
  }
};

  return (
    <div className="login-container">
  <div className="login-box">

      {/* LEFT */}
      <div className="login-left">

         <div className="logo">
          <img src={logo} alt="ESATIC Logo" />
        </div>


        <h2>Gestion des Unités Pédagogiques</h2>
        <p>Plateforme centralisée pour le suivi des syllabus, progressions des cours, les reunions et validations.</p>

        {/* <div className="buttons">
          <button>Syllabus</button>
          <button>Progressions</button>
          <button>Validations</button>
          <button>Réunions</button>
        </div> */}

        {/* Logo */}
           
      
        
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <h2>Se connecter</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="prenom.nom@esatic.ci"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-login">
            Se connecter
          </button>

        </form>

      </div>

     </div>
</div>
  );
}

export default Login;