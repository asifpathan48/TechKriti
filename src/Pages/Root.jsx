import React, { useEffect, useState } from 'react';
import './Root.css';  // Import the CSS file for styling
import WorkshopImage from '../assets/workshop-image.jpg';
import WebLogoNew from '../assets/techkriti.png';

function Root() {
  return (
    <div className="root-container">
<img src={WebLogoNew} alt=""></img> 
<h1>Events are live!!</h1>
      <div className="text-container">
        <h2>Technical Events: 
          <br/>
          <span>17/02/2025 to 19/02/2025</span></h2>
        <h2>Cultural Events: 
          <br/>
          <span>24/02/2025 to 25/02/2025</span></h2>
      </div>
      <br/>
      {/* <h2 className="workshop-name">We have an exciting workshop on
        <br/>
        Registration closes by: 
        <br/>16th Feb 2025 09:00 PM
        <br/>
        Register Fastly!!
      </h2> */}
      <div className="workshop-section">
        <h2 className="fusion-deposition">Fused Deposition Modelling</h2>
        <img src={WorkshopImage} alt="Fusion Deposition Modelling Workshop" className="workshop-image" />
        <p>Join our hands-on workshop on <strong>Fused Deposition Modelling (FDM)</strong> and explore the fundamentals of 3D printing technology.</p>
        <p><strong>Date:</strong> 17th, 18th & 19th February</p>
        <h2>Registration's have been closed!!</h2>
                {/* <button 
          className="form-button"
          onClick={() => window.open("https://forms.gle/nZNXdzGCoJPpuWAh6", "_blank")}
        >
          Register for Workshop
        </button> */}
      </div>
    </div>
  );
}

export default Root;
