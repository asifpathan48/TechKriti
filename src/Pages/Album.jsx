import React, { useState } from "react";
import "./Album.css";

const imageUrls = [
  "https://techkriti-998488275.imgix.net/hod-madam-D7FkuJfG.jpg",
  "https://techkriti-998488275.imgix.net/techkriti-banner-BtDu7pq1.jpg",
  "https://techkriti-998488275.imgix.net/harshitha-image-DwzkMAXK.jpg",
  "https://techkriti-998488275.imgix.net/komali-madam-C2aYbsW7.jpg",
  "https://techkriti-998488275.imgix.net/chandini-yashoda-BbuFceoh.jpg",
  "https://techkriti-998488275.imgix.net/srilakshmi-madam-x9yF6o-m.jpg",
  "https://techkriti-998488275.imgix.net/stall-games-DfqS2xlc.jpg",
  "https://techkriti-998488275.imgix.net/junior-classical-ByoTILkj.jpg",
  "https://techkriti-998488275.imgix.net/principle-OUbZfVvY.jpg",
  "https://techkriti-998488275.imgix.net/all-banners-DEIM_8yP.jpg",
  "https://techkriti-998488275.imgix.net/royal-mech-ramana-BcScnCWD.jpg",
  "https://techkriti-998488275.imgix.net/coordinators-BhRArhfp.jpg",
  "https://techkriti-998488275.imgix.net/salaar-skit-imqPbQrd.jpg",
  "https://techkriti-998488275.imgix.net/dance-juniors-Dc5n5qwI.jpg",
  "https://techkriti-998488275.imgix.net/juniors-dance-wqNVtQPC.jpg",
  "https://techkriti-998488275.imgix.net/overseas-stall-DdNNYHpn.jpg",
  "https://techkriti-998488275.imgix.net/singing-Br0Wz1sX.jpg",
  "https://techkriti-998488275.imgix.net/principal-sdp-sir-CoaflyAm.jpg",
  "https://techkriti-998488275.imgix.net/boys-image-Bt5E-75e.jpg",
  "https://techkriti-998488275.imgix.net/sarvik-new-CO-8rNoj.jpg",
  "https://techkriti-998488275.imgix.net/girls-picture-BEUj8h-8.jpg",
  "https://techkriti-998488275.imgix.net/state-dance-Dxp0u98O.jpg",
  "https://techkriti-998488275.imgix.net/state-dance-2-D-Y8sIAL.jpg",
  "https://techkriti-998488275.imgix.net/all-state-dance-vATZNwQ-.jpg",
  "https://techkriti-998488275.imgix.net/final-years-pic-IqcR3CjJ.jpg",
  "https://techkriti-998488275.imgix.net/ravindra-sir-BWXDFUt3.jpg",
  "https://techkriti-998488275.imgix.net/staff-state-dance-CtvbDPTZ.jpg",
  "https://techkriti-998488275.imgix.net/srilakshmi-madam-stage-uP9MiiFg.jpg",
  "https://techkriti-998488275.imgix.net/technical-event-BNOgxlP-.jpg",
  "https://techkriti-998488275.imgix.net/Poster-Presentation-C-Kg2EKr.jpg",
  "https://techkriti-998488275.imgix.net/abcd-dance-2-EhvzulFC.jpg",
  "https://techkriti-998488275.imgix.net/Krishna-Murthy-CZtJ1LHb.jpg",
  "https://techkriti-998488275.imgix.net/Aruna-Cvsz6DiK.jpg",
  "https://techkriti-998488275.imgix.net/dance-Dk1CPaMh.jpg",
  "https://techkriti-998488275.imgix.net/pradeep-sir-D-zhbb4F.jpg",
  "https://techkriti-998488275.imgix.net/abcd-dance-1-CB0qs3FN.jpg",
  "https://techkriti-998488275.imgix.net/girls-enjoyment-Dq62p3c-.jpg",
  "https://techkriti-998488275.imgix.net/staff-8sqmBUKS.jpg"
];

const Album = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h1 className="main-heading">TechKriti 2K25 Album</h1>

      <div className="gallery-grid">
        {imageUrls.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="gallery-img"
            onClick={() => setSelectedImage(image)} // Open image in modal
          />
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
            <img src={selectedImage} alt="Enlarged" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
