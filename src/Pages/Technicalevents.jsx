import React from "react";
import "./TechnicalEvents.css";
import QuizImage from "../assets/quiz-image.jpg";
import PaperPresentation from "../assets/paper-presentation.jpg";
import PosterPresentation from "../assets/poster-presentation.png";
import SpeedTyping from "../assets/SpeedTypingImage.jpg";
import TechFunImage from "../assets/tech-fun-image.jpg";
// import WorkshopImage from "../assets/workshop-image.jpg"; 
import WorkshopImage from "../assets/workshop.png";

function TechnicalEvents() {
  const categories = [
    { 
      title: "Tech/Biz Quiz", 
      image: QuizImage, 
      description: "Test your technical and business knowledge in our exciting quiz competition.",
      formLink: "https://forms.gle/5zxjx23d8QV9V8wZA"
    },
    { 
      title: "Paper Presentation", 
      image: PaperPresentation, 
      description: "Showcase your research and ideas in our Paper Presentation event.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXwhEFAFeEl4Q4uaE8AactH0BhWcZKhtkPVR0BRpR1os7WXw/viewform"
    },
    { 
      title: "Poster Presentation", 
      image: PosterPresentation, 
      description: "Design a compelling poster and present your concepts effectively.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfS1O9v2m_K0fdjSWxNgO8sSEFvg2AZve880NsXliAmIa3J6A/viewform"
    },
    { 
      title: "Speed Typing", 
      image: SpeedTyping, 
      description: "A speed typing competition involves contestants competing to achieve the highest accurate typing speeds.",
      formLink: "https://forms.gle/756tjJ3LBYtKnwni9"
    },
    { 
      title: "Tech Fun Events", 
      image: TechFunImage, 
      description: "Engage in exciting and interactive tech-related fun activities.",
      formLink: "https://forms.gle/RhKFX2Ws8zouaam68"
    }
  ];

  return (
    <div className="technicalevents-container">
      <h1 className="h1-container">Technical Events</h1>
      <div className="events-grid">
        {categories.map((category, index) => (
          <div key={index} className="event-box">
            <h3>{category.title}</h3>
            <img src={category.image} alt={category.title} className="category-image" />
            <p>{category.description}</p>
            <button 
              className="form-button"
              onClick={() => window.open(category.formLink, "_blank")}
            >
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalEvents;
