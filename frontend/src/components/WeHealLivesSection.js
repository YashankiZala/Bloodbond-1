import React from 'react';
import weConnect from "../Assets/weConnect.svg";
import weDonate from "../Assets/weDonate.svg";
import weEncourage from "../Assets/weEncourage.svg";

const WeHealLivesSection = () => {
  return (
    <div className="bg-white h-auto md:h-72">
      <div className="flex flex-col items-center mt-12">
        <h1 className="ubuntu-medium text-2xl md:text-5xl">We <span className="text-red-900">Heal</span> Lives</h1>
        <div className="flex flex-col gap-14 items-center md:flex-row md:justify-evenly w-full h-full mt-9">
          {/* Image 1 */}
          <div className="flex gap-4 items-center">
            <img src={weDonate} alt=""/>
            <h1 className="text-base text-red-900 font-bold">We Donate</h1>
          </div>
          {/* Image 2 */}
          <div className="flex gap-4 items-center">
            <img src={weConnect} alt=""/>
            <h1 className="text-base text-red-900 font-bold">We Connect</h1>
          </div>
          {/* Image 3 */}
          <div className="flex gap-4 items-center">
            <img src={weEncourage} alt=""/>
            <h1 className="text-base text-red-900 font-bold">We Encourage</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHealLivesSection;