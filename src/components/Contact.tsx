import React from "react";
import GoogleMapReact from "google-map-react";

// Define a functional React component named "Contact"
const Contact: React.FC = () => {
  // Interface for specifying coordinates
  interface Coords {
    lat: number;
    lng: number;
  }

  // Interface for default properties of the Google Map
  interface DefaultProps {
    center: Coords;
    zoom: number;
  }

  // Default properties for the Google Map
  const defaultProps: DefaultProps = {
    center: {
      lat: 17.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <section id="contact" className="h-auto w-screen bg-[#383838]">
      <div className="h-auto w-screen flex flex-col lg:flex-row">
        {/* Left side of the contact section with form */}
        <div className="h-auto w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center py-5 lg:py-0 pl-5 pr-5 lg:pr-24">
          <h1 className="uppercase text-white font-semibold text-4xl mb-10">
            Get in <span className="text-yellow-400">touch</span>
          </h1>
          <form className="flex flex-col items-center lg:items-start justify-center w-full text-white">
            {/* Form inputs */}
            <input className="w-full pl-10 py-4 border-b-2 border-slate-300 rounded-lg bg-transparent active:outline-none focus:outline-none mb-10" placeholder="Name"/>
            <input className="w-full pl-10 py-4 border-b-2 border-slate-300 rounded-lg bg-transparent active:outline-none  focus:outline-none mb-10" placeholder="Email"/>
            <input className="w-full pl-10 py-4 border-b-2 border-slate-300 rounded-lg bg-transparent active:outline-none focus:outline-none mb-10" placeholder="Phone"/>
            <input className="w-full pl-10 py-10 border-b-2 border-slate-300 rounded-lg bg-transparent active:outline-none active:border-b-2 focus:outline-none mb-10" placeholder="Message"/>
            {/* Submit button */}
            <button type="submit" className="uppercase bg-yellow-400 text-black py-3 px-8 rounded-md font-semibold hover:bg-yellow-700 transition-all duration-200">Send</button>
          </form>
        </div>
        {/* Right side of the contact section with Google Map */}
        <div className="h-[75vh] w-full lg:w-1/2">
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
