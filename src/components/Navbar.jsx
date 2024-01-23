import React, { useEffect, useState } from 'react';
import logo from '../assets/images/PrimaryLogo.svg';
import cartIcon from '../assets/images/solar_cart-bold.svg';
import { HashLink } from 'react-router-hash-link';
// import { Navbar, Button } from 'flowbite-react';
'use client';
const NavBar = () => {
    const [scrolling, setScrolling] = useState(false); 
  
    useEffect(() => {
      window.addEventListener('scroll',() => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      });
    }, [scrolling]);
  return (
    <>
{/* <Navbar fluid rounded className={`fixed w-full z-20 top-0 start-0 h-16 border-gray-200 ${scrolling ? 'bg-white dark:bg-gray-900' : 'bg-transparent'}  transition-all duration-300 ease-in-out`}>
  <div className="flex flex-wrap items-center justify-between p-4">
  <HashLink to="/#home" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8" alt="Website Logo" width={"202px"} height={"40px"}/>
  </HashLink>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <button type="button" className="sm:flex hidden items-center lg:text-md md:text-sm text-md gap-2 focus:outline-none text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-lg text-sm md:px-2.5 px-5 lg:px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    <img src={cartIcon} alt="cart icon" />
    <span>Shop Now</span>
  </button>

      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between md:bg-transparent bg-white hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col lg:text-md md:text-sm text-md font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

      <li>
        <HashLink to="/#home" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Home</HashLink>
      </li>
      <li>
        <HashLink to="/#services" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Services</HashLink>
      </li>
      <li>
        <HashLink to="/#facility" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Our Facility</HashLink>
      </li>
      <li>
        <HashLink to="/#about" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>About</HashLink>
      </li>
      <li>
        <HashLink to="/#contact"className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Contact</HashLink>
      </li>
    </ul>
  </div>
  </div>
</Navbar> */}

<nav className={`fixed w-full z-20 top-0 start-0 h-16 border-gray-200 ${scrolling ? 'bg-white dark:bg-gray-900' : 'bg-transparent'}  transition-all duration-300 ease-in-out`}>
      <div className="flex flex-wrap items-center justify-between p-4">
        <HashLink to="/#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Website Logo" width={"202px"} height={"40px"} />
        </HashLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="sm:flex hidden items-center lg:text-md md:text-sm text-md gap-2 focus:outline-none text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-lg text-sm md:px-2.5 px-5 lg:px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            <img src={cartIcon} alt="cart icon" />
            <span>Shop Now</span>
          </button>

          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between md:bg-transparent bg-white hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col lg:text-md md:text-sm text-md font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <HashLink to="/#home" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Home</HashLink>
            </li>
            <li>
              <HashLink to="/#services" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#services' ? 'active' : ''}`}>Services</HashLink>
            </li>
            <li>
              <HashLink to="/#facility" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#facility' ? 'active' : ''}`}>Our Facility</HashLink>
            </li>
            <li>
              <HashLink to="/#about" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#about' ? 'active' : ''}`}>About</HashLink>
            </li>
            <li>
              <HashLink to="/#contact" className={`block py-2 px-3 md:p-0 text-gray-800 rounded md:hover:bg-transparent hover:bg-green-200 md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#contact' ? 'active' : ''}`}>Contact</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>



    </>
  )
}

export default NavBar
