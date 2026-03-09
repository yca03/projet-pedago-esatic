import React from "react";

import { FaChalkboardTeacher } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

function Dashboard(){

return(

<div>

<h2 className="mb-4">Dashboard / Analyse</h2>

<div className="row">

<div className="col-md-3">
<div className="card-box">
<div className="icon">
<FaChalkboardTeacher size={40}/>
</div>
<h4>Enseignants</h4>
<p>12</p>
</div>
</div>

<div className="col-md-3">
<div className="card-box">
<div className="icon">
<FaBook size={40}/>
</div>
<h4>Cours</h4>
<p>25</p>
</div>
</div>

<div className="col-md-3">
<div className="card-box">
<div className="icon">
<FaFileAlt size={40}/>
</div>
<h4>Syllabus</h4>
<p>15</p>
</div>
</div>

<div className="col-md-3">
<div className="card-box">
<div className="icon">
<FaUsers size={40}/>
</div>
<h4>Réunions</h4>
<p>4</p>
</div>
</div>

</div>

</div>

)

}

export default Dashboard