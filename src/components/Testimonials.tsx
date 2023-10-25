import React from 'react'
import people1 from '../assets/review-img-1.webp'
import people2 from '../assets/review-img-2.webp'
import quote from '../assets/bg-quotes.webp'

const Testimonials: React.FC = () => {
  return (
    <section className='w-screen h-auto bg-[#282828] py-20 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-evenly'>
            <h1 className="uppercase font-semibold text-white text-4xl border-b-2 border-yellow-400 pb-2">What people say</h1>
            <div className='py-20 w-full lg:w-5/6 flex flex-col lg:flex-row items-center justify-evenly text-white'>
                {/* First Testimonial */}
                <div className='relative flex flex-col items-center justify-center px-4 lg:px-16 w-5/6 lg:w-1/2 mb-16 lg:mb-0'>
                    <img src={people1} className='rounded-full' />
                    <p className='italic text-center my-5'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente possimus aperiam
                    </p>
                    <h4 className='uppercase' style={{ letterSpacing: 1.5 }}>Cesar Rincon</h4>
                    <img src={quote} className='absolute left-0 top-[25%] lg:top-[50%]'/>
                </div>
                {/* Second Testimonial */}
                <div className='relative flex flex-col items-center justify-center px-4 lg:px-16 w-5/6 lg:w-1/2'>
                    <img src={people2} className='rounded-full' />
                    <p className='italic text-center my-5'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente possimus aperiam
                    </p>
                    <h4 className='uppercase' style={{ letterSpacing: 1.5 }}>MatHilde Langevin</h4>
                    <img src={quote} className='absolute left-0 top-[25%] lg:top-[50%]'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;
