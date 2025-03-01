import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Root from "./Pages/Root.jsx";
import TechnicalEvents from "./Pages/Technicalevents.jsx";
import CulturalEvents from "./Pages/CulturalEvents.jsx";
import Contact from "./Pages/Contact.jsx";
import Sports from "./Pages/Sports.jsx";
import About from "./Pages/About.jsx";
import Footer from "./Components/Footer.jsx";
import Feedback from "./Pages/Feedback.jsx";
import Preloader from "./Preloaders/Preloader.jsx"; // Import the new Preloader component
import './index.css';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Import Speed Insights
import Sponsors from "./Pages/Sponsors.jsx";
import GalleryIcon from "./Pages/GalleryIcon.jsx"
import Gallery from "./Pages/Gallery.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust duration as needed
  }, []);

  return (
    <Router>
      {loading ? <Preloader /> : null} {/* Show preloader while loading */}
      {!loading && ( // Render the main content only after loading is complete
        <>
        <GalleryIcon/>
          <Navbar />
          <Analytics />
          <SpeedInsights /> {/* Add Speed Insights here */}
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/about" element={<About />} />
            <Route path="/technicalevents" element={<TechnicalEvents />} />
            <Route path="/culturalevents" element={<CulturalEvents />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/gallery" element={<Gallery/>}/>
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
