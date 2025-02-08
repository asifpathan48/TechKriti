import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Footer.css"; // Import CSS file

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

        {/* Quick Links */}
        <div className="footer-links">
          <ul>
            <li><button onClick={() => handleNavigation("/about")}>About</button></li>
            <li><button onClick={() => handleNavigation("/technicalevents")}>Technical Events</button></li>
            <li><button onClick={() => handleNavigation("/culturalevents")}>Cultural Events</button></li>
            <li><button onClick={() => handleNavigation("/sports")}>Sports</button></li>
            <li><button onClick={() => handleNavigation("/contact")}>Contact</button></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
