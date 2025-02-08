import React from 'react';
import './About.css';
import AboutCollegeImage from '../assets/baba-college.jpg';
import ECEImage from '../assets/ece-logo.png';
import LaunchImage1 from '../assets/techkriti launch.jpeg';
import LaunchImage2 from '../assets/event-seminar-hall.jpeg';
import LaunchImage3 from '../assets/launched.jpeg';
import LaunchImage4 from '../assets/hod.jpeg';
import LaunchImage5 from '../assets/pradeepsir.jpeg';
import LaunchImage6 from '../assets/three-madams.jpeg';
import LaunchImage7 from '../assets/boys.jpeg';
import LaunchImage8 from '../assets/ravikishoresir.jpeg';
import LaunchImage9 from '../assets/fourmadams.jpeg';
import PrincipalSirImage from '../assets/principal.jpeg';
import AnilSirImage from '../assets/anil.jpeg';

function About() {
  return (
    <div className="home-container">
      <h1>
        <br />
        About    
        <br />
      </h1>
      <h2>
        <span>TECHKRITI</span>
        <br />
        A fest organized by the <b>ECE Department</b> of BITS Vizag
      </h2>
      <h2>About Our College</h2>
      <div className="info-box">
        <img src={AboutCollegeImage} alt="Bits Image" />
        <p>
        Baba Institute of Technology & Sciences(BITS) was established in 2008 by a group of well-known acadeicians. They are pioneering educators, having unmatched experience in the field of education with a belief that the continuous search for knowledge is the sole path to success. The primary focus of the institution is to expose the young minds to the world of technology and business, instilling in them confidence and fortitude to face new challenges that enable them to excel in their chosen fields.
        </p>
      </div>
      <h2>About Our Department</h2>
      <div className="info-box">
        <img src={ECEImage} alt="ECE Image" />
        <p>
          The Department of Electronics and Communication Engineering (ECE) at BITS Vizag Engineering College is committed to providing high-quality education and research opportunities in the field of electronics and communication. It equips students with the knowledge and skills needed to excel in the ever-evolving technological landscape. The department features state-of-the-art infrastructure, including modern classrooms, well-equipped laboratories, and dedicated research centers, with a strong focus on innovation and practical learning.
        </p>
      </div>
      <h3>Click on the below button, to see our <b>Poster</b></h3>
      <button onClick={() => window.open('/PosterCopy.jpg', '_blank')}>
        Download Poster
      </button>

      <h2>TechKriti Launch Photos</h2>
      <br/>
      <div className="launch-gallery">
        <img src={LaunchImage1} alt="Launch 1" />
        <img src={LaunchImage3} alt="Launch 3" />
        <img src={LaunchImage2} alt="Launch 2" />
        <img src={LaunchImage4} alt="launch 4" />
        <img src={PrincipalSirImage} alt="principal-sir-image" />
        <img src={AnilSirImage} alt="anil-sir-image" />
        <img src={LaunchImage5} alt="launch 5" />
        <img src={LaunchImage7} alt="launch 7" />
        <img src={LaunchImage8} alt="launch 8" />
        <img src={LaunchImage6} alt="launch 6" />
        <img src={LaunchImage9} alt="launch 9" />
        
      </div>

    </div>
  );
}

export default About;
