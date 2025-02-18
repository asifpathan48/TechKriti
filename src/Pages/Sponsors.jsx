import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Sponsors.css";

// Import sponsor images
import Sponsor1 from "../assets/sponsors/logo1.png";
import Sponsor2 from "../assets/sponsors/logo2.jpg";
import Sponsor3 from "../assets/sponsors/logo2.png";
import Sponsor4 from "../assets/sponsors/logo4.png";
import Sponsor5 from "../assets/sponsors/logo5.png";
import Sponsor6 from "../assets/sponsors/logo6.png";
import Sponsor7 from "../assets/sponsors/logo7.png";
import Sponsor8 from "../assets/sponsors/logo8.png";
import Sponsor9 from "../assets/sponsors/logo9.png";
import Sponsor10 from "../assets/sponsors/logo10.png";
import Sponsor11 from "../assets/sponsors/logo11.jpeg";
import Sponsor12 from "../assets/sponsors/logo12.jpg";
import Sponsor13 from "../assets/sponsors/logo13.png";
import Sponsor14 from "../assets/sponsors/logo14.png";
import Sponsor15 from "../assets/sponsors/logo15.png";
import Sponsor16 from "../assets/sponsors/logo16.jpg";
import Sponsor17 from "../assets/sponsors/logo17.png";
import Sponsor18 from "../assets/sponsors/logo18.png";

const sponsors = [
  Sponsor1, Sponsor2, Sponsor3, Sponsor4, Sponsor5, Sponsor6, Sponsor7,
  Sponsor8, Sponsor9, Sponsor10, Sponsor11, Sponsor12, Sponsor13, Sponsor14,
  Sponsor15, Sponsor16, Sponsor17, Sponsor18
];

const Sponsor = ({ src, alt, link }) => {
  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="sponsor-item">
      <img src={src} alt={alt} className="sponsor-image" />
    </a>
  ) : (
    <div className="sponsor-item">
      <img src={src} alt={alt} className="sponsor-image" />
    </div>
  );
};

const Sponsors = () => {
  return (
    <div className="page-container">
      <h2 className="sponsors-title">Our Sponsors</h2>
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {sponsors.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <Sponsor 
                src={sponsor} 
                alt={`Sponsor ${index + 1}`} 
                link={sponsor === Sponsor11 ? "https://www.siliconmindstech.com/" : null} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="thank-you-text">Thank you to all our amazing sponsors for their support!</p>
    </div>
  );
};

export default Sponsors;
