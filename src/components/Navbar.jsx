'use client';
import React, { useEffect, useState } from 'react';
import logo from '../assets/images/PrimaryLogo.svg';
import cartIcon from '../assets/images/solar_cart-bold.svg';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
// import { Navbar, Button } from 'flowbite-react';

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


<Navbar fluid className={`fixed w-full z-20 top-0 start-0 h-16 border-gray-200 ${scrolling ? 'bg-white dark:bg-gray-900' : 'bg-transparent'}  transition-all duration-300 ease-in-out`}>
<Link to="home" 
      spy={true} 
      smooth={true} 
      offset={100} 
      duration={500}  className="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-14 md:w-36 lg:w-52 w-52" alt="Website Logo" />
  </Link>
      <div className="flex md:order-2">
      <NavLink to='/signup'><button type="button" className="md:flex hidden items-center cursor-pointer lg:text-md gap-2 focus:outline-none text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-lg text-sm md:text-xs md:px-2 lg:px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    Sign up
  </button></NavLink>
      <NavLink to='/login'><button type="button" className="md:flex hidden items-center cursor-pointer lg:text-md md:text-xs text-md gap-2 focus:outline-none text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-lg text-sm md:px-2 lg:px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    Log in
  </button></NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='md:bg-transparent bg-white'>
      <Link to="home"
      smooth={true} 
      offset={100} 
      duration={500} className={`block py-2 px-3 lg:text-lg md:text-xs text-sm md:p-0 cursor-pointer text-gray-800 rounded md:hover:bg-transparent hover:bg-[#5F6F52] md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Home</Link>
        <Link to="services" 
      spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500}
      className={`block py-2 px-3 md:p-0 lg:text-lg md:text-xs text-sm text-gray-800 cursor-pointer rounded md:hover:bg-transparent hover:bg-[#5F6F52] md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-white dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Services</Link>
        <Link to="facility"  spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500} className={`block py-2 lg:text-lg md:text-xs text-sm px-3 md:p-0 cursor-pointer text-gray-800 rounded md:hover:bg-transparent hover:bg-[#5F6F52] md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Our Facility</Link>
        <Link to="about"  spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500} className={`block py-2 lg:text-lg md:text-xs text-sm px-3 md:p-0 cursor-pointer text-gray-800 rounded md:hover:bg-transparent hover:bg-[#5F6F52] md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>About</Link>
        <Link to="contact"  spy={true} 
      smooth={true} 
      offset={-20} 
      duration={500} className={`block py-2 lg:text-lg md:text-xs text-sm px-3 md:p-0 cursor-pointer text-gray-800 rounded md:hover:bg-transparent hover:bg-[#5F6F52] md:hover:text-gray-950 md:dark:hover:text-gray-900 active:text-green-700 active:font-bold dark:text-white dark:hover:bg-gray-700 dark:hover:text-white hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${window.location.hash === '#home' ? 'active' : ''}`}>Contact</Link>
      <NavLink to='/signup'><button type="button" className="md:hidden block mx-3 mt-2 items-center cursor-pointer lg:text-md md:text-sm text-md gap-2 focus:outline-none text-white hover:text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-lg text-sm md:px-2.5 px-5 lg:px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    Sign up
  </button></NavLink>
      <NavLink to='/login'><button type="button" className="md:hidden block mx-3 my-2 items-center cursor-pointer lg:text-md md:text-sm text-md gap-2 focus:outline-none text-white hover:text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-lg text-sm md:px-2.5 px-5 lg:px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    Log in
  </button></NavLink>
      </Navbar.Collapse>
    </Navbar>



    </>
  )
}

export default NavBar
