import React from "react";
import CFISidebar from "../components/CFI/Sidebar";
import CFINavbar  from "../components/CFI/Navbar";

function CFILayout({ children }) {
  return (
    <div className="app">
      <CFISidebar />
      <div className="main">
        <CFINavbar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CFILayout;