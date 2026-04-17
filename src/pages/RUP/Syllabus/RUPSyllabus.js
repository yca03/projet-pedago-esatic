import React, { useState } from "react";
import "./RUPSyllabus.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const initData = [
  { id:1, code:"INF301-ALGO", enseignant:"Prof. KONE",  statut:"Rejete",    type:"rejected", date:"20/03" },
  { id:2, code:"INF305-BDD",  enseignant:"Dr. TOURE",   statut:"Att. CFI",  type:"waiting",  date:"19/03" },
  { id:3, code:"INF402-RES",  enseignant:"M. DIALLO",   statut:"Valide DP", type:"valid",    date:"10/03" },
  { id:4, code:"INF410-SEC",  enseignant:"Prof. KONE",  statut:"Non depose",type:"pending",  date:"--"   },
];

const bClass = { valid:"rupsyl-valid", rejected:"rupsyl-rejected", waiting:"rupsyl-waiting", pending:"rupsyl-pending" };

function RUPSyllabus() {
  const [data, setData] = useState(initData);
  return (
    <div className="rupsyl-page">
      <div className="rupsyl-header"><h2>Syllabus</h2><p className="rupsyl-sub">Suivi des syllabus de l UP</p></div>
      <div className="rupsyl-table-wrap">
        <table className="rupsyl-table">
          <thead><tr><th>COURS</th><th>ENSEIGNANT</th><th>STATUT</th><th>DATE</th><th>ACTIONS</th></tr></thead>
          <tbody>
            {data.map((r) => (
              <tr key={r.id}>
                <td><span className="rupsyl-code">{r.code}</span></td>
                <td className="rupsyl-ens">{r.enseignant}</td>
                <td><span className={`rupsyl-badge ${bClass[r.type]}`}>● {r.statut}</span></td>
                <td className="rupsyl-date">{r.date}</td>
                <td>
                  {r.type !== "pending" && (
                    <div className="rupsyl-actions">
                      <button className="rupsyl-btn-v" onClick={() => setData((p) => p.map((x) => x.id===r.id ? {...x, statut:"Valide DP", type:"valid"} : x))}><FaCheck /></button>
                      <button className="rupsyl-btn-r" onClick={() => setData((p) => p.map((x) => x.id===r.id ? {...x, statut:"Rejete", type:"rejected"} : x))}><FaTimes /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default RUPSyllabus;