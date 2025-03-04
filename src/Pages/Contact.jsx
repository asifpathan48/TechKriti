import React from 'react';
import './Contact.css';
import AsifImage from '../assets/asif.jpeg';
import AravindImage from '../assets/aravindImage.jpeg';
import SaiImage from '../assets/sai.jpeg';
import UpendraImage from '../assets/upendra.jpg';
import SarvikImage from '../assets/sarvik.jpg';
import TharunImage from '../assets/tharun.jpeg';
import PrasadImage from '../assets/prasad.jpeg';
import UdayKiranImage from '../assets/uday.jpg';
import MehatabImage from '../assets/mehatab.jpeg';
import YaminiImage from '../assets/yamini.jpeg';
import PrudhviImage from '../assets/prudhvi.jpeg';
import SagarImage from '../assets/sagar.jpeg';
import SonaliImage from '../assets/sonali.jpeg';
import dummyImage from '../assets/dummy.jpg';
import ZadeImage from '../assets/zadeImage.jpeg';
// import KarthikImage from '../assets/karthik.jpg';
import KarthikImage from '../assets/karthik.jpeg';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <img src={AsifImage} alt="Profile" className="contact-image" />
        <h2 className="contact-name">Asif Pathan</h2>
       <b><p className="contact-role">Technical Coordinator & Web Developer</p></b> 
       <b><p className="coordinator-phone">+91 6302152474</p></b>
      </div>

      <div className="event-coordinators">
        <h2 className="section-title">Event Coordinators</h2>
        <div className="event-coordinator-cards">
          <div className="coordinator-card">
            <img src={SaiImage} alt="Sai" className="coordinator-image" />
            <h3 className="coordinator-name">Sai Srinivas</h3>
            <p className="coordinator-designation">Event Coordinator</p>
            <b><p className="coordinator-phone">+91 7981996529</p></b>
          </div>
          <div className="coordinator-card">
            <img src={UpendraImage} alt="Upendra" className="coordinator-image" />
            <h3 className="coordinator-name">B Y V Upendra</h3>
            <p className="coordinator-designation">Event Coordinator</p>
            <b><p className="coordinator-phone">+91 7981274452</p></b>
          </div>
          <div className="coordinator-card">
            <img src={SarvikImage} alt="Sarvik" className="coordinator-image" />
            <h3 className="coordinator-name">  Sarvik</h3>
            <p className="coordinator-designation">Event Coordinator</p>
            <b><p className="coordinator-phone">+91 9059017723</p></b>
          </div>
        </div>
      </div>

      <div className="student-coordinators">
        <h2 className="section-title">Student Coordinators</h2>
        <div className="student-coordinator-cards">
          <div className="coordinator-card">
            <img src={TharunImage} alt="Tharun" className="coordinator-image" />
            <h3 className="coordinator-name">B. Tharun</h3>
            <p className="coordinator-designation">Student Coordinator</p>
            <b><p className="coordinator-phone">+91 7032471698</p></b>
          </div>
          <div className="coordinator-card">
            <img src={SonaliImage} alt="Sonali" className="coordinator-image" />
            <h3 className="coordinator-name">Sonali Jena</h3>
            <p className="coordinator-designation">Student Coordinator</p>
          </div>
          <div className="coordinator-card">
            <img src={AravindImage} alt="Aravind" className="coordinator-image" />
            <h3 className="coordinator-name">Aravind</h3>
            <p className="coordinator-designation">Student Coordinator</p>
            <b><p className="coordinator-phone">+91 7893961433</p></b>
          </div>
        </div>
      </div>

      <div className="social-media-coordinators">
        <h2 className="section-title">Social Media Coordinators</h2>
        <div className="social-media-coordinator-cards">
          <div className="coordinator-card">
            <img src={PrasadImage} alt="Prasad" className="coordinator-image" />
            <h3 className="coordinator-name">Prasad</h3>
            <p className="coordinator-designation">Social Media Coordinator</p>
            <b><p className="coordinator-phone">+91 6301974338</p></b>
          </div>
          <div className="coordinator-card">
            <img src={UdayKiranImage} alt="Uday Kiran" className="coordinator-image" />
            <h3 className="coordinator-name">Uday Kiran</h3>
            <p className="coordinator-designation">Social Media Coordinator</p>
            <b><p className="coordinator-phone">+91 8317690919</p></b>
          </div>
          <div className="coordinator-card">
            <img src={KarthikImage} alt="G Karthik" className="coordinator-image" />
            <h3 className="coordinator-name">G Karthik</h3>
            <p className="coordinator-designation">Social Media Coordinator</p>
            <b><p className="coordinator-phone">+91 9989123504</p></b>
          </div>
          {/* <div className="coordinator-card">
            <img src={ZadeImage} alt="G Karthik" className="coordinator-image" />
            <h3 className="coordinator-name">Zade Meadows</h3>
            <p className="coordinator-designation">Social Media Coordinator</p>
            <b><p className="coordinator-phone">+91 8143523962</p></b>
          </div> */}
        </div>
      </div>

      <div className="technical-coordinators">
        <h2 className="section-title">Technical Coordinators</h2>
        <div className="technical-coordinator-cards">
          <div className="coordinator-card">
            <img src={AsifImage} alt="Asif Pathan" className="coordinator-image" />
            <h3 className="coordinator-name">Asif Pathan</h3>
            <p className="coordinator-designation">Technical Coordinator</p>
            <b><p className="coordinator-phone">+91 6302152474</p></b>
          </div>
          <div className="coordinator-card">
            <img src={MehatabImage} alt="Mehatab Ali" className="coordinator-image" />
            <h3 className="coordinator-name">Mehatab Ali</h3>
            <p className="coordinator-designation">Technical Coordinator</p>
            <b><p className="coordinator-phone">+91 7702465731</p></b>
          </div>
          <div className="coordinator-card">
            <img src={YaminiImage} alt="Yamini" className="coordinator-image" />
            <h3 className="coordinator-name">Yamini</h3>
            <p className="coordinator-designation">Technical Coordinator</p>
          </div>
        </div>
      </div>

      <div className="discipline-coordinators">
        <h2 className="section-title">Discipline Coordinators</h2>
        <div className="discipline-coordinator-cards">
          <div className="coordinator-card">
            <img src={PrudhviImage} alt="Prudhvi" className="coordinator-image" />
            <h3 className="coordinator-name">Prudhvi</h3>
            <p className="coordinator-designation">Discipline Coordinator</p>
            <b><p className="coordinator-phone">+91 6309803679</p></b>
          </div>
          <div className="coordinator-card">
            <img src={SagarImage} alt="Sagar" className="coordinator-image" />
            <h3 className="coordinator-name">Sagar</h3>
            <p className="coordinator-designation">Discipline Coordinator</p>
            <b><p className="coordinator-phone">+91 7396123920</p></b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
