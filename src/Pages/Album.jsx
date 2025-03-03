import React, { useState } from "react";
import "./Album.css";

import SecondYearJuniorsDance from "../assets/Album-images/2nd-year-juniors-dance.jpg";
import AbcdDance1 from "../assets/Album-images/abcd-dance-1-min.jpg";
import AbcdDance2 from "../assets/Album-images/abcd-dance-2.jpg";
import AllBanners from "../assets/Album-images/all-banners.jpg";
import AllStateDance from "../assets/Album-images/all-state-dance.jpg";
import Aruna from "../assets/Album-images/Aruna.jpg";
import BoysImage from "../assets/Album-images/boys-image.jpg";
import ChandiniYashoda from "../assets/Album-images/chandini-yashoda.jpg";
import DanceJuniors from "../assets/Album-images/dance-juniors.jpg";
import Dance from "../assets/Album-images/dance.jpg";
import GirlsEnjoyment from "../assets/Album-images/girls-enjoyment.jpg";
import GirlsPicture from "../assets/Album-images/girls-picture.jpg";
import HarshithaImage from "../assets/Album-images/harshitha-image.jpg";
import HodMadam from "../assets/Album-images/hod-madam.jpg";
import JuniorClassical from "../assets/Album-images/junior-classical.jpg";
import JuniorsDance from "../assets/Album-images/juniors-dance.jpg";
import KomaliMadam from "../assets/Album-images/komali-madam.jpg";
import KrishnaMurthy from "../assets/Album-images/Krishna-Murthy.jpg";
import OverseasStall from "../assets/Album-images/overseas-stall.jpg";
import PosterPresentation from "../assets/Album-images/Poster-Presentation.jpg";
import PradeepSir from "../assets/Album-images/pradeep-sir.jpg";
import PrincipalSDPSir from "../assets/Album-images/principal-sdp-sir.jpg";
import Principle from "../assets/Album-images/principle.jpg";
import RavindraSir from "../assets/Album-images/ravindra-sir.jpg";
import RoyalMechRamanaSpeech from "../assets/Album-images/royal-mech-ramana-speech.jpg";
import RoyalMechRamana from "../assets/Album-images/royal-mech-ramana.jpg";
import SalaarSkit from "../assets/Album-images/salaar-skit.jpg";
import SarvikNew from "../assets/Album-images/sarvik-new.jpg";
import Singing from "../assets/Album-images/singing.jpg";
import SrilakshmiMadamStage from "../assets/Album-images/srilakshmi-madam-stage.jpg";
import SrilakshmiMadam from "../assets/Album-images/srilakshmi-madam.jpg";
import StaffStateDance from "../assets/Album-images/staff-state-dance.jpg";
import Staff from "../assets/Album-images/staff.jpg";
import StallGames from "../assets/Album-images/stall-games.jpg";
import StateDance2 from "../assets/Album-images/state-dance-2.jpg";
import StateDance from "../assets/Album-images/state-dance.jpg";
import TechkritiBanner from "../assets/Album-images/techkriti-banner.jpg";
import TechnicalEvent from "../assets/Album-images/technical-event.jpg";
import FinalYears from "../assets/Album-images/final-years-pic.jpg";
import Coordinators from "../assets/Album-images/coordinators.jpg";

const images = [
  { src: HodMadam, alt: "HOD Madam" },
  { src: TechkritiBanner, alt: "Techkriti Banner" },
  { src: HarshithaImage, alt: "Harshitha Image" },
  { src: KomaliMadam, alt: "Komali Madam" },
  { src: ChandiniYashoda, alt: "Chandini Yashoda" },
  { src: SrilakshmiMadam, alt: "Srilakshmi Madam" },
  { src: StallGames, alt: "Stall Games" },
  { src: JuniorClassical, alt: "Junior Classical" },
  { src: Principle, alt: "Principle" },
  { src: AllBanners, alt: "All Banners" },
  { src: RoyalMechRamana, alt: "Royal Mech Ramana" },
  { src: SalaarSkit, alt: "Salaar Skit" },
  { src: DanceJuniors, alt: "Dance Juniors" },
  { src: OverseasStall, alt: "Overseas Stall" },
  { src: Singing, alt: "Singing" },
  { src: BoysImage, alt: "Boys Image" },
  { src: SarvikNew, alt: "Sarvik New" },
  { src: GirlsPicture, alt: "Girls Picture" },
  { src: StateDance, alt: "State Dance" },
  { src: StateDance2, alt: "State Dance 2" },
  { src: AllStateDance, alt: "All State Dance" },
  { src: RavindraSir, alt: "Ravindra Sir" },
  { src: PrincipalSDPSir, alt: "Principal SDP Sir" },
  { src: StaffStateDance, alt: "Staff State Dance" },
  { src: SrilakshmiMadamStage, alt: "Srilakshmi Madam Stage" },
  { src: TechnicalEvent, alt: "Technical Event" },
  { src: PosterPresentation, alt: "Poster Presentation" },
  { src: AbcdDance2, alt: "ABCD Dance 2" },
  { src: KrishnaMurthy, alt: "Krishna Murthy" },
  { src: Aruna, alt: "Aruna" },
  { src: Dance, alt: "Dance" },
  { src: RoyalMechRamanaSpeech, alt: "Royal Mech Ramana Speech" },
  { src: AbcdDance1, alt: "ABCD Dance 1" },
  { src: JuniorsDance, alt: "Juniors Dance" },
  { src: GirlsEnjoyment, alt: "Girls Enjoyment" },
  { src: PradeepSir, alt: "Pradeep Sir" },
  { src: SecondYearJuniorsDance, alt: "2nd Year Juniors Dance" },
  { src: Staff, alt: "Staff" },
];

export default function Album() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">TechKriti 2K25 Album</h1>
      <div className="gallery-grid">
        {images.map(({ src, alt }, index) => (
          <img
            key={index}
            src={src}
            alt={alt}
            className="gallery-image"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="dialog-overlay" onClick={() => setSelectedImage(null)}>
          <div className="dialog-box">
            <img src={selectedImage} alt="Selected" className="dialog-image" />
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
