// Importation de react
import React from 'react'
// Imporation de Link de Router
import { NavLink } from "react-router-dom"


export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink to="/home" className={({isActive}) => (isActive ? "activeLink" : null)}>Accueil</NavLink></li>
        <li><NavLink to="/profil" className={({isActive}) => (isActive ? "activeLink" : null)}>Profil</NavLink></li>
      </ul>
    </div>
  )
    
}
