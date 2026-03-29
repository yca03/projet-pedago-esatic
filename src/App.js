import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Admin/Auth/Login";
import ListeTeachers from "./pages/Admin/teachers/Teachers"; 
import CoursAttributions from "./pages/Admin/cours/CoursAttributions";
import Comptes from "./pages/Admin/compte/Comptes";
import Notifications from "./pages/Admin/notifications/Notifications";
import Journaux from "./pages/Admin/journal/Journaux";




function App() {
  const isAuth = localStorage.getItem("user"); 

  return (
    <Router>
      <Routes>

        {/* redirection par défaut */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* login */}
        <Route path="/login" element={<Login />} />

        {/* dashboard */}
        <Route 
          path="/dashboard" 
          element={
            isAuth ? (
              <MainLayout>
                <Dashboard />
              </MainLayout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        {/* enseignants */}
        <Route 
          path="/enseignants" 
          element={
            isAuth ? (
              <MainLayout>
                <ListeTeachers />
              </MainLayout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />


         {/* ajouter un cour */}
        <Route 
          path="/cours" 
          element={
            isAuth ? (
              <MainLayout>
                <CoursAttributions />
              </MainLayout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />


        {/* ajouter un compte  */}
        <Route 
          path="/comptes" 
          element={
            isAuth ? (
              <MainLayout>
                <Comptes />
              </MainLayout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
         {/* ajouter un notify  */}
              <Route 
                path="/journaux" 
                element={
                  isAuth ? (
                    <MainLayout>
                      <Journaux />
                    </MainLayout>
                  ) : (
                    <Navigate to="/login" />
                  )
                } 
              />


        {/* ajouter un notify  */}
          <Route 
            path="/notifications" 
            element={
              isAuth ? (
                <MainLayout>
                  <Notifications />
                </MainLayout>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
      </Routes>

    </Router>
  );
}

export default App;