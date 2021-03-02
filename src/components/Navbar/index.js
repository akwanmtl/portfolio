import React from 'react';
import './navbar.css';
import { Link, useLocation } from "react-router-dom"; 
import "bootstrap/js/src/collapse.js";
import logo from '../../assets/logo.png'

function Navbar () {

  const location = useLocation();

  return (
  
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand">
          <img src={logo} alt='Annie Kwan Initial' className='logo'/>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/portfolio/about" className={location.pathname === "/portfolio/about" ? "nav-link active" : "nav-link"}>
                About Me
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/portfolio/projects" className={location.pathname === "/portfolio/projects" ? "nav-link active" : "nav-link"}>
              Projects
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/portfolio/contact" className={location.pathname === "/portfolio/contact" ? "nav-link active" : "nav-link"}>
              Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar;