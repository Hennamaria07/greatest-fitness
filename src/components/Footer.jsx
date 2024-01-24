import React from 'react';
import { Logo, fb, ig, x, yt } from '../assets/images';
import { HashLink } from 'react-router-hash-link';


const Footer = () => {
  return (
    <>
    <footer className='py-12 px-8'>
        <div className='sm:flex pb-5 border-bottom items-center'>
            <img src={Logo} alt='' />
    <div className="grid gap-2 ms-auto lg:pt-2 pt-4 grid-cols-3 lg:grid-cols-5">
    <HashLink to="/#home" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Home</HashLink>
        <HashLink to="/#services" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Services</HashLink>
        <HashLink to="/#facility" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 mx-2 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Facility</HashLink>
        <HashLink to="/#about" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>About</HashLink>
        <HashLink to="/#contact"className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Contact</HashLink>
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
