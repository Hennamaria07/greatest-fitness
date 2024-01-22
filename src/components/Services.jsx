import React from 'react';
import MyCarousel from './MyCarousel';


export const Services = () => {

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
    </div>
    </section>
   </>
  )
}
