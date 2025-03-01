import { useNavigate } from "react-router-dom";
import "./GalleryIcon.css";
import galleryIcon from "../assets/gallery-icon.png"; // Update the path to your icon

const GalleryIcon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/gallery"); // Redirect to the /gallery route
  };

  return (
    <div className="gallery-icon" onClick={handleClick}>
      <img src={galleryIcon} alt="Gallery" className="gallery-img" />
    </div>
  );
};

export default GalleryIcon;
