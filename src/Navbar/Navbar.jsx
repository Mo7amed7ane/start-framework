import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <nav className="navbar navbar-expand-sm fixed-top mb-5 text-white"  style={{ backgroundColor : '#2c3e50' } } >
    <div className="container" >
        <NavLink className="navbar-brand text-bold" to="/home">START FRAMEWORK </NavLink>
        <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link " to="home" aria-current="page" >Home
                        <span className="visually-hidden">(current)</span></NavLink >
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="about">About</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="contact">Contact</NavLink>
                </li>
            
            
            </ul>
         
        </div>
    </div>
   </nav>
   
  )
}
