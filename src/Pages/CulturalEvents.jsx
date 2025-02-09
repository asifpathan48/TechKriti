import React from 'react';
import './CulturalEvents.css';
import SingingImage from '../assets/Singing-image.jpg';
import DancingImage from '../assets/dancing-image.jpg';
import TalentShow from '../assets/talent-show.jpg';
import ReelContest from '../assets/reel-contest.png';
import SelfieContest from '../assets/SelfieContestImage.png';
import Dubsmash from '../assets/dubsmash.png';
import FashionShow from '../assets/Fashion Show.png';
import NameOfTheTune from '../assets/NameThatTune2021Logo.png';
import VideoEditingImage from '../assets/video-editing.jpg';

function CulturalEvents() {
  return (
    <div className="culturalevents-container">
      <h1>Cultural Events</h1>
      <div className="events-grid">
        <div className="event-box">
          <img src={SingingImage} alt="Singing" />
          <h3>Singing</h3>
          <p>Showcase your melodious voice and mesmerize the audience with your singing skills.</p>
        </div>

        <div className="event-box">
          <img src={DancingImage} alt="Dancing" />
          <h3>Dancing</h3>
          <p>Express yourself through graceful moves and electrifying performances on stage.</p>
        </div>

        <div className="event-box">
          <img src={TalentShow} alt="Talent Show" />
          <h3>Talent Show</h3>
          <p>Unleash your hidden talents! Whether it’s mimicry, magic, or any unique skill, the stage is yours!</p>
        </div>

        <div className="event-box">
          <img src={ReelContest} alt="Reels Contest" />
          <h3>Reels Contest</h3>
          <p> 
            Create engaging and creative reels that capture attention and tell a story in seconds.
            <br/>
            <strong>Everyone should share their reels to our Instagram handle @t_ec_hkriti.</strong>
          </p>
        </div>

        <div className="event-box">
          <img src={SelfieContest} alt="Selfie Contest" />
          <h3>Selfie Contest</h3>
          <p> 
            Capture the best selfie and showcase your creativity in our selfie contest.
            <br/>
            <strong>Everyone should share their selfie to our Instagram handle @t_ec_hkriti.</strong>
          </p>
        </div>

        <div className="event-box">
          <img src={VideoEditingImage} alt="Video Editing Contest" />
          <h3>Video Editing Contest</h3>
          <p>
            Showcase your creativity and storytelling skills by crafting an impressive video edit! 
            Add transitions, effects, and music to create an engaging masterpiece. 
            <br/>
            <strong>Everyone should share their edited video to our Instagram handle. 
              <br/>@t_ec_hkriti.</strong>
          </p>
        </div>

        <div className="event-box">
          <img src={Dubsmash} alt="Dubsmash" />
          <h3>Dubsmash</h3>
          <p>Bring your favorite dialogues to life with an entertaining Dubsmash performance!</p>
        </div>

        <div className="event-box">
          <img src={FashionShow} alt="Fashion Show" />
          <h3>Fashion Show</h3>
          <p>Showcase your style and elegance on the ramp in our glamorous fashion show event!</p>
        </div>

        <div className="event-box">
          <img src={NameOfTheTune} alt="Name of The Tune" />
          <h3>Name of The Tune</h3>
          <p>Test your music knowledge! Guess the tune and prove you are the ultimate music enthusiast!</p>
        </div>
      </div>
    </div>
  );
}

export default CulturalEvents;
