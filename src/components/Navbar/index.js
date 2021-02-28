import React from 'react';
import './navbar.css';
import { Link, useLocation } from "react-router-dom";


function Navbar () {

  const location = useLocation();

  return (
  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">
          <Link to="/">
            Navbar
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
              Projects
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar;