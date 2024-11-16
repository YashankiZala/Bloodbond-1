import React from 'react'
import HeroSection from "./components/HeroSection";
import DonorRequesterSection from "./components/DonorRequesterSection";
import WeHealLivesSection from "./components/WeHealLivesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DonorRequesterSection />
      <WeHealLivesSection />
    </div>
  )
}

export default Home
