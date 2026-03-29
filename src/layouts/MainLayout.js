import React from "react";
import Sidebar from "../components/Admin/Sidebar";
import Navbar from "../components/Admin/Navbar";

function MainLayout({children}){

return(

<div className="app">

<Sidebar/>

<div className="main">

<Navbar/>

<div className="content">

{children}

</div>

</div>

</div>

)

}

export default MainLayout