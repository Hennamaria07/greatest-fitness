import React, { useState } from 'react'
import { loginYoga } from '../assets/images';
import { Link, useNavigate } from 'react-router-dom';
import instance from '../axios.js';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
 const navigate = useNavigate();
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validate = () => {
    const nameRegEx = /^[a-zA-Z\s]{5,20}$/;
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    let errors = {};

    if (name === "") {
      errors.name = "Please enter your full name";
    } else if (!nameRegEx.test(name)) {
      errors.name = "Fullname must be between 5 and 20 characters";
    }

    if (email === "") {
      errors.email = "Please enter your email";
    } else if (!emailRegEx.test(email)) {
      errors.email = "Invalid email";
    }

    if (password === "") {
      errors.password = "Please enter your password";
    } else if (!passwordRegEx.test(password)) {
      errors.password = "Password must contain at least one letter, one number, and be at least 8 characters long";
    }

    if (confirmPassword === "") {
      errors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "The password does not match";
    }

    return errors;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setNameError(errors.name || "");
      setEmailError(errors.email || "");
      setPasswordError(errors.password || "");
      setConfirmPasswordError(errors.confirmPassword || "");
      // Stop the form submission since there are errors
      return; // This return statement stops the execution here if there are errors
    }

    // If code execution reaches here, it means there are no validation errors
    // Reset any existing errors just in case
    setNameError('');
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    try {
      const res = await instance.post("/api/v1/user/sign-up", {
        fullName: name,
        email,
        password,
        confirmPassword
      });
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide,
          theme: "colored",
        })
      }
       setTimeout(() => navigate('/login'), 1000);
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "colored",
      });
    }
  };
  return (
    <>
      <section className="w-sreen h-screen">
        <div className="signup-wrapper">
          <div className="row grid md:grid-cols-2">
            <div className="h-screen hidden md:grid place-items-center bg-[#5F6F52]">
              <img src={loginYoga} alt="yoga imgage" />
            </div>
            <div className="flex justify-center items-center h-screen mx-5">
              <div>
                <div className='text-center px-7'>
                  <ToastContainer />
                  <h1 className='text-4xl pt-4 text-[#5F6F52] font-semibold xl:flex hidden'>Join the Great Fitness Family</h1>
                  <h1 className='text-xl py-2 text-[#5F6F52] font-semibold xl:hidden'>Sign up</h1>
                  <p className='py-5 text-justify text-sm text-[#5F6F52] xl:flex hidden leading-6'>Welcome to Great Fitness! Sign up now to explore yoga</p>
                </div>
                <form className="min:w-4/5  border-2 border-[#5F6F52] p-5 sm:p-10 lg:p-5 md:p-3 rounded-lg" noValidate onSubmit={handleForm}>
                  <div className="mb-5">
                    <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your fullname</label>
                    <input type="text" id="fullname" className="bg-gray-50 border border-[#5F6F52] text-gray-900 text-sm rounded-lg focus:ring-[#5F6F52] focus:border-[#5F6F52] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#5F6F52] dark:focus:border-[#5F6F52]" placeholder="John Smith" onChange={(e) => { setName(e.target.value) }} />
                    <p className="text-red-500">{nameError}</p>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-[#5F6F52] text-gray-900 text-sm rounded-lg focus:ring-[#5F6F52] focus:border-[#5F6F52] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#5F6F52] dark:focus:border-[#5F6F52]" placeholder="name@flowbite.com" onChange={(e) => { setEmail(e.target.value) }} />
                    <p className="text-red-500">{emailError}</p>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-[#5F6F52] text-gray-900 text-sm rounded-lg focus:ring-[#5F6F52] focus:border-[#5F6F52] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#5F6F52] dark:focus:border-[#5F6F52]" onChange={(e) => { setPassword(e.target.value) }} />
                    <p className="text-red-500">{passwordError}</p>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <input type="password" id="confirmpassword" className="bg-gray-50 border border-[#5F6F52] text-gray-900 text-sm rounded-lg focus:ring-[#5F6F52] focus:border-[#5F6F52] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#5F6F52] dark:focus:border-[#5F6F52]" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    <p className="text-red-500">{confirmPasswordError}</p>
                  </div>
                  <div className="grid mb-5 place-items-center">
                    <button type="submit" className="border-[#5F6F52] border-2 hover:bg-[#5F6F52] hover:text-white px-4 py-1.5">Signup</button>
                  </div>
                  <p className='text-right'>Already a member? <Link to={'/login'} className='ps-2 text-[#5F6F52] font-semibold'>Login</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
