import React, { useState } from "react";
import "./Login.css";
import logo from "../../../assets/logo.webp";

function Login() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");

  const users = {
    "admin@esatic.ci":  { role: "admin",   nom: "Sys. Admin",              password: "admin123"  },
    "kone@esatic.ci":   { role: "teacher", nom: "Prof. Amara KONE",        password: "kone123"   },
    "dp@esatic.ci":     { role: "dp",      nom: "Directeur Pédagogique",   password: "dp123"     },
    "cfi@esatic.ci":    { role: "cfi",     nom: "M. Brice ASSI",           password: "cfi123"    },
    "rup@esatic.ci":    { role:"rup",     nom:"Prof. Amara KONE",      password:"rup123"    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const emailClean    = email.trim().toLowerCase();
    const passwordClean = password.trim();

    if (!emailClean || !passwordClean) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const user = users[emailClean];
    if (!user || user.password !== passwordClean) {
      setError("Email ou mot de passe incorrect.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      email: emailClean,
      role:  user.role,
      nom:   user.nom,
    }));

    switch (user.role) {
      case "admin":   window.location.href = "/dashboard";              break;
      case "teacher": window.location.href = "/Teacher/TeacherDashboard"; break;
      case "dp":      window.location.href = "/dp/dashboard";           break;
      case "cfi":     window.location.href = "/cfi/dashboard";          break;
      case "rup":     window.location.href = "/rup/dashboard";           break;
      default:        window.location.href = "/login";
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <div className="login-left">
          <div className="logo"><img src={logo} alt="ESATIC Logo" /></div>
          <h2>Gestion des Unités Pédagogiques</h2>
          <p>Plateforme centralisée pour le suivi des syllabus, progressions des cours, réunions et validations.</p>
        </div>

        <div className="login-right">
          <h2>Se connecter</h2>
          {error && <p className="login-error">⚠ {error}</p>}
          <form onSubmit={handleLogin}>
            <input type="email"    placeholder="prenom.nom@esatic.ci" value={email}    onChange={(e) => setEmail(e.target.value)}    />
            <input type="password" placeholder="Mot de passe"         value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="btn-login">Se connecter</button>
          </form>

          <div className="login-hint">
            <p><strong>Comptes de test :</strong></p>
            <table>
              <tbody>
                <tr><td>Admin</td>      <td><code>admin@esatic.ci</code></td>  <td><code>admin123</code></td></tr>
                <tr><td>Enseignant</td> <td><code>kone@esatic.ci</code></td>   <td><code>kone123</code></td></tr>
                <tr><td>DP</td>         <td><code>dp@esatic.ci</code></td>     <td><code>dp123</code></td></tr>
                <tr><td>CFI</td>        <td><code>cfi@esatic.ci</code></td>    <td><code>cfi123</code></td></tr>
                <tr><td>RUP</td>        <td><code>rup@esatic.ci</code></td>    <td><code>rup123</code></td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;