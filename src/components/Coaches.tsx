import React from "react";

// Import the CoachCard component
import CoachCard from "./coachCard";

// Import images of coaches
import coach1 from "../assets/coache-1.webp";
import coach2 from "../assets/coache-2.webp";
import coach3 from "../assets/coache-3.webp";

// Define a functional React component named "Coaches"
const Coaches: React.FC = () => {
  return (
    <section id="coaches" className="w-screen h-auto flex flex-col items-center justify-start bg-[#383838] py-20 overflow-x-hidden">
      {/* Section title */}
      <h1 className="uppercase font-semibold text-white text-4xl border-b-2 border-yellow-400 pb-2">
        Our coaches
      </h1>
      {/* Section description */}
      <p className="text-white py-10 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ducimus
        illum corporis magni voluptas, ex eum dolorum quia officia! Deleniti
        quia ut.
      </p>
      <div className="w-4/6 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {/* Render CoachCard components with information for each coach */}
        <CoachCard
          name="Mark Bertul"
          img={coach1}
          profession="Body Building"
          type="strongman"
        />
        <CoachCard
          name="Serio Mike"
          img={coach2}
          profession="Cardio Expert"
          type="cardio"
        />
        <CoachCard
          name="Sven Mieke"
          img={coach3}
          profession="Fitness Coach"
          type="powerlifting"
        />
      </div>
    </section>
  );
};

export default Coaches;
