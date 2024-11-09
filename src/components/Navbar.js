import React from 'react';
import logo from "../Assets/BloodBond_noBg.png"
const Navbar = ({ horiNavVisibility, handleBarClick, handleNavCross }) => {
const horiNav=document.querySelector("#horizontalNav");
  
  const barClick = () => {
    horiNav.classList.remove("hidden");
  }
  
  const navCross = () => {
    horiNav.classList.toggle("hidden");
  }
  return (
    <div>
        <div
      className="w-full h-9 bg-red-900 flex items-center justify-start overflow-hidden"
    >
      <h1 className="text-base text-white ubuntu-light content px-5">
        Be the reason for someone's life
      </h1>
      <h1 className="text-base text-white ubuntu-light content px-5">
        Be the reason for someone's life
      </h1>
      <h1 className="text-base text-white ubuntu-light content px-5">
        Be the reason for someone's life
      </h1>
      <h1 className="text-base text-white ubuntu-light content px-5">
        Be the reason for someone's life
      </h1>
      <h1 className="text-base text-white ubuntu-light content px-5">
        Be the reason for someone's life
      </h1>
      <h1 className="text-base text-white ubuntu-light content px-5">
        Be the reason for someone's life
      </h1>
    </div>
    <div class="flex items-center md:hidden justify-between h-16 shadow-lg">
      <img
        src={logo}
        alt="BloodBond_logo"
        className="object-cover w-auto h-20 ml-2"
      />
      <button className="md:hidden mr-2" onClick={barClick}>
        <i className="fa-solid fa-bars text-black text-2xl"></i>
      </button>
    </div>
      {/* ... Navbar HTML structure, using Tailwind CSS classes */}
      <div className="hidden md:flex justify-between w-full h-20 shadow-lg items-center">
      <div className="flex gap-4 items-center ml-4">
        <img
          src={logo}
          alt="BloodBond_logo"
          className="h-24 w-auto"
        />
        <ul className="flex gap-7 ubuntu-medium text-red-900 text-base">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div className="flex gap-4 items-center mr-24">
        <button className="bg-red-900 text-white ubuntu-bold text-base py-2 px-4">
          Find Donor
        </button>
        <button className="bg-red-900 text-white ubuntu-bold text-base py-2 px-4">
          Login
        </button>
      </div>
    </div>

      {/* ... Small and medium screen navbar */}
      <div id="horizontalNav" className={`fixed md:hidden ${horiNavVisibility ? 'block' : 'hidden'} bg-white inset-0 z-30 max-w-full ubuntu-medium`}>
      
      <div
        className="w-full h-9 bg-red-900 flex items-center justify-start overflow-hidden"
      >
        <h1 className="text-base text-white ubuntu-light content px-5">
          Be the reason for someone's life
        </h1>
        <h1 className="text-base text-white ubuntu-light content px-5">
          Be the reason for someone's life
        </h1>
        <h1 className="text-base text-white ubuntu-light content px-5">
          Be the reason for someone's life
        </h1>
        <h1 className="text-base text-white ubuntu-light content px-5">
          Be the reason for someone's life
        </h1>
        <h1 className="text-base text-white ubuntu-light content px-5">
          Be the reason for someone's life
        </h1>
        <h1 class="text-base text-white ubuntu-light content px-5">
          Be the reason for someone's life
        </h1>
      </div>
      <div>
        <div id="nav-bar" class="flex justify-between">
          <a href="#" id="brand" class="flex gap-2 items-center">
            <img
              className="object-cover w-auto h-20 ml-2"
              src="/src/Assets/BloodBond_noBg.png"
              alt=""
            />
          </a>
          <button className="p-2 md:hidden" onClick={navCross}>
            <i className="fa-solid fa-xmark text-gray-950 text-xl"></i>
          </button>
        </div>
        <div className="mt-6">
          <a
            href="#projectsection"
            onClick={navCross}
            className="hover:bg-gray-50 block rounded-xl m-3 p-3 font-medium lsFont"
            >Home</a
          >
          <a
            href="https://drive.google.com/file/d/1nQOn_qUOfeY2GjqwHYs4cqW-bd8T1Etp/view?usp=sharing"
            onClick={navCross}
            className="hover:bg-gray-50 block rounded-xl m-3 p-3 font-medium lsFont"
            >About Us</a
          >
          <a
            href="#footersection"
            onClick={navCross}
            className="hover:bg-gray-50 block rounded-xl m-3 p-3 font-medium lsFont"
            >Contact Us</a
          >
        </div>
        <div className="block h-[1px] bg-gray-100"></div>
        {/* Buttons starts here */}
        <ul
          className="text-gray-500 text-2xl sm:text-4xl flex justify-center gap-7 mt-5"
        >
          <button className="bg-red-900 text-white ubuntu-bold text-base py-2 px-4">
            Find Donor
          </button>
          <button className="bg-red-900 text-white ubuntu-bold text-base py-2 px-4">
            Login
          </button>
        </ul>
        {/* Buttons ends here */}
      </div>
    </div>
    </div>
  ); 
};

export default Navbar;