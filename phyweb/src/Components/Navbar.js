import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Quantamania
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/members" className="nav-link">
            Members
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
