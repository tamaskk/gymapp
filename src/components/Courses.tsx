import React from "react";

// Import the CourseCard component
import CourseCard from "./courseCard";

// Import images for various courses
import courses1 from "../assets/courses-TRX.webp";
import courses2 from "../assets/courses-bodybuilding.webp";
import courses3 from "../assets/courses-boxing.webp";
import courses4 from "../assets/courses-crossfit.webp";
import courses5 from "../assets/courses-fitness.webp";
import courses6 from "../assets/courses-gymnastic.webp";

// Define a functional React component named "Courses"
const Courses: React.FC = () => {
  return (
    <section id="courses" className="h-auto w-full bg-[#383838] px-10 lg:px-32 max-w-[133rem] flex flex-col justify-center items-center py-20">
      {/* Section title */}
      <h1 className="uppercase font-semibold text-white text-4xl border-b-2 border-yellow-400 pb-2">
        Our courses
      </h1>
      {/* Section description */}
      <p className="text-white py-10 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ducimus
        illum corporis magni voluptas, ex eum dolorum quia officia! Deleniti
        quia ut.
      </p>
      <div className="w-5/6 gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {/* Render CourseCard components for each course */}
        <CourseCard
          title="TRX"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa"
          picture={courses1}
        />
        <CourseCard
          title="Bodybuilding"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa"
          picture={courses2}
        />
        <CourseCard
          title="Boxing"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa"
          picture={courses3}
        />
        <CourseCard
          title="Crossfit"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa"
          picture={courses4}
        />
        <CourseCard
          title="Fitness"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa"
          picture={courses5}
        />
        <CourseCard
          title="Gymnastic"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione culpa"
          picture={courses6}
        />
      </div>
    </section>
  );
};

export default Courses;
