import React, { useState, useEffect, useRef } from "react";
import care2 from "../Assets/care2-unscreen.gif";
import care3 from "../Assets/care3-unscreen.gif";
import heart from "../Assets/heart-unscreen.gif";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at the first "real" slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalSlides = 3; // Number of unique slides
  const slideInterval = 3000;
  const slidesRef = useRef(null);

  // Auto slide change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, []);

  // Handle slide transition and infinite loop effect
  useEffect(() => {
    const slides = slidesRef.current;

    // Infinite loop logic
    if (currentSlide === 0) {
      // Transitioned to the last duplicate, reset to the last real slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides);
      }, 500);
    } else if (currentSlide === totalSlides + 1) {
      // Transitioned to the first duplicate, reset to the first real slide
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
    } else {
      setIsTransitioning(true);
    }

    // Apply the transition styles
    slides.style.transition = isTransitioning
      ? "transform 0.7s ease-in-out"
      : "none";
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, [currentSlide, totalSlides]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index + 1); // Offset by 1 due to duplicate slides
  };

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <div id="slides" className="flex" ref={slidesRef}>
        {/* Clone of Last Slide */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-36">
              BLOODBOND
            </h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-7xl">
              Cares about you!!
            </h1>
          </div>
          <div>
            <img className="h-40 md:h-80 w-auto" src={care3} alt="" />
          </div>
        </div>

        {/* Slide 1 */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-36">
              BLOODBOND
            </h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-7xl">
              Protects you!!
            </h1>
          </div>
          <div>
            <img className="h-36 md:h-48 w-auto" src={heart} alt="" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-40">
              BE A DONOR
            </h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-8xl">
              Be a Warrior!!
            </h1>
          </div>
          <div>
            <img className="h-40 md:h-72 w-auto" src={care2} alt="" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-36">
              BLOODBOND
            </h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-7xl">
              Cares about you!!
            </h1>
          </div>
          <div>
            <img className="h-40 md:h-80 w-auto" src={care3} alt="" />
          </div>
        </div>

        {/* Clone of First Slide */}
        <div className="slide flex items-center gap-2 md:gap-14 mt-10 w-full flex-none">
          <div className="flex flex-col gap-2 ml-10 md:ml-36 mt-8">
            <h1 className="flex items-center justify-center bg-red-900 ubuntu-bold p-2 text-white text-sm md:text-xl h-10 md:h-12 w-28 md:w-36">
              BLOODBOND
            </h1>
            <h1 className="seaweed-script-regular text-black text-2xl md:text-7xl">
              Protects you!!
            </h1>
          </div>
          <div>
            <img className="h-36 md:h-48 w-auto" src={heart} alt="" />
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`indicator w-2.5 h-2.5 rounded-full ${
              (currentSlide - 1) % totalSlides === index
                ? "bg-black"
                : "bg-gray-600"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
