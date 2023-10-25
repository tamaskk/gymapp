import React from "react";

// Import social media icons from image assets
import facebook from "../assets/logo-facebook.svg";
import instagram from "../assets/logo-instagram.svg";
import twitter from "../assets/logo-twitter.svg";
import whatsapp from "../assets/logo-whatsapp.svg";

// Define a functional React component named "Footer"
const Footer: React.FC = () => {
  return (
    <footer className="h-auto w-screen py-10 lg:py-32 px-8 lg:px-64 bg-[#282828] text-white">
      <div className="flex flex-col lg:flex-row items-start justify-between pb-8">
        {/* Left section with contact information and social media */}
        <div className="flex flex-col lg:flex-col items-center lg:items-start justify-center w-full lg:w-1/3 mb-20 lg:mb-0">
          <div className="w-40 h-7 bg-white mb-8"></div>
          <p className="mb-2">100 Nallin Street, New York</p>
          <p className="mb-2">+00 000 000 00</p>
          <p className="mb-2">KTFitness@domain.com</p>
          <div className="flex">
            <img src={facebook} /> {/* Display a Facebook icon */}
          </div>
        </div>
        {/* Middle section with quick links */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center mb-20 lg:mb-0">
          <h3 className="text-xl mb-10 font-semibold">Quick Links</h3>
          <p className="mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer">
            <span className="text-yellow-400">-&gt;</span> Home
          </p>
          <p className="mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer">
            <span className="text-yellow-400">-&gt;</span> About
          </p>
          <p className="mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer">
            <span className="text-yellow-400">-&gt;</span> Courses
          </p>
          <p className="mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer">
            <span className="text-yellow-400">-&gt;</span> Trainers
          </p>
          <p className="mb-4 hover:text-yellow-400 transition-all duration-300 cursor-pointer">
            <span className="text-yellow-400">-&gt;</span> Contact
          </p>
        </div>
        {/* Right section with newsletter subscription */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center">
          <h3 className="text-xl mb-10 font-semibold">Newsletter</h3>
          <p className="mb-5 text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nisi!
          </p>
          <div className="flex flex-row w-full">
            <input type="text" className="py-3 pl-8 w-full" placeholder="example@domain.com" />
            <button className="py-1 px-3 text-3xl bg-black text-yellow-400 font-bold flex items-center justify-center text-center">
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border border-white mb-10"></div>
      <div className="w-full flex flex-col items-center justify-center">
        <p className="mb-4">Copyright © by KT</p>
        <div className="w-10 h-10 bg-white rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
