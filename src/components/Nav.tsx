import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Nav: React.FC = () => {
  // Define a state variable to control the mobile menu
  const [openedMenu, setOpenedMenu] = useState(false);

  // Function to toggle the mobile menu
  const menuOpenHandler = () => {
    setOpenedMenu((prev) => !prev);
  };

  return (
    <>
      {/* Desktop navigation bar */}
      <nav className="text-white w-screen h-[7.5%] bg-black flex-row items-center justify-center overflow-x-hidden hidden lg:flex">
        <div className="flex flex-row justify-between items-center max-w-[114rem] w-[85vw] min-w-[50rem] h-full">
          <div className="w-40 h-1/2 bg-white">asd</div> {/* Placeholder logo */}
          <div className="h-full w-fit flex flex-row items-center justify-left">
            {/* Links for various sections using ScrollLink */}
            <ScrollLink
              to=""
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="mr-[2.1rem] border-b-2 border-black h-full flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[1rem] font-medium transition-all duration-300"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="mr-[2.1rem] border-b-2 border-black h-full flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[1rem] font-medium transition-all duration-300"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="courses"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="mr-[2.1rem] border-b-2 border-black h-full flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[1rem] font-medium transition-all duration-300"
            >
              Courses
            </ScrollLink>
            <ScrollLink
              to="coaches"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="mr-[2.1rem] border-b-2 border-black h-full flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[1rem] font-medium transition-all duration-300"
            >
              Trainers
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
              className="mr-[2.1rem] border-b-2 border-black h-full flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[1rem] font-medium transition-all duration-300"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </nav>

      {/* Mobile navigation bar */}
      <nav className="absolute text-white w-screen h-[7.5%] bg-black flex-row items-center justify-between px-8 overflow-x-hidden flex lg:hidden">
        <div className="w-40 h-1/2 bg-white">asd</div> {/* Placeholder logo */}
        <div className="flex flex-col cursor-pointer z-10" onClick={menuOpenHandler}>
          {/* Hamburger icon for mobile menu */}
          <div className="w-8 h-1 bg-white rounded-full mb-2"></div>
          <div className="w-8 h-1 bg-white rounded-full mb-2"></div>
          <div className="w-8 h-1 bg-white rounded-full"></div>
        </div>
      </nav>

      {/* Mobile menu (hidden by default, shown on menuOpenHandler) */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center bg-black z-20 duration-300 transition-all ${
          openedMenu ? "left-0" : "left-[-100vw]"
        }`}
      >
        <button
          className="absolute right-8 top-3 text-[4rem] cursor-pointer"
          onClick={menuOpenHandler}
        >
          {/* Close button for mobile menu */}
          <div className="w-8 h-1 bg-white rounded-full mb-3 rotate-45 translate-y-4"></div>
          <div className="w-8 h-1 bg-white rounded-full mb-3 rotate-[-45deg]"></div>
        </button>
        {/* Mobile links for various sections using ScrollLink */}
        <ScrollLink
          to=""
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          onClick={menuOpenHandler}
          className="border-b-2 border-black h-[10%] flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[2rem] font-medium transition-all duration-300"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          onClick={menuOpenHandler}
          offset={-50}
          className="border-b-2 border-black h-[10%] flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[2rem] font-medium transition-all duration-300"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          onClick={menuOpenHandler}
          offset={-50}
          className="border-b-2 border-black h-[10%] flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[2rem] font-medium transition-all duration-300"
        >
          Courses
        </ScrollLink>
        <ScrollLink
          to="coaches"
          spy={true}
          smooth={true}
          duration={500}
          onClick={menuOpenHandler}
          offset={-50}
          className="border-b-2 border-black h-[10%] flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[2rem] font-medium transition-all duration-300"
        >
          Trainers
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          onClick={menuOpenHandler}
          offset={-50}
          className="border-b-2 border-black h-[10%] flex justify-center items-center text-center hover:border-yellow-400 text-white cursor-pointer text-[2rem] font-medium transition-all duration-300"
        >
          Contact
        </ScrollLink>
      </div>
    </>
  );
};

export default Nav;
