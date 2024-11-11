import React from 'react';
import logo from "../Assets/BloodBond_noBg.png";
import heartbeat3 from "../Assets/heartbeat3.png.crdownload";
import heart from "../Assets/heartbeat1.png";
const Footer = () => {
  return (
    <div className="mt-5 h-auto md:h-72 bg-[url('https://t3.ftcdn.net/jpg/02/62/65/20/360_F_262652000_Vm0XlmMMDuEGgJ2H1sMXQcxa2vU34RuQ.jpg')] md:bg-[url('https://wallpaperaccess.com/full/3272197.jpg')] bg-cover">

      <div class="flex flex-col md:flex-row justify-evenly items-center">
        {/* Column 1 */}
        <div class="flex flex-col items-center">
        <img class="object-cover w-auto h-36" src={logo} alt="BloodBond_logo"/>
        {/* Social icons div */}
        <div class="flex gap-4 text-red-950 md:text-2xl">
          <i class="fa-brands fa-x-twitter cursor-pointer hover:text-black"></i>
          <i class="fa-brands fa-facebook cursor-pointer hover:text-black"></i>
          <i class="fa-brands fa-instagram cursor-pointer hover:text-black"></i>
          <i class="fa-brands fa-linkedin-in cursor-pointer hover:text-black"></i>
        </div>
        </div>

       {/* Column 2 */}
       <div class="flex flex-col gap-4 my-6 -ml-3 md:-ml-0 md:my-0">
        <div>
          <a class="text-red-950 ubuntu-bold" href="">Contact</a>
          <div class="h-[2px] w-16 bg-red-900"></div>
        </div>
        <div class="flex flex-col gap-2">
          <a class="text-red-900 ubuntu-medium" href="">Call</a>
          <a class="text-red-900 ubuntu-medium" href="">Loaction</a>
        </div>
       </div>

       {/* Column 3 */}
       <div class="flex flex-col gap-4">
        <div>
          <a class="text-red-950 ubuntu-bold" href="">Navigation</a>
          <div class="h-[2px] w-16 bg-red-900"></div>
        </div>
        <div class="flex flex-col gap-2">
          <a class="text-red-900 ubuntu-medium" href="">Home</a>
          <a class="text-red-900 ubuntu-medium" href="">About Us</a>
        </div>
       </div>
       {/* Column 3 ends */}

       {/* column 4 */}
        <img class="hidden md:block mt-5" src={heartbeat3} alt=""/>
        <img class="md:hidden" src={heart} alt=""/>
       {/* Column 4 ends here */}
      </div>
    </div>
  );
};

export default Footer;