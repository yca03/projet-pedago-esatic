import React, { useState } from "react";
import "./DPValidations.css";

const initData = [
  { id: 1, document: "Syllabus v2", code: "INF301-ALGO", up: "UP Informatique", type: "Syllabus",    cfi: "19/03" },
  { id: 2, document: "Progression", code: "INF305-BDD",  up: "UP Informatique", type: "Progression", cfi: "18/03" },
  { id: 3, document: "Syllabus",    code: "MATH201",     up: "UP Mathematiques",type: "Syllabus",    cfi: "17/03" },
];

const typeClass = { Syllabus: "val-type-syllabus", Progression: "val-type-prog" };

function DPValidations() {
  const [data, setData] = useState(initData);

  const handleValider = (id) => setData((prev) => prev.filter((r) => r.id !== id));
  const handleRejeter = (id) => setData((prev) => prev.filter((r) => r.id !== id));

  return (
    <div className="val-page">
      <div className="val-header">
        <h2>Validations finales (DP)</h2>
        <p className="val-subtitle">Vous etes la derniere etape du circuit</p>
      </div>

      <div className="val-table-wrap">
        <table className="val-table">
          <thead>
            <tr>
              <th>DOCUMENT</th>
              <th>COURS</th>
              <th>UP</th>
              <th>TYPE</th>
              <th>CFI</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={6} className="val-empty">✓ Aucun document en attente de validation</td>
              </tr>
            )}
            {data.map((r) => (
              <tr key={r.id}>
                <td className="val-doc">{r.document}</td>
                <td><span className="val-code">{r.code}</span></td>
                <td className="val-up">{r.up}</td>
                <td><span className={`val-type ${typeClass[r.type]}`}>{r.type}</span></td>
                <td className="val-cfi">{r.cfi}</td>
                <td>
                  <div className="val-actions">
                    <button className="val-btn-valider" onClick={() => handleValider(r.id)}>✓ Valider</button>
                    <button className="val-btn-rejeter" onClick={() => handleRejeter(r.id)}>✕ Rejeter</button>
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

export default DPValidations;