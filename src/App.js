// Importation des Routes
import { Routes, Route } from "react-router-dom";

// Importation du components Home
import Home from "./pages/Home";

// Importation du components Navbar
import Navbar from "./components/NavBar/Navbar";

// Importation du components Profile
import Profile from "./components/Profile/Profile";

// Importation du components Message
import Message from "./pages/message";

import "./css/app.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;
