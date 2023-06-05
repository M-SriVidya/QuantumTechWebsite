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
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Publications" className="nav-link">
            Publications
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Project" className="nav-link">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Members" className="nav-link">
            Members
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
