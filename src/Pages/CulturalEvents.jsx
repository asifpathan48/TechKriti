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

const events = [
  {
    title: 'Singing',
    description: 'Showcase your melodious voice and mesmerize the audience with your singing skills.',
    image: SingingImage
  },
  {
    title: 'Dancing',
    description: 'Express yourself through graceful moves and electrifying performances on stage.',
    image: DancingImage
  },
  {
    title: 'Talent Show',
    description: 'Unleash your hidden talents! Whether it’s mimicry, magic, or any unique skill, the stage is yours!',
    image: TalentShow
  },
  {
    title: 'Reels Contest',
    description: 'Create engaging and creative reels that capture attention and tell a story in seconds!',
    image: ReelContest
  },
  {
    title: 'Selfie Contest',
    description: 'Capture the best selfie and showcase your creativity in our selfie contest!',
    image: SelfieContest
  },
  {
    title: 'Dubsmash',
    description: 'Bring your favorite dialogues to life with an entertaining Dubsmash performance!',
    image: Dubsmash
  },
  {
    title: 'Fashion Show',
    description: 'Showcase your style and elegance on the ramp in our glamorous fashion show event!',
    image: FashionShow
  },
  {
    title: 'Name of The Tune',
    description: 'Test your music knowledge! Guess the tune and prove you are the ultimate music enthusiast!',
    image: NameOfTheTune
  }
];

function CulturalEvents() {
  return (
    <div className="culturalevents-container">
      <h1>Cultural Events</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-box">
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CulturalEvents;
