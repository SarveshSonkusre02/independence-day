import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/History';
import Opinions from './pages/Present';
import Photos from './pages/Future';
import Footer from './components/Footer'; // Import Footer
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<About />} />
        <Route path="/present" element={<Opinions />} />
        <Route path="/future" element={<Photos />} />
      </Routes>
      <Footer /> {/* Include Footer */}
    </Router>
  );
}

export default App;
