import React from "react";  // Import the React library

// Import image assets for later use
import AboutImg1 from "../assets/about-img-1.webp";
import AboutImg2 from "../assets/about-img-2.webp";
import AboutImg3 from "../assets/about-img-3.webp";

// Define a functional React component named "About"
const About: React.FC = () => {
  return (
    <section id="about" className="w-screen h-full lg:h-[70vh] py-[clamp(4rem,10vw,7rem)] px-0 flex bg-[#262626]">
      {/* Start of the about section */}
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 max-w-[clamp(50rem,85vw,114rem)] px-2.4rem mx-auto">
        <div className="grid gap-8 justify-items-start max-h-full px-5 lg:pl-28">
          {/* Title for the "About" section */}
          <h1
            className="uppercase text-white font-bold text-2xl lg:text-4xl mb-10"
            style={{ lineHeight: 1.6 }}
          >
            About <span className="text-yellow-400">K</span>Fitness
          </h1>
          {/* Description text for the "About" section */}
          <p className="text-white text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dolor
            perferendis repellat ipsam fugiat dolorum possimus, modi ut est
            saepe tempora earum. Consectetur blanditiis voluptatibus, molestias
            explicabo tempora quae facilis.
          </p>
          {/* Button to read more */}
          <button className="text-white py-2 border-b-2 border-yellow-400 font-semibold hover:border-white transition-all duration-300 hover:text-yellow-400">
            Read More -&gt;
          </button>
        </div>

        <div className="p-4 min-w-full flex flex-col items-center justify-center">
          {/* Images displayed in the "About" section */}
          <div className="flex gap-[10%] justify-items-center items-center">
            <img
              src={AboutImg1}
              className="max-w-full w-[45%] h-auto border-2 border-white"
              alt="About Image 1"
            />
            <img
              src={AboutImg2}
              className="max-w-full w-[45%] h-auto border-2 border-white"
              alt="About Image 1"
            />
          </div>

          <div className="w-full flex items-center justify-center">
            <img
              src={AboutImg3}
              className="max-w-full w-[55%] h-auto mt-[-2rem] items-self-center border-4 border-yellow-400 p-1"
              alt="About Image 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;  // Export the "About" component for use in other parts of the application

