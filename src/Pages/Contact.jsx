import React from "react";
import "./Contact.css";
import dummyImage from "../assets/dummy.jpg";
import saiImage from "../assets/sai.jpeg";
import upendraImage from "../assets/upendra.jpg";
import sarvikImage from "../assets/sarvik.jpg";
import prasadImage from "../assets/prasad.jpeg";
import udayImage from "../assets/uday.jpg";
import asifImage from "../assets/asif.jpeg";
import mehatabImage from "../assets/mehatab.jpeg";
import logoImage from "../assets/asif.jpeg"; // Add logo image path here

// Contact Data
const contacts = [
  {
    category: "Event Coordinators",
    members: [
      { name: "Sai", image: saiImage, phone: "+91 7981996529" },
      { name: "Upendra", image: upendraImage, phone: "+91 7981274452" },
      { name: "Sarvik", image: sarvikImage, phone: "+91 9059017723" },
    ],
  },
  {
    category: "Student Coordinators",
    members: [
      { name: "Tharun", image: dummyImage, phone: "+91 7032471698" },
      { name: "Sonali", image: dummyImage, phone: "" }, // Removed phone number
      { name: "Aravind", image: dummyImage, phone: "+91 7893961433" },
    ],
  },
  {
    category: "Social Media Coordinators",
    members: [
      { name: "Prasad", image: prasadImage, phone: "+91 6301974338" },
      { name: "Uday Kiran", image: udayImage, phone: "+91 8317690919" },
    ],
  },
  {
    category: "Technical Coordinators",
    members: [
      { name: "Asif Pathan", image: asifImage, phone: "+91 6302152474" },
      { name: "Mehatab Ali", image: mehatabImage, phone: "+91 7702465731" },
      { name: "Yamini", image: dummyImage, phone: "" }, // Removed phone number
    ],
  },
  {
    category: "Discipline Coordinators",
    members: [
      { name: "Prudhvi", image: dummyImage, phone: "+91 6309803679" },
      { name: "Sagar", image: dummyImage, phone: "+91 7396123920" },
    ],
  },
];

const Contact = () => {
  return (
    <div className="contact-container">
      {/* First Section */}
      <div className="first-section">
        <img src={logoImage} alt="Logo" className="logo" />
        <h3>Asif Pathan</h3>
        <p className="developer-name">Technical Coordinator & Website Developer</p>
      </div>

      {/* Contact Sections */}
      {contacts.map((section, index) => (
        <div key={index} className="contact-section">
          <h2 className="section-title">{section.category}</h2>
          <div className="contact-grid">
            {section.members.map((member, idx) => (
              <div key={idx} className="contact-card">
                <img src={member.image} alt={member.name} />
                <h3 className="contact-name">{member.name}</h3>
                {/* Display Coordinator Category */}
                <p className="contact-category">{section.category}</p>
                {/* Show phone number only if it's available */}
                {member.phone && <p className="contact-number">📞 {member.phone}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
