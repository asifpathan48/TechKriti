import React from "react";
import "./Gallery.css";

// Import images manually
import img1 from "../assets/coordinators.jpg";
import img2 from "../assets/final-years-pic.jpg";
import galleryIcon from "../assets/gallery-icon.png"; // Ensure you have an actual icon

const Gallery = () => {
  const images = [img1, img2]; // Add more images here

  return (
    <div className="gallery-container">
      <h1 className="main-heading">TechKriti 2K25 Memories </h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-img" />
        ))}
      </div>

      {/* Floating Gallery Icon */}
      <div className="gallery-icon">
        <img src={galleryIcon} alt="Gallery Icon" />
      </div>
    </div>
  );
};

export default Gallery;
