import React from 'react'
import "./styles/Navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {

  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo"><i className="fa-solid fa-icons" ></i>IFM</h1>

        {/* <i className="fa-solid fa-bars" onclick="hideMenue()" ></i> */}

        <ul className="nav-menu">
            <li className="left-nav">
                <Link  className="nav-link" to="/"><i className="fa-solid fa-house-chimney"></i>Home</Link>
                <Link  className="nav-link"  to="/About"><i className="fa-solid fa-circle-info"></i>About</Link>
                <Link  className="nav-link"  to="/Service"><i className="fa-solid fa-bag-shopping"></i>Services</Link>
                <Link  className="nav-link"  to="/Contact"><i className="fa-solid fa-address-book"></i>Contact</Link>
                <Link  className="nav-link"  to="/Signup"><i className="fa-solid fa-user-plus"></i>Signup</Link> 
            </li>
        </ul>
        {/* <i className="fa-solid fa-xmark" onclick="showMenue()" ></i> */}
        
    </nav>
  )
}

export default Navbar;
