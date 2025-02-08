import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Pages/Root.jsx";
import TechnicalEvents from "./Pages/Technicalevents.jsx";
import CulturalEvents from "./Pages/CulturalEvents.jsx";
import Contact from "./Pages/Contact.jsx";
import Sports from "./Pages/Sports.jsx";
import About from "./Pages/About.jsx";
import Footer from "./Components/Footer.jsx";
import Feedback from "./Pages/Feedback.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
        <Route path="/technicalevents" element={<TechnicalEvents />} />
        <Route path="/culturalevents" element={<CulturalEvents />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
