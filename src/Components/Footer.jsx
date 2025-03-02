import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Footer.css"; // Import CSS file
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle link clicks & scroll to top
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the selected path
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Made with Love Section */}
        <div className="footer-text">
          <p>Made with ❤️ by <span className="team-name">TEAM TECHKRITI</span></p>
        </div>

        {/* Instagram Handle */}
        <div className="social-media">
          <a href="https://www.instagram.com/t_ec_hkriti/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="instagram-icon" />@t_ec_hkriti
          </a>
          <a href="https://www.instagram.com/baba_clg_antaru_ra_baabuuu?igsh=dnd3OGQzbHRvdjE5" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="instagram-icon" />@baba_clg_antaru_ra_baabuuu
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <ul>
            <li><button onClick={() => handleNavigation("/about")}>About</button></li>
            <li><button onClick={() => handleNavigation("/technicalevents")}>Technical Events</button></li>
            <li><button onClick={() => handleNavigation("/culturalevents")}>Cultural Events</button></li>
            <li><button onClick={() => handleNavigation("/sports")}>Sports</button></li>
            <li><button onClick={() => handleNavigation("/contact")}>Contact</button></li>
            <li><button onClick={() => handleNavigation("/feedback")}>Feedback</button></li>
            <li><button onClick={() => handleNavigation("/sponsors")}>Sponsors</button></li>
            <li><button onClick={() => handleNavigation("/album")}>Album</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
