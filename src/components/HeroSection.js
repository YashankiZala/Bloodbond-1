import React, { useState, useEffect } from 'react';
import care2 from "../Assets/care2-unscreen.gif";
import care3 from "../Assets/care3-unscreen.gif";
import heart from "../Assets/heart-unscreen.gif";
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;
  const slideInterval = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [totalSlides, slideInterval]);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <div id="slides" className="flex transition-transform duration-700 ease-in-out">
        {/* Clone of Slide 3 for smooth looping */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-36">BLOODBOND</h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-7xl">Cares about you!!</h1>
          </div>
          <div><img className="w-40 h-auto md:h-80 md:w-auto" src={care3} alt=""/></div>
        </div>
    
        {/* Slide 1 */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-36">BLOODBOND</h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-7xl z-30">Protects you!!</h1>
          </div>
          <div><img className="h-36 md:h-48 w-auto" src={heart} alt=""/></div>
        </div>
    
        {/* Slide 2 */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-40">BE A DONOR</h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-8xl">Be a Warrior!!</h1>
          </div>
          <div><img className="h-40 md:h-72 w-auto" src={care2} alt=""/></div>
        </div>
    
        {/* Slide 3 */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-36">BLOODBOND</h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-7xl">Cares about you!!</h1>
          </div>
          <div><img className="h-40 md:h-80 w-auto" src={care3} alt=""/></div>
        </div>
    
        {/* Clone of Slide 1 for smooth looping */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-36">BLOODBOND</h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-7xl">Protects you!!</h1>
          </div>
          <div><img className="h-36 md:h-48 w-auto" src={heart} alt=""/></div>
        </div>
      </div>
    
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button className="indicator w-2.5 h-2.5 rounded-full bg-gray-600" onClick="setSlide(1)"></button>
        <button className="indicator w-2.5 h-2.5 rounded-full bg-gray-600" onClick="setSlide(2)"></button>
        <button className="indicator w-2.5 h-2.5 rounded-full bg-gray-600" onClick="setSlide(3)"></button>
      </div>
    </div>
  );
};

export default HeroSection;