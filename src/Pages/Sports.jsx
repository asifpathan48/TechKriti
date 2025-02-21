import React from 'react';
import './Sports.css';
import ChessImage from '../assets/chess-image.jpg';
import CharromImage from '../assets/carrom-image.png';
import CricketImage from '../assets/cricket-image.jpg';
import VolleyBallImage from '../assets/volleyball-image.jpg';
import KabbadiImage from '../assets/kabbadi-image.jpg';
import ThrowBallImage from '../assets/throwball-image.jpg';
import FreeFire from '../assets/free-fire-image.jpg';
import PubG from '../assets/pubg-image.jpg';

function Sports() {
  return (
    <div className="sports-container">
      <h1>Sports 
        <br/>
        Events has been completed!!
        <br/>
        <span>
          We thank everyone for their active participation
        </span>
      </h1>

      <div className="section">
        <h2>Indoor Games</h2>
        <div className="games-container">
          <div className="game-box">
            <img src={ChessImage} alt="Chess" className="game-image" />
            <div className="game-details">
              <h3>Chess</h3>
              <p>Strategic game for two players. Checkmate your opponent's king!</p>
              {/* <button className="register-btn" onClick={() => window.open("https://forms.gle/5F8m6StgeDt2uDME7", "_blank")}>Register</button> */}
            </div>
          </div>
          <div className="game-box">
            <img src={CharromImage} alt="Carroms" className="game-image" />
            <div className="game-details">
              <h3>Carroms</h3>
              <p>Play this fun indoor game of skill with your friends.</p>
              {/* <button className="register-btn" onClick={() => window.open("https://forms.gle/TjvWwEgAsShhFA4K9", "_blank")}>Register</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Outdoor Games</h2>
        <div className="games-container">
          <div className="game-box">
            <img src={CricketImage} alt="Cricket" className="game-image" />
            <div className="game-details">
              <h3>Cricket</h3>
              <p>Join the cricket tournament and showcase your batting skills!</p>
              {/* <button className="register-btn" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeYROLSXVqt9898qXP3P3fq7iqTAEDba-VcOpo36A5j2foslQ/viewform", "_blank")}>Register</button> */}
            </div>
          </div>
          <div className="game-box">
            <img src={VolleyBallImage} alt="Volleyball" className="game-image" />
            <div className="game-details">
              <h3>Volleyball</h3>
              <p>Get your team together and spike your way to victory!</p>
              {/* <button className="register-btn" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScyUqpTNHUv19T23ZiDVPAQN6k3e41FWKhtEXbp2GtKLxzPFQ/viewform", "_blank")}>Register</button> */}
            </div>
          </div>
          <div className="game-box">
            <img src={KabbadiImage} alt="Kabbadi" className="game-image" />
            <div className="game-details">
              <h3>Kabbadi For Women</h3>
              <p>Get ready for an intense and action-packed game of Kabbadi!</p>
              {/* <button className="register-btn" onClick={() => window.open("https://forms.gle/DRPVHfTYBuaBZ4BC7", "_blank")}>Register</button> */}
            </div>
          </div>
          <div className="game-box">
            <img src={ThrowBallImage} alt="Throwball" className="game-image" />
            <div className="game-details">
              <h3>Throwball For Women</h3>
              <p>A fun team sport. Get your team and enjoy Throwball!</p>
              {/* <button className="register-btn" onClick={() => window.open("https://forms.gle/buo52jDN97fzVwHJ9", "_blank")}>Register</button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>E-sports</h2>
        <div className="games-container">
          <div className="game-box">
            <img src={FreeFire} alt="Free Fire" className="game-image" />
            <div className="game-details">
              <h3>Free Fire</h3>
              <p>Join the battle royale in Free Fire and claim victory!</p>
              {/* <button className="register-btn" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfQDyLwioEEFoNkRKTvj3W6Eq_4N_NT-GNMPuZFcP8rZUoLCg/viewform", "_blank")}>Register</button> */}
            </div>
          </div>
          <div className="game-box">
            <img src={PubG} alt="PubG" className="game-image" />
            <div className="game-details">
              <h3>PubG</h3>
              <p>Drop into the arena and be the last player standing!
              </p>
              {/* <button className="register-btn" onClick={() => window.open("https://forms.gle/qgA9KefPv9CpMEhr5", "_blank")}>Register</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
