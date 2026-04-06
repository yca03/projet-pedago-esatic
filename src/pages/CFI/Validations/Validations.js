import React, { useState } from "react";
import "./Validations.css";

const initData = [
  { id: 1, document: "Syllabus v2",  code: "INF301-ALGO", up: "UP Informatique",  type: "Syllabus",    date: "19/03" },
  { id: 2, document: "Progression",  code: "INF305-BDD",  up: "UP Informatique",  type: "Progression", date: "18/03" },
  { id: 3, document: "Syllabus",     code: "MATH201",     up: "UP Mathematiques", type: "Syllabus",    date: "17/03" },
];

const typeClass = { Syllabus: "cfival-type-syl", Progression: "cfival-type-prog" };

function CFIValidations() {
  const [data, setData] = useState(initData);

  const handleValider = (id) => setData((p) => p.filter((r) => r.id !== id));
  const handleRejeter = (id) => setData((p) => p.filter((r) => r.id !== id));

  return (
    <div className="cfival-page">
      <div className="cfival-header">
        <h2>Validations CFI</h2>
        <p className="cfival-subtitle">Documents en attente de validation niveau 2</p>
      </div>
      <div className="cfival-table-wrap">
        <table className="cfival-table">
          <thead>
            <tr>
              <th>DOCUMENT</th><th>COURS</th><th>UP</th><th>TYPE</th><th>DATE</th><th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr><td colSpan={6} className="cfival-empty">✓ Aucun document en attente</td></tr>
            )}
            {data.map((r) => (
              <tr key={r.id}>
                <td className="cfival-doc">{r.document}</td>
                <td><span className="cfival-code">{r.code}</span></td>
                <td className="cfival-up">{r.up}</td>
                <td><span className={`cfival-type ${typeClass[r.type]}`}>{r.type}</span></td>
                <td className="cfival-date">{r.date}</td>
                <td>
                  <div className="cfival-actions">
                    <button className="cfival-btn-valider" onClick={() => handleValider(r.id)}>✓ Valider</button>
                    <button className="cfival-btn-rejeter" onClick={() => handleRejeter(r.id)}>✕ Rejeter</button>
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
export default CFIValidations;