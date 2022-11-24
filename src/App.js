// Importation des Routes
import { Routes, Route } from "react-router-dom";
// Importation du composant Home
import Home from "./pages/Home";
// Importation du composant SignUp
import Signup from "./pages/SignUp";
// Importation du components Navbar
import Error404 from "./pages/Error404";
// Importation du components Dashboard
import Dashboard from "./pages/Dashboard";

import Profile from "./pages/Profile";
import Messages from "./pages/Messages";

import { ProtectedRoute } from "./pages/ProtectedRoute";

import "./css/app.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Messages />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
