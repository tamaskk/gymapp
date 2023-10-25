import React from 'react';
import Nav from '../components/Nav'; // Import the Nav component
import headerBg from '../assets/header-bg-img.webp'; // Import the background image

// Define a functional React component named "Header"
const Header: React.FC = () => {

  // Define a background style object for the background image
  const backgroundStyle = {
    backgroundImage: `url(${headerBg})`, // Set the background image
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }

  return (
    <section className='w-screen h-screen overflow-y-hidden'>
      <Nav /> {/* Render the Nav component for navigation */}
      {/* Background section with image and content */}
      <div style={backgroundStyle} className='w-full h-full flex justify-center items-start'>
        <div className='flex flex-col items-center lg:items-start justify-center lg:justify-end h-full lg:h-1/2 w-full lg:w-2/3 px-10'>
          {/* Title */}
          <h1 className='uppercase text-white text-4xl font-bold text-center lg:text-left' style={{ letterSpacing: 1.5 }}>
            A place for your fitness goals
          </h1>
          {/* Subtitle */}
          <h3 className='text-white mt-8 text-center lg:text-left'>
            We Offer Functional Training, Plyometric Boxes, Aerobics classes, TRX And Much More
          </h3>
          <div className='mt-5 flex flex-col lg:flex-row items-center justify-center'>
            {/* "Join us" button */}
            <button className='mb-5 lg:mb-0 text-black bg-yellow-400 px-8 py-2 rounded-md uppercase font-medium mr-2 hover:bg-yellow-600 transition-all duration-300'>
              Join us
            </button>
            {/* "Our Service" button */}
            <button className='text-white py-2 px-12 border-2 border-yellow-400 rounded-md hover:bg-yellow-200 hover:border-yellow-200 font-medium duration-300 transition-all hover:text-black'>
              Our Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
