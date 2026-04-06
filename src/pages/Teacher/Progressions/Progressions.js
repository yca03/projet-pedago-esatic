import React, { useState } from "react";
import "./Progressions.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const initData = [
  { id: 1, code: "INF301-ALGO", enseignant: "Prof. KONE",  statut: "Valide",     type: "valid",   date: "15/03" },
  { id: 2, code: "INF305-BDD",  enseignant: "Dr. TOURE",   statut: "Att. CFI",   type: "waiting", date: "17/03" },
  { id: 3, code: "INF402-RES",  enseignant: "M. DIALLO",   statut: "Valide",     type: "valid",   date: "12/03" },
  { id: 4, code: "INF410-SEC",  enseignant: "Prof. KONE",  statut: "Non depose", type: "pending", date: "--"    },
];

const badgeClass = {
  valid:   "prog-badge-valid",
  waiting: "prog-badge-waiting",
  pending: "prog-badge-pending",
};

function Progressions() {
  const [data, setData] = useState(initData);

  const handleValider = (id) => {
    setData((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, statut: "Valide", type: "valid", date: new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" }) } : r
      )
    );
  };

  const handleRejeter = (id) => {
    setData((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, statut: "Rejete", type: "rejected", date: "--" } : r
      )
    );
  };

  const handleDeposer = (id) => {
    setData((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, statut: "Att. CFI", type: "waiting", date: new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" }) } : r
      )
    );
  };

  return (
    <div className="prog-page">

      {/* HEADER */}
      <div className="prog-header">
        <h2>Progressions Pedagogiques</h2>
        <p className="prog-subtitle">Suivi de l avancement des cours</p>
      </div>

      {/* TABLE */}
      <div className="prog-table-wrap">
        <table className="prog-table">
          <thead>
            <tr>
              <th>COURS</th>
              <th>ENSEIGNANT</th>
              <th>STATUT</th>
              <th>DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => (
              <tr key={r.id}>

                {/* COURS */}
                <td>
                  <span className="prog-code">{r.code}</span>
                </td>

                {/* ENSEIGNANT */}
                <td className="prog-enseignant">{r.enseignant}</td>

                {/* STATUT */}
                <td>
                  <span className={`prog-badge ${badgeClass[r.type] || "prog-badge-pending"}`}>
                    ● {r.statut}
                  </span>
                </td>

                {/* DATE */}
                <td className="prog-date">{r.date}</td>

                {/* ACTIONS */}
                <td>
                  <div className="prog-actions">
                    {r.type === "pending" ? (
                      <button
                        className="prog-btn-deposer"
                        onClick={() => handleDeposer(r.id)}
                      >
                        Deposer →
                      </button>
                    ) : (
                      <>
                        <button
                          className="prog-btn-valider"
                          onClick={() => handleValider(r.id)}
                          title="Valider"
                        >
                          <FaCheck />
                        </button>
                        <button
                          className="prog-btn-rejeter"
                          onClick={() => handleRejeter(r.id)}
                          title="Rejeter"
                        >
                          <FaTimes />
                        </button>
                      </>
                    )}
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Progressions;