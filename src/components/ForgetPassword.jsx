import React, { useState } from 'react'
import {loginYoga } from '../assets/images';
import instance from '../axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('');
    console.log(email);
    const validate = () => {
      const emailRegEx = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      const errors = {};

      if (email === "") {
        errors.email = "Please enter your email";
      } else if (!emailRegEx.test(email)) {
        errors.email = "Invalid email";
      }
  
      return Object.keys(errors).length === 0 ? null : errors;
    };
  
    const handleForm = async (e) => {
      e.preventDefault();
      const errors = validate() || {};
  
      if (Object.keys(errors).length > 0) {
        setEmailError(errors.email || "");
        // Stop the form submission since there are errors
        return; // This return statement stops the execution here if there are errors
      }
      setEmailError("");
      try {
        const res = await instance.post('/user/forget-password', {
            email
        },
        {
            withCredentials: true
        })
        toast.success(res.data.message, {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition:  Slide,
            theme: "colored",
          });
          
        // setTimeout(() => navigate('/'), 1000);
        }
         catch (error) {
            toast.error(error.response.data.message, {
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition:  Slide,
                theme: "colored",
              });
      }
    }
  return (
    <>
    <section>
        <div className="forget-wrapper h-screen w-screen">
            <ToastContainer />
            <div className="row grid gap-5 md:grid-cols-2 w-full h-full ">
                <div className="col md:ps-0 ps-10 w-full h-full hidden md:grid place-items-center bg-[#5F6F52]">
              <img src={loginYoga} alt="yoga imgage" />
                </div>
                <div className="col px-10 md:px-0 md:pe-5 flex justify-center items-center w-full h-full">
                <div className='w-full'>
                <h1 className='lg:text-5xl text-center text-2xl sm:text-4xl py-5 text-[#5F6F52] font-semibold'>Forgot Password</h1>
                <form className="w-full mx-auto border-2 border-[#5F6F52] p-5 sm:p-10 lg:p-5 md:p-3 rounded-lg" noValidate onSubmit={handleForm}>
                  <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-[#5F6F52] text-gray-900 text-sm rounded-lg focus:ring-[#5F6F52] focus:border-[#5F6F52] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#5F6F52] dark:focus:border-[#5F6F52]" placeholder="name@flowbite.com" onChange={(e) => { setEmail(e.target.value) }} />
                    <p className="text-red-500">{emailError}</p>
                  </div>
                  <div className="grid mb-5 place-items-center">
                    <button type="submit" className="border-[#5F6F52] border-2 hover:bg-[#5F6F52] hover:text-white px-4 py-1.5">Submit</button>
                  </div>
                </form>
                </div>
                </div>
            </div>
        </div>
    </section>

    </>
)}

export default ForgetPassword;