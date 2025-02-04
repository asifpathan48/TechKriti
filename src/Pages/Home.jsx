import React from "react";
import "./Home.css"; // Import external CSS file
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>TECHKRITI</h1>
        <h2>Welcomes you</h2>
        <br/>
        <p>Fest Organized by <b><span>ECE Department</span></b></p>
        <br/>
        <p>We are going to conduct different technical events, sports which include E-Sports too.</p>
        <p>Technical Events and Workshops will be conducted from: <b>17/02/2025 to 19/02/2025 </b></p>
        <p>Arts, Cultural Events, Treasure Hunt, Singing, Dancing will be conducted on: <b>24/02/2025 and 25/02/2025</b></p>
        <br/>
        <h3>For more of Events, click on Events below!</h3>
        <Link to="/events" className="events-link">Events</Link>
      </div>
    </section>
  );
}

export default Home;
