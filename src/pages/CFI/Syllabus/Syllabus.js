import React, { useState } from "react";
import "./Syllabus.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const initData = [
  { id: 1, code: "INF301-ALGO", enseignant: "Prof. KONE",  statut: "Rejete",    type: "rejected", date: "20/03" },
  { id: 2, code: "INF305-BDD",  enseignant: "Dr. TOURE",   statut: "Att. CFI",  type: "waiting",  date: "19/03" },
  { id: 3, code: "INF402-RES",  enseignant: "M. DIALLO",   statut: "Valide DP", type: "valid",    date: "10/03" },
  { id: 4, code: "INF410-SEC",  enseignant: "Prof. KONE",  statut: "Non depose",type: "pending",  date: "--"   },
];

const badgeClass = {
  valid:    "dp-syl-badge-valid",
  rejected: "dp-syl-badge-rejected",
  waiting:  "dp-syl-badge-waiting",
  pending:  "dp-syl-badge-pending",
};

function Syllabus() {
  const [data, setData] = useState(initData);

  const handleValider = (id) => {
    setData((prev) => prev.map((r) =>
      r.id === id ? { ...r, statut: "Valide DP", type: "valid" } : r
    ));
  };

  const handleRejeter = (id) => {
    setData((prev) => prev.map((r) =>
      r.id === id ? { ...r, statut: "Rejete", type: "rejected" } : r
    ));
  };

  return (
    <div className="dp-syl-page">
      <div className="dp-syl-header">
        <h2>Syllabus</h2>
        <p className="dp-syl-subtitle">Suivi des syllabus de l UP</p>
      </div>

      <div className="dp-syl-table-wrap">
        <table className="dp-syl-table">
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
                <td><span className="dp-syl-code">{r.code}</span></td>
                <td className="dp-syl-ens">{r.enseignant}</td>
                <td><span className={`dp-syl-badge ${badgeClass[r.type]}`}>● {r.statut}</span></td>
                <td className="dp-syl-date">{r.date}</td>
                <td>
                  <div className="dp-syl-actions">
                    {r.type !== "pending" && (
                      <>
                        <button className="dp-syl-btn-valider" onClick={() => handleValider(r.id)}>
                          <FaCheck />
                        </button>
                        <button className="dp-syl-btn-rejeter" onClick={() => handleRejeter(r.id)}>
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

export default Syllabus;