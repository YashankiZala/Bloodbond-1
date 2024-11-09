import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DonorRequesterSection from './components/DonorRequesterSection';
import WeHealLivesSection from './components/WeHealLivesSection';
import Footer from './components/Footer';

function App() {
  const [horiNavVisibility, setHoriNavVisibility] = useState(false);

  const handleBarClick = () => {
    setHoriNavVisibility(!horiNavVisibility);
  };

  const handleNavCross = () => {
    setHoriNavVisibility(false);
  };

  return (
    <div className="App">
      <Navbar horiNavVisibility={horiNavVisibility} handleBarClick={handleBarClick} handleNavCross={handleNavCross} />
      <HeroSection />
      <DonorRequesterSection />
      <WeHealLivesSection />
      <Footer />
    </div>
  );
}

export default App;