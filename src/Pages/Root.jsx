import React, { useState, useEffect } from 'react';
import './Root.css'; // To add custom styles
import { Link } from 'react-router-dom';

function Root() {
  // Set the target date for the countdown (example: 2025-12-31 23:59:59)
  const targetDate = new Date('2025-02-17T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  // Calculate hours, minutes, and seconds from the timeLeft
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="countdown-container">
      <h1>
  Countdown <br />
  To the biggest fest of BITS Vizag <br />
  <span>TECHKRITI</span> <br />
  Organized BY <br />
  ECE Department
</h1>

      <div className="countdown-timer">
        <div className="time-block">
          <p>{days}</p>
          <p>Days</p>
        </div>
        <div className="time-block">
          <p>{hours}</p>
          <p>Hours</p>
        </div>
        <div className="time-block">
          <p>{minutes}</p>
          <p>Minutes</p>
        </div>
        <div className="time-block">
          <p>{seconds}</p>
          <p>Seconds</p>
        </div>
      </div>
      <br/>
      <div>
        <h2> For more information
          <br/>
          click on 
          <br/>
          <Link to="/home">
            Home </Link> 
          </h2>
      </div>
    </div>

  );
}

export default Root;
