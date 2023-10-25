import React from 'react';
import bannerImg from '../assets/offer-img.webp';

// Define a functional React component named "Banner"
const Banner: React.FC = () => {
  return (
    <section className='w-screen h-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* Left side of the banner */}
        <div className='w-full lg:w-1/2 bg-[#262626] text-white flex flex-col items-center lg:items-start justify-center px-10 py-10 lg:py-0'>
          {/* Banner title */}
          <h1 className='uppercase text-2xl text-center lg:text-left lg:text-3xl font-semibold mb-5'>
            Special offer this summer: get full benefits for a year with a 20% discount
          </h1>
          {/* Banner description text */}
          <p className='mb-5 text-base text-center lg:text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem amet quas repellendus esse natus.
          </p>
          {/* Button to become a member */}
          <button className='uppercase bg-yellow-400 rounded-md text-black font-semibold px-7 py-2 hover:bg-yellow-600 transition-all duration-300 hover:rounded-xl'>
            Become a member
          </button>
        </div>
        
        {/* Right side of the banner - displays an image with an overlay */}
        <div className='w-full lg:w-1/2 relative'>
          <img src={bannerImg} className='w-full h-full' alt='Special Offer Banner' />
          {/* Semi-transparent yellow overlay */}
          <div className='absolute top-0 right-0 left-0 bg-yellow-200 bg-opacity-40 w-full h-full' style={{ opacity: 10 }}></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
