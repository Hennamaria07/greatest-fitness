import React from 'react';
import contactIcon from '../assets/images/Contact-icon.svg';

const Contact = () => {
  return (
    <>
    <section id='contact' className='min-h-96'>
    <div className="row pt-16">
        <div className="col py-24 px-6 contact-bg">
            <div className="box mx-auto rounded-lg p-12 bg-white">
                <h5 className='text-gray-700 font-bold text-justify text-4xl'>Free 30-Day Membership</h5>
                <p className='py-5 text-green-700'>At arcu neque aliquet laoreet. Id egestas mauris tincidunt ut nulla cras. Non eget sem curabitur vehicula diam integer. Magna tortor dignissim imperdiet pulvinar ante sed metus consequat in. Feugiat id ipsum lacinia nec nunc odio pellentesque.</p>
                <div className="flex gap-2">
                <button type="button" className="focus:outline-none font-semibold text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-md text-sm p-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Book A Session</button>
                <button type="button" className="font-semibold focus:outline-none text-custom-green bg-transperant hover:border border-green-700 font-medium rounded-md text-sm p-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><span className='flex items-center gap-2'>
                <span>Contact Us</span>
                <img src={contactIcon} alt="Contact icon" />
                </span>
                </button>
                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Contact