import React, { useState } from 'react';
import { loginYoga } from '../assets/images';
import { Link, useNavigate } from 'react-router-dom';
import instance from '../axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('');
  console.log(password, email);
  const validate = () => {
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const errors = {};

    if (password === "") {
      errors.password = "Please enter your password";
    } else if (!passwordRegEx.test(password)) {
      errors.password = "Password must contain at least one letter, one digit, and be at least 8 characters long";
    }

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
      setPasswordError(errors.password || "");
      // Stop the form submission since there are errors
      return; // This return statement stops the execution here if there are errors
    }
    setEmailError("");
    setPasswordError("");
    try {
      const res = await instance.post("/login", {
        email,
        password
      },
      {
        withCredentials: true
      });
      if (res.data.message) {
        toast.success(res.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide,
          theme: "colored",
        })
      }
      setTimeout(() => navigate('/'), 1000)
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
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
        <div className="login-wrapper">
          <div className="row grid md:grid-cols-2">
            <div className="flex justify-center items-center h-screen mx-5">
              <div>
                <div className='text-center'>
                  <ToastContainer />
                  <h1 className='lg:text-5xl text-4xl pt-4 text-[#5F6F52] font-semibold'>Login</h1>
                  <p className='py-5 text-justify text-sm text-[#5F6F52] leading-6'>Ready for a change? Log in to Great Fitness to access the best yoga classes, wellness tips, and a supportive community. Your journey to a better you begins now</p>
                </div>
                <form className="w-4/5 mx-auto border-2 border-[#5F6F52] p-5 sm:p-10 lg:p-5 md:p-3 rounded-lg" noValidate onSubmit={handleForm}>
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
                  {/* <div className="mb-5 flex justify-between">
                    <Link to={'/forget-password'} className='text-sm font-medium text-gray-900 '>Forget Password?</Link>
                  </div> */}
                  <div className="grid mb-5 place-items-center">
                    <button type="submit" className="border-[#5F6F52] border-2 hover:bg-[#5F6F52] hover:text-white px-4 py-1.5">Login</button>
                  </div>
                  <p className='text-right'>Not a member? <Link to={'/signup'} className='ps-2 text-[#5F6F52] font-semibold'>Signup</Link></p>
                </form>
              </div>

            </div>
            <div className="h-screen hidden md:grid place-items-center bg-[#5F6F52]">
              <img src={loginYoga} alt="yoga imgage" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login;
