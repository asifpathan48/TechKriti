import React from "react";
import "./Album.css";

// Import images manually
import img1 from "../assets/coordinators.jpg";
import img2 from "../assets/final-years-pic.jpg";

const Album = () => {
  const images = [img1, img2]; // Add more images here

  return (
    <div className="gallery-container">
      <h1 className="main-heading">TechKriti 2K25 Album</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-img" />
        ))}
      </div>
    </div>
  );
};

export default Album;
