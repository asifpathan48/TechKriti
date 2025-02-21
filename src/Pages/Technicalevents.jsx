import React, { useState } from "react";
import "./TechnicalEvents.css";
import QuizImage from "../assets/quiz-image.jpg";
import PaperPresentation from "../assets/paper-presentation.jpg";
import PosterPresentation from "../assets/poster-presentation.png";
import SpeedTyping from "../assets/SpeedTypingImage.jpg";
import TechFunImage from "../assets/tech-fun-image.jpg";
import WinPrizesImage from "../assets/Win Cash Prizes.png";

const eventsData = [
  {
    id: 1,
    title: "Tech Quiz",
    image: QuizImage,
    description: "Test your technical and business knowledge in our exciting quiz competition.",
    rules: [
      "Each team consists of 2 participants.",
      "Two Rounds: Preliminary & Final.",
      "Time-based answering system."
    ],
    registrationLink: "https://forms.gle/5zxjx23d8QV9V8wZA",
    coordinators: ["Asif Pathan", "Yamini"]
  },
  {
    id: 2,
    title: "Paper Presentation",
    image: PaperPresentation,
    description: "Showcase your research and ideas in our Paper Presentation event.",
    rules: [
      "Choose Anyone Topics like:",
      "1. Wireless Communication",
      "2. Signal Processing",
      "3. VLSI - Very Large Scale Integration",
      "4. IOT & Embedded Systems",
      "5. Robotics",
      "Or ",
      "Any Recent technologies..",
      "Maximum 2 participants per team.",
      "PPT should be maximum of 15 Slides.",
      "Share your PPT to email: techkriti2k25@gmail.com",
      "Presentation time: 10 minutes."
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXwhEFAFeEl4Q4uaE8AactH0BhWcZKhtkPVR0BRpR1os7WXw/viewform",
    coordinators: ["Asif Pathan", "Yamini"]
  },
  {
    id: 3,
    title: "Poster Presentation",
    image: PosterPresentation,
    description: "Design a compelling poster and present your concepts effectively.",
    rules: [
      "Choose Anyone Topics like:",
     "1. Wireless Communication",
      "2. Signal Processing",
      "3. VLSI - Very Large Scale Integration",
      "4. IOT & Embedded Systems",
      "5. Robotics",
      "Or ",
      "Any Recent technologies..",
      "Maximum 2 participants per team.",
      "Judging criteria: Creativity & Content."
    ],
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfS1O9v2m_K0fdjSWxNgO8sSEFvg2AZve880NsXliAmIa3J6A/viewform",
    coordinators: ["Asif Pathan", "Yamini"]
  },
  {
    id: 4,
    title: "Speed Typing",
    image: SpeedTyping,
    description: "A competition to achieve the highest accurate typing speeds.",
    rules: [
      "Each participant gets 1 minute.",
      "Multiple rounds: Preliminary & Final.",
      "Errors will reduce the score.",
      "Fastest accurate typist wins!"
    ],
    registrationLink: "https://forms.gle/756tjJ3LBYtKnwni9",
    coordinators: ["Asif Pathan", "Yamini"]
  },
  {
    id: 5,
    title: "Tech Fun Events",
    image: TechFunImage,
    description: "Engage in exciting and interactive tech-related fun activities.",
    rules: [
      "Includes coding puzzles and circuit challenges.",
      "Some tasks will be team-based.",
      "Creativity and problem-solving matter!"
    ],
    registrationLink: "https://forms.gle/RhKFX2Ws8zouaam68",
    coordinators: ["Asif Pathan","Yamini"]
  }
];

function TechnicalEvents() {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleEventDetails = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <div className="technicalevents-container">
      <h1 className="h1-container">Technical Events</h1>
      <br/>
    {/* <img src={WinPrizesImage} alt="prizes" className="prizes-image" /> */}
      <div className="events-grid">
        {eventsData.map((event) => (
          <div key={event.id} className={`event-box ${expandedEvent === event.id ? "expanded" : ""}`}>
            <h3>{event.title}</h3>
            <img src={event.image} alt={event.title} className="category-image" />
            <p>{event.description}</p>

            {/* <button className="form-button" onClick={() => window.open(event.registrationLink, "_blank")}>
              Register Now
            </button> */}
            <br/>
            <button className="know-more-button" onClick={() => toggleEventDetails(event.id)}>
              {expandedEvent === event.id ? "Show Less" : "Know More"}
            </button>

            {expandedEvent === event.id && (
              <div className="event-details">
                <br/>
                <h4>Rules:</h4>
                <ul>
                  {event.rules.map((rule, index) => (
                    <b><li key={index}>{rule}</li></b>
                  ))}
                </ul>
                <h4>Coordinators:</h4>
                <ul>
                  {event.coordinators.map((coordinator, index) => (
                    <b><li key={index}>{coordinator}</li></b>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <h1 className="events-finished">Thank you everyone for your active participation!
        </h1>
      <br />
      {/* <button className="technical-combo-registration" onClick={() => window.open("https://forms.gle/q8Q2T9mqhVTvF2QP7", "_blank")}>
        Technical Events Combo Registration
      </button> */}
    </div>
  );
}

export default TechnicalEvents;
