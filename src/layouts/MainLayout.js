import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

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