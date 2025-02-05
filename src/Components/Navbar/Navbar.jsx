import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container">
      {/* Header row: contains the logo and the toggle button */}
      <div className="nav-header">
        <Link to="/" className='nav-logo'> 
        <img src={Logo} alt="Logo" className="nav-logo" />
        </Link>
        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/home" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/events" onClick={() => setMenuOpen(false)}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={() => setMenuOpen(false)}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
