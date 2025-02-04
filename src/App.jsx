import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Events from '../src/Pages/Events.jsx';
import Contact from '../src/Pages/Contact.jsx';
import SignIn from '../src/Pages/Register.jsx';
import Root from './Pages/Root.jsx';
import Home from './Pages/Home.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />} /> 
        <Route path="/home" element={<Home/>} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
