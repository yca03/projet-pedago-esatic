import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Layouts
import MainLayout    from "./layouts/MainLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import DPLayout      from "./layouts/DPLayout";
import CFILayout     from "./layouts/CFILayout";
import RUPLayout     from "./layouts/RUPLayout";

// Profile components
import EnseignantProfile from "./components/Enseignant/EnseignantProfile";
import AdminProfile from "./components/Admin/AdminProfile";

// ADMIN
import Dashboard         from "./pages/Admin/Dashboard";
import Login             from "./pages/Admin/Auth/Login";
import ListeTeachers     from "./pages/Admin/teachers/Teachers";
import CoursAttributions from "./pages/Admin/cours/CoursAttributions";
import Comptes           from "./pages/Admin/compte/Comptes";
import Notifications     from "./pages/Admin/notifications/Notifications";
import Journaux          from "./pages/Admin/journal/Journaux";

// TEACHER
import TeacherDashboard     from "./pages/Teacher/TeacherDashboard";
import TeacherAttributions  from "./pages/Teacher/Attributions/Attributions";
import TeacherSyllabus      from "./pages/Teacher/Syllabus/Syllabus";
import TeacherProgressions  from "./pages/Teacher/Progressions/Progressions";
import TeacherReunions      from "./pages/Teacher/Reunions/Reunions";
import TeacherNotifications from "./pages/Teacher/Notifications/Notifications";

// DP
import DPDashboard     from "./pages/DP/DPDashboard";
import DPAllUp         from "./pages/DP/AllUp/DPAllUp";
import DPSyllabus      from "./pages/DP/Syllabus/DPSyllabus";
import DPProgressions  from "./pages/DP/Progressions/DPProgressions";
import DPValidations   from "./pages/DP/Validations/DPValidations";
import DPNotifications from "./pages/DP/Notifications/DPNotifications";

// CFI
import CFIDashboard     from "./pages/CFI/CFIDashboard";
import CFIAllUp         from "./pages/CFI/AllUp/AllUp";
import CFIValidations   from "./pages/CFI/Validations/Validations";
import CFINotifications from "./pages/CFI/Notifications/Notifications";
import CFISyllabus      from "./pages/CFI/Syllabus/Syllabus";
import CFIProgressions  from "./pages/CFI/Progressions/Progressions";

// RUP
import RUPDashboard     from "./pages/RUP/RUPDashboard";
import RUPEnseignants   from "./pages/RUP/Enseignants/RUPEnseignants";
import RUPCours         from "./pages/RUP/Cours/RUPCours";
import RUPSyllabus      from "./pages/RUP/Syllabus/RUPSyllabus";
import RUPProgressions  from "./pages/RUP/Progressions/RUPProgressions";
import RUPValidations   from "./pages/RUP/Validations/RUPValidations";
import RUPReunions      from "./pages/RUP/Reunions/RUPReunions";
import RUPNotifications from "./pages/RUP/Notifications/RUPNotifications";

function App() {
  let userData = null;
  try {
    userData = JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    localStorage.removeItem("user");
  }

  const isAdmin   = userData?.role === "admin";
  const isTeacher = userData?.role === "teacher";
  const isDP      = userData?.role === "dp";
  const isCFI     = userData?.role === "cfi";
  const isRUP     = userData?.role === "rup";

  const AdminRoute   = ({ element }) => isAdmin   ? element : <Navigate to="/login" />;
  const TeacherRoute = ({ element }) => isTeacher ? element : <Navigate to="/login" />;
  const DPRoute      = ({ element }) => isDP      ? element : <Navigate to="/login" />;
  const CFIRoute     = ({ element }) => isCFI     ? element : <Navigate to="/login" />;
  const RUPRoute     = ({ element }) => isRUP     ? element : <Navigate to="/login" />;

  return (
    <Router>
      <Routes>
        <Route path="/"      element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN */}
        <Route path="/dashboard"     element={<AdminRoute element={<MainLayout><Dashboard /></MainLayout>} />} />
        <Route path="/enseignants"   element={<AdminRoute element={<MainLayout><ListeTeachers /></MainLayout>} />} />
        <Route path="/cours"         element={<AdminRoute element={<MainLayout><CoursAttributions /></MainLayout>} />} />
        <Route path="/comptes"       element={<AdminRoute element={<MainLayout><Comptes /></MainLayout>} />} />
        <Route path="/journaux"      element={<AdminRoute element={<MainLayout><Journaux /></MainLayout>} />} />
        <Route path="/notifications" element={<AdminRoute element={<MainLayout><Notifications /></MainLayout>} />} />

        {/* TEACHER */}
        <Route path="/Teacher/TeacherDashboard" element={<TeacherRoute element={<TeacherLayout><TeacherDashboard /></TeacherLayout>} />} />
        <Route path="/teacher/Attributions"     element={<TeacherRoute element={<TeacherLayout><TeacherAttributions /></TeacherLayout>} />} />
        <Route path="/teacher/Syllabus"         element={<TeacherRoute element={<TeacherLayout><TeacherSyllabus /></TeacherLayout>} />} />
        <Route path="/teacher/Progressions"     element={<TeacherRoute element={<TeacherLayout><TeacherProgressions /></TeacherLayout>} />} />
        <Route path="/teacher/Reunions"         element={<TeacherRoute element={<TeacherLayout><TeacherReunions /></TeacherLayout>} />} />
        <Route path="/teacher/Notifications"    element={<TeacherRoute element={<TeacherLayout><TeacherNotifications /></TeacherLayout>} />} />

        {/* DP */}
        <Route path="/dp/dashboard"     element={<DPRoute element={<DPLayout><DPDashboard /></DPLayout>} />} />
        <Route path="/dp/allUp"         element={<DPRoute element={<DPLayout><DPAllUp /></DPLayout>} />} />
        <Route path="/dp/syllabus"      element={<DPRoute element={<DPLayout><DPSyllabus /></DPLayout>} />} />
        <Route path="/dp/progressions"  element={<DPRoute element={<DPLayout><DPProgressions /></DPLayout>} />} />
        <Route path="/dp/validations"   element={<DPRoute element={<DPLayout><DPValidations /></DPLayout>} />} />
        <Route path="/dp/notifications" element={<DPRoute element={<DPLayout><DPNotifications /></DPLayout>} />} />

        {/* CFI */}
        <Route path="/cfi/dashboard"     element={<CFIRoute element={<CFILayout><CFIDashboard /></CFILayout>} />} />
        <Route path="/cfi/allup"         element={<CFIRoute element={<CFILayout><CFIAllUp /></CFILayout>} />} />
        <Route path="/cfi/validations"   element={<CFIRoute element={<CFILayout><CFIValidations /></CFILayout>} />} />
        <Route path="/cfi/notifications" element={<CFIRoute element={<CFILayout><CFINotifications /></CFILayout>} />} />
        <Route path="/cfi/progressions"  element={<CFIRoute element={<CFILayout><CFIProgressions /></CFILayout>} />} />
        <Route path="/cfi/syllabus"      element={<CFIRoute element={<CFILayout><CFISyllabus /></CFILayout>} />} />

        {/* RUP */}
        <Route path="/rup/dashboard"     element={<RUPRoute element={<RUPLayout><RUPDashboard /></RUPLayout>} />} />
        <Route path="/rup/enseignants"   element={<RUPRoute element={<RUPLayout><RUPEnseignants /></RUPLayout>} />} />
        <Route path="/rup/cours"         element={<RUPRoute element={<RUPLayout><RUPCours /></RUPLayout>} />} />
        <Route path="/rup/syllabus"      element={<RUPRoute element={<RUPLayout><RUPSyllabus /></RUPLayout>} />} />
        <Route path="/rup/progressions"  element={<RUPRoute element={<RUPLayout><RUPProgressions /></RUPLayout>} />} />
        <Route path="/rup/validations"   element={<RUPRoute element={<RUPLayout><RUPValidations /></RUPLayout>} />} />
        <Route path="/rup/reunions"      element={<RUPRoute element={<RUPLayout><RUPReunions /></RUPLayout>} />} />
        <Route path="/rup/notifications" element={<RUPRoute element={<RUPLayout><RUPNotifications /></RUPLayout>} />} />

        {/* PROFILS */}
        <Route path="/profile/enseignant" element={<TeacherRoute element={<TeacherLayout><EnseignantProfile /></TeacherLayout>} />} />
        <Route path="/profile/admin" element={<AdminRoute element={<MainLayout><AdminProfile /></MainLayout>} />} />

      </Routes>
    </Router>
  );
}

export default App;