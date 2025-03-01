import React, { useState } from "react";
import "./Album.css";

// Import images manually
import img1 from "../assets/coordinators.jpg";
import img2 from "../assets/final-years-pic.jpg";
import img3 from "../assets/harshitha-image.jpg";
import img4 from "../assets/hod-madam.jpg";
import img5 from "../assets/royal-mech-ramana.jpg";
import img6 from "../assets/srilakshmi-madam.jpg";
import img7 from "../assets/techkriti-banner.jpg";
import img8 from "../assets/all-banners.jpg";
import img9 from "../assets/stall-games.jpg";
import img10 from "../assets/komali-madam.jpg";
import salarskit from "../assets/salaar-skit.jpg";
import girlspicture from "../assets/girls-picture.jpg";
import JuniorsDance from "../assets/dance-juniors.jpg";
import GirlsJuniors from "../assets/juniors-dance.jpg";
import Principal from "../assets/principle.jpg";
import OverseasStalls from "../assets/overseas-stall.jpg";
import SingingImage from "../assets/singing.jpg";
import img11 from "../assets/principal-sdp-sir.jpg";
import Sarvik from "../assets/sarvik-new.jpg";
import ChandiniYashoda from "../assets/chandini-yashoda.jpg";
import boysImage from "../assets/boys-image.jpg";
import Juniorclassical from "../assets/junior-classical.jpg";
import StateDance from "../assets/state-dance.jpg";
import StateDance2 from "../assets/state-dance-2.jpg";
import AllStateDance from "../assets/all-state-dance.jpg";
import StaffStateDance from "../assets/staff-state-dance.jpg";
import SrilakshmiMadamStage from "../assets/srilakshmi-madam-stage.jpg";
import TechnicalEventLalith from "../assets/technical-event.jpg";
import TechnicalEventPosterPresentation from "../assets/Poster-Presentation.jpg";
import KrishnaMurthy from "../assets/Krishna-Murthy.jpg";
import Aruna from "../assets/Aruna.jpg";
import AbcdDance from "../assets/abcd-dance-1.jpg";
import AbcdDance2 from "../assets/abcd-dance-2.jpg";
import PradeepSir from "../assets/pradeep-sir.jpg";
import Dance from "../assets/dance.jpg"
import GirlsEnjoyment from "../assets/girls-enjoyment.jpg";
import RavindraSir from "../assets/ravindra-sir.jpg";
import Staff from "../assets/staff.jpg";

const Album = () => {
  const images = [img7, img4, img3, img10, ChandiniYashoda,img6, img9, Juniorclassical, Principal,img8,  img5, img1,salarskit, JuniorsDance, GirlsJuniors,OverseasStalls, SingingImage,img11,boysImage,Sarvik, girlspicture,StateDance,StateDance2,AllStateDance,img2,RavindraSir,StaffStateDance,SrilakshmiMadamStage,TechnicalEventLalith,TechnicalEventPosterPresentation,AbcdDance2,KrishnaMurthy,Aruna,Dance,PradeepSir,AbcdDance,GirlsEnjoyment,Staff];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h1 className="main-heading">TechKriti 2K25 Album</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="gallery-img"
            onClick={() => setSelectedImage(image)} // Open image on click
          />
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Enlarged" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
