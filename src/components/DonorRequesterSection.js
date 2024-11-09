import React from 'react';

const DonorRequesterSection = () => {  
  return (
    <div className="bg-[url('/src/Assets/bloodCell.png')] w-full h-80 md:h-96 bg-cover">
      <div className="flex justify-center mt-12">
        <h1 className="ubuntu-medium text-xl md:text-5xl ">Be a <span className="seaweed-script-regular text-2xl md:text-8xl">Hero</span> give <span className="text-red-900">Blood</span></h1>
      </div>
      {/* Buttons div starts here */}
       <div className="flex flex-col md:flex-row gap-5 md:gap-12 mt-7 items-center md:justify-center md:mt-12">
        <button className="ubuntu-medium text-white bg-red-900 h-16 w-40 md:w-52 md:text-xl">BECOME A DONOR</button>
        <button className="ubuntu-medium text-white bg-red-900 h-16 w-40 md:w-52 md:text-xl">FIND A DONOR</button>
       </div>
      {/* Buttons div ends here */}
    </div>
  );
};

export default DonorRequesterSection;