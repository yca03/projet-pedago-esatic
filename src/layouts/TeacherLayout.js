import React from "react";
import TeacherSidebar from "../components/Teacher/Sidebar";   
import TeacherNavbar from "../components/Teacher/Navbar";     
function TeacherLayout({ children }) {
  return (
    <div className="app">
      <TeacherSidebar />
      <div className="main">
        <TeacherNavbar />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default TeacherLayout;