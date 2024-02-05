import React from 'react';
import MyCarousel from './MyCarousel';


const Services = () => {

  return (
   <>
   <section id='services' className='wrapper-height'>
    <div className="px-8 pt-16">
        <div className="row">
            <div className="col text-center">
                <h2 className='text-4xl font-bold text-gray-700'>Our Services</h2>
                <h6 className='py-1 text-sm'>Sub Heading To Explain More</h6>
            </div>
        </div>
        <div className="row py-11">
    <MyCarousel />
        </div>
        <div className="flex justify-center">
        <button type="button" className="focus:outline-none font-semibold text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-md text-sm p-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get Started Today</button>
        </div>
    </div>
    </section>
   </>
  )
}

export default Services
