import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";

// import ListeEnseignants from "./pages/enseignants/ListeEnseignants";
// import AjouterEnseignant from "./pages/enseignants/AjouterEnseignant";

// import ListeCours from "./pages/cours/ListeCours";
// import AjouterCours from "./pages/cours/AjouterCours";

// import ListeSyllabus from "./pages/syllabus/ListeSyllabus";

// import Progression from "./pages/progression/Progression";

// import ListeReunions from "./pages/reunions/ListeReunions";

function App(){

return(

<Router>

<MainLayout>

<Routes>

<Route path="/" element={<Dashboard/>}/>

{/* <Route path="/enseignants" element={<ListeEnseignants/>}/>
<Route path="/enseignants/ajouter" element={<AjouterEnseignant/>}/>

<Route path="/cours" element={<ListeCours/>}/>
<Route path="/cours/ajouter" element={<AjouterCours/>}/>

<Route path="/syllabus" element={<ListeSyllabus/>}/>

<Route path="/progression" element={<Progression/>}/>

<Route path="/reunions" element={<ListeReunions/>}/> */}

</Routes>

</MainLayout>

</Router>

)

}

export default App