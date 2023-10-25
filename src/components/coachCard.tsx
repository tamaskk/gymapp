import React from "react";

// Import social media icons from image assets
import facebook from '../assets/logo-facebook.svg';
import instagram from '../assets/logo-instagram.svg';
import twitter from '../assets/logo-twitter.svg';
import whatsapp from '../assets/logo-whatsapp.svg';

// Import a custom hook called useAppContext from "../utils/Maincontext"
import useAppContext from "../utils/Maincontext";

// Define the interface for the props that this component expects
interface CoachCardProps {
  name: string,      // Coach's name
  profession: string,  // Coach's profession
  img: string,        // Image URL for the coach's picture
  type: string        // Coach's exercise type
}

// Define a functional React component named "coachCard"
const CoachCard: React.FC<CoachCardProps> = ({ name, profession, img, type }) => {
  // Destructure functions from the custom hook
  const { overlayHandler, exerciseTypeHandler, random } = useAppContext()

  return (
    <article className="border-l-2 border-[#feee0b] h-auto relative group transition-all duration-300">
      <img src={img} className="w-full" onClick={() => { overlayHandler(); random(); exerciseTypeHandler(type) }}/>
      <div
        className="absolute flex flex-col items-start justify-center border-none bottom-0 left-0 w-[70%] p-2 bg-gradient-to-r from-[#feee0b] to-yellow-600 text-uppercase font-bold text-red-400 z-50"
        style={{
          WebkitClipPath: "polygon(0 0,100% 0,70% 100%,0 100%)",
          clipPath: "polygon(0 0,100% 0,70% 100%,0 100%)",
        }}
      >
        {name}
        <span className="text-black text-sm font-light">{profession}</span>
      </div>
      <div className="absolute top-0 right-0 w-0 bg-slate-800 bg-opacity-90 h-full group-hover:w-1/5 transition-all duration-700 flex flex-col justify-evenly items-center z-30 px-0 group-hover:px-4">
        {/* Social media icons */}
        <img src={facebook} className="hover:scale-125 transition-all duration-300"/>
        <img src={instagram} className="hover:scale-125 transition-all duration-300"/>
        <img src={twitter} className="hover:scale-125 transition-all duration-300"/>
        <img src={whatsapp} className="hover:scale-125 transition-all duration-300"/>
      </div>
    </article>
  );
};

export default CoachCard;
