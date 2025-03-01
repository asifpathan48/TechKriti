import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import WebLogoNew from '../assets/techkriti.png';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={WebLogoNew} alt="college-logo" className="logo-img" />
        </Link>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
        <li><Link to="/sponsors" onClick={() => setIsMenuOpen(false)}>Sponsors</Link></li>
        <li><Link to="/technicalevents" onClick={() => setIsMenuOpen(false)}>Technical Events</Link></li>
        <li><Link to="/culturalevents" onClick={() => setIsMenuOpen(false)}>Cultural Events</Link></li>
        <li><Link to="/sports" onClick={() => setIsMenuOpen(false)}>Sports</Link></li>
        <li><Link to="/album" onClick={() => setIsMenuOpen(false)}>Album</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        {/* <li><Link to="/feedback" onClick={() => setIsMenuOpen(false)}>FeedBack</Link></li> */}
        
      </ul>
    </nav>
  );
};

export default Navbar;
