import React, { useEffect, useState } from 'react';
import './Root.css';  // Import the CSS file for styling
import WorkshopImage from "../assets/workshop.png";

function Root() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [eventStarted, setEventStarted] = useState(false);  // State to track if the event has started

  useEffect(() => {
    const targetDate = new Date('February 17, 2025 00:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // If the countdown reaches zero, stop the timer and set eventStarted to true
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setEventStarted(true);  // Event has started
      }
    }, 1000);

    return () => clearInterval(interval);  // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="root-container">
      <h1>Countdown 
        <br/>
        Of The Fest
        <br/> 
        Organized by 
        <br/>
        <span> ECE Department </span>
        <br/>
      </h1>
      
      {!eventStarted ? (
        <div className="countdown">
          <div className="countdown-box">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="countdown-box">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="countdown-box">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="countdown-box">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      ) : (
        <h1>The TECHKRITI has started!</h1>  
      )}
      
      <div className="text-container">
        <h2>Technical Events will be conducted from: <span>17/02/2025 to 19/02/2025</span></h2>
        <h2>Cultural Events will be conducted on: <span>24/02/2025 and 25/02/2025</span></h2>
      </div>
      <br/>
      <h2 className="workshop-name">We have an exciting workshop on</h2>
      {/* Separate Workshop Section */}
      <div className="workshop-section">
        <h2 className="fusion-deposition">Fusion Deposition Modelling</h2>
        <img src={WorkshopImage} alt="Fusion Deposition Modelling Workshop" className="workshop-image" />
        <p>Join our hands-on workshop on <strong>Fusion Deposition Modelling (FDM)</strong> and explore the fundamentals of 3D printing technology.</p>
        <p><strong>Date:</strong> 18th & 19th February</p>
        <button 
          className="form-button"
          onClick={() => window.open("https://forms.gle/nZNXdzGCoJPpuWAh6", "_blank")}
        >
          Register for Workshop
        </button>
      </div>
    </div>
  );
}

export default Root;
