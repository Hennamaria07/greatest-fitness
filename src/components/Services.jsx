import React from 'react'

export const Services = () => {
  return (
   <>
   <section id='services' className='wrapper-height'>
    <div className="container pt-16">
        <div className="row">
            <div className="col text-center">
                <h2 className='text-4xl font-bold text-gray-700'>Our Services</h2>
                <h6 className='py-1 text-sm'>Sub Heading To Explain More</h6>
            </div>
        </div>
        <div className="row py-11">
            <div className="col text-justify text-gray-800 w-72 h-96 py-24 px-9 bg-gray-200 rounded-xxl">
    <h3 className='text-2xl font-semibold'>Get Started With Your Free Trial</h3>
    <p className='text-sm leading-6 py-3'>Libero nunc facilisis auctor diam suspendisse pharetra nisi. Mauris ornare imperdiet.</p>
               <div className="flex justify-center">
               <button className='border-custom-green rounded-lg text-sm p-2 font-semibold text-custom-green'>Learn More</button>
               </div>
            </div>
        </div>
    </div>
    </section>
   </>
  )
}
