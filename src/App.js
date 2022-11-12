// Importation des Routes
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

// Importation du components Home
import Home from "./components/Home/Home";

// Importation du components Message
import Message from "./components/Message/Message";

// Importation du components Profile
import Profile from "./components/Profile/Profile";

// Importation du components Navbar
import Navbar from "./components/NavBar/Navbar";


// import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profil" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
