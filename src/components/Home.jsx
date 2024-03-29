import React from 'react';
import contactIcon from '../assets/images/Contact-icon.svg';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Session from './Session.jsx';


const Home = () => {
  return (
    <>
      <section id='home' className='home-wrapper-height home-wrapper-img flex my-auto items-center'>
        <div className="w-full px-16">
          <div className="row">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              <div className="grid-items">
                <h1 className='text-2xl sm:text-4xl lg:text-4xl xl:text-5xl text-gray-800'>YOGA FIRST <span className='block'>FITNESS ALWAYS</span></h1>
                <p className='text-justify text-custom-green leading-6 sm:leading-7 py-4 sm:py-5'>Welcome to Great Fitness, Los Angeles' premier destination for yoga and fitness enthusiasts. Nestled in the vibrant heart of the city, we offer a sanctuary where mind, body, and spirit align.</p>
                <div className="grid-sub-items">
                 
                <Session/>
                <Link to={'contact'} spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500}><button type="button" className="font-semibold focus:outline-none text-custom-green bg-transperant hover:border border-green-700 font-medium rounded-md text-sm p-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><span className='flex items-center gap-2'>
                <span>Contact Us</span>
                <img src={contactIcon} alt="Contact icon" />
                </span>
                </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home