import React from "react";
import RUPSidebar from "../components/RUP/Sidebar";
import RUPNavbar  from "../components/RUP/Navbar";

function RUPLayout({ children }) {
  return (
    <div className="app">
      <RUPSidebar />
      <div className="main">
        <RUPNavbar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default RUPLayout;