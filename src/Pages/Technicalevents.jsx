import React, { useState } from "react";
import "./TechnicalEvents.css";
import QuizImage from "../assets/quiz-image.jpg";
import PaperPresentation from "../assets/paper-presentation.jpg";
import PosterPresentation from "../assets/poster-presentation.png";
import SpeedTyping from "../assets/SpeedTypingImage.jpg";
import TechFunImage from "../assets/tech-fun-image.jpg";
import WorkshopImage from "../assets/workshop-image.jpg"; // Add the appropriate image file

function TechnicalEvents() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const categories = [
    { title: "Tech/Biz Quiz", image: QuizImage, description: "Test your technical and business knowledge in our exciting quiz competition." },
    { title: "Paper Presentation", image: PaperPresentation, description: "Showcase your research and ideas in our Paper Presentation event." },
    { title: "Poster Presentation", image: PosterPresentation, description: "Design a compelling poster and present your concepts effectively." },
    { title: "Speed Typing", image: SpeedTyping, description: "A speed typing competition involves contestants competing to achieve the highest accurate typing speeds." },
    { title: "Tech Fun Events", image: TechFunImage, description: "Engage in exciting and interactive tech-related fun activities." }
  ];

  return (
    <div className="technicalevents-container">
      <h1 className="h1-container">Technical Events</h1>
      <div className="outer-box">
        <div className="tabs">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`tab ${selectedCategory === index ? "active" : ""}`}
              onClick={() => setSelectedCategory(index)}
            >
              {category.title}
            </div>
          ))}
        </div>

        {selectedCategory !== null && (
          <div className="category-details active">
            <h3>{categories[selectedCategory].title}</h3>
            <img 
              src={categories[selectedCategory].image} 
              alt={categories[selectedCategory].title} 
              className="category-image"
            />
            <p>{categories[selectedCategory].description}</p>
            <p><b>As soon as possible we will share the registration details.</b></p>
            {/* <button 
              className="form-button"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe4GZLtKB5UHpCd50kka1hJg4RnYkjF-p2pr3e6NvzCoenoOQ/viewform?usp=header", "_blank")}
            >
              Register Now
            </button> */}
          </div>
        )}
      </div>

      {/* Separate Workshop Section */}
      <div className="workshop-section">
        <h2>Workshop: Fusion Deposition Modelling</h2>
        <img src={WorkshopImage} alt="Fusion Deposition Modelling Workshop" className="workshop-image" />
        <p>Join our hands-on workshop on <strong>Fusion Deposition Modelling (FDM)</strong> and explore the fundamentals of 3D printing technology.</p>
        <p><strong>Date:</strong> 18th & 19th February</p>
        <p><b>As soon as possible we will share the registration details.</b></p>
        {/* <button 
          className="form-button"
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSe4GZLtKB5UHpCd50kka1hJg4RnYkjF-p2pr3e6NvzCoenoOQ/viewform?usp=header", "_blank")}
        >
          Register for Workshop
        </button> */}
      </div>
    </div>
  );
}

export default TechnicalEvents;
