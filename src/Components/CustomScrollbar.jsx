import { useState, useEffect } from "react";
import "./CustomScrollbar.css"; // Import CSS

const CustomScrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      let scrollPercent = (scrollY / totalHeight) * 100;
      
      // Ensure the indicator stays within bounds
      if (scrollPercent < 0) scrollPercent = 0;
      if (scrollPercent > 100) scrollPercent = 100;
      
      setScrollPosition(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="custom-scrollbar">
      <div
        className="scroll-indicator"
        style={{
          top: `calc(${scrollPosition}% - 30px)`, // Adjusted to keep within visible bounds
          transform: `translateY(${scrollPosition === 0 ? "0%" : scrollPosition === 100 ? "-100%" : "-50%"})`,
        }}
      ></div>
    </div>
  );
};

export default CustomScrollbar;
