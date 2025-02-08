import React, { useEffect, useState } from "react";
import "./Preloader.css"; // Make sure you create this CSS file

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 2500); // Adjust the duration if needed
  }, []);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Preloader;
