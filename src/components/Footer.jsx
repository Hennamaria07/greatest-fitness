import React from 'react';
import { Logo, fb, ig, x, yt } from '../assets/images';
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <>
    <footer className='py-12 px-8'>
        <div className='sm:flex pb-5 border-bottom items-center'>
            <img src={Logo} alt='' />
    <div className="grid gap-2 ms-auto lg:pt-2 pt-4 grid-cols-3 lg:grid-cols-5">
    <Link to="home" spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500} className={`block cursor-pointer py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Home</Link>
        <Link to="services" spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500} className={`block cursor-pointer py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Services</Link>
        <Link to="facility" spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500} className={`block cursor-pointer py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 mx-2 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Facility</Link>
        <Link to="about" spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500} className={`block cursor-pointer py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>About</Link>
        <Link to="contact" spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500} className={`block cursor-pointer py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Contact</Link>
    </div>
        </div>
        <div className="sm:flex items-center pt-5">
            <div className="grid grid-cols-4 gap-6">
                <img src={ig} className='cursor-pointer' alt="" />
                <img src={x} className='cursor-pointer' alt="" />
                <img src={fb} className='cursor-pointer' alt="" />
                <img src={yt} className='cursor-pointer' alt="" />
            </div>
            <div className="ms-auto sm:pt-0 pt-4">
                <p className='text-green-700 font-medium'>Copyright 2024 | All Rights Reserved</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
