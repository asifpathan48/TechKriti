import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Team<br /><span>TECHKRITI</span></h1>
      <hr/>
      {/* Faculty Coordinators Section */}
      <div className="coordinator-section">
        <h2>Faculty Coordinators</h2>
        
        <div className="team-section">
          <h3>Technical Events</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>Dr. Y. Bhaskar Lakshmi Mam</strong></p></div>
            <div className="coordinator-box"><p><strong>Dr. Srilakshmi Mam</strong></p></div>
          </div>
        </div>

        <div className="team-section">
          <h3>Cultural Events</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>Ch. Komali Mam</strong></p></div>
            <div className="coordinator-box"><p><strong>Ch. Santhoshi Mam</strong></p></div>
          </div>
        </div>

        <div className="team-section">
          <h3>Sports Events</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>T. Vishnu Sir</strong></p></div>
            <div className="coordinator-box"><p><strong>K. Pradeep Sir</strong></p></div>
          </div>
        </div>

        <div className="team-section">
          <h3>Stage Coordinators</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>Ch. Komali Mam</strong></p></div>
            <div className="coordinator-box"><p><strong>Ch. Santhoshi Mam</strong></p></div>
          </div>
        </div>
      </div>
      <hr/>
      {/* Student Coordinators Section */}
      <div className="coordinator-section">
        <h2>Student Coordinators</h2>

        <div className="team-section">
          <h3>Social Media</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>Prasad (Final Year - B)</strong></p></div>
            <div className="coordinator-box"><p><strong>K. Uday Kiran (Final Year - B)</strong></p></div>
            <div className="coordinator-box"><p><strong>Asif (Final Year)</strong></p></div>
            <div className="coordinator-box"><p><strong>Karthik (2nd Year - A)</strong></p></div>
          </div>
        </div>

        <div className="team-section">
          <h3>Sports Events</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>Ramani (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>Satvik (Final Year)</strong></p></div>
            <div className="coordinator-box"><p><strong>G. Lakshmi (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>P. Yamini (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>Trisha Jhanshi (2nd Year - A)</strong></p></div>
          </div>
        </div>

        <div className="team-section">
          <h3>Stage Committee</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>Sarvik (Final Year - B)</strong></p></div>
            <div className="coordinator-box"><p><strong>Upendra (Final Year - B)</strong></p></div>
            <div className="coordinator-box"><p><strong>K. Lokesh (Final Year - B)</strong></p></div>
            <div className="coordinator-box"><p><strong>M. Bhogesh (Final Year - B)</strong></p></div>
          </div>
        </div>

        <div className="team-section">
          <h3>Disciplinary Committee</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>P. Prudhvi (Final Year - B)</strong></p></div>
            <div className="coordinator-box"><p><strong>S. Mehtabh Ali (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>Upendra (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>Ch. Varsha (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>Meenakshi (Final Year - A)</strong></p></div>
          </div>
        </div>

        <div className="team-section">
          <h3>Culturals Coordinator</h3>
          <div className="coordinator-cards">
            <div className="coordinator-box"><p><strong>P. Kesav Varma (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>G. Chandini (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>L. Yashoda (Final Year - A)</strong></p></div>
            <div className="coordinator-box"><p><strong>Ch. Aravind (3rd Year)</strong></p></div>
            <div className="coordinator-box"><p><strong>T. Mounika (2nd Year - B)</strong></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;