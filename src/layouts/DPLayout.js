import React from "react";
import DPSidebar from "../components/DP/Sidebar";
import DPNavbar from "../components/DP/Navbar";

function DPLayout({ children }) {
  return (
    <div className="app">
      <DPSidebar />
      <div className="main">
        <DPNavbar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DPLayout;