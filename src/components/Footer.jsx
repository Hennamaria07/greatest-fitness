import React from 'react';
import { Logo, fb, ig, x, yt } from '../assets/images';


const Footer = () => {
  return (
    <>
    <footer className='py-12 px-8'>
        <div className='sm:flex pb-5 border-bottom items-center'>
            <img src={Logo} alt='' />
    <div className="grid gap-2 ms-auto lg:pt-2 pt-4 grid-cols-3 lg:grid-cols-5">
        <h6>Home</h6>
        <h6>Services</h6>
        <h6 className='lg:me-10'>Our Facility</h6>
        <h6>About</h6>
        <h6>Contact</h6>
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
