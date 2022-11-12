// Importation de react
import React from 'react'
// Imporation de Link de Router
import {Link} from "react-router-dom"


export default function Navbar() {
  return (
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Profil">Profil</Link>
    </nav>
  )
    
}
