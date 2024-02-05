import React, { useState } from 'react'

const UpdatePassword = () => {
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const validate = () => {
        const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        const errors = {};

        if (password === "") {
            errors.password = "Please enter your password";
        } else if (!passwordRegEx.test(password)) {
            errors.password = "Password must contain at least one letter, one digit, and be at least 8 characters long";
        }

        if (confirmPassword === "") {
            errors.confirmPassword = "Please confirm your password";
          } else if (password !== confirmPassword) {
            errors.confirmPassword = "The password does not match";
          }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors) {
            setPasswordError(errors.password || "");
            setConfirmPasswordError(errors.confirmPassword || "");

        } else {
            setPasswordError('');
            setConfirmPasswordError("");
        }

    };
    return (
        <>
            <section className='h-screen w-screen'>
                <div className="update flex justify-center items-center md:px-20 px-10">
                    <div className="row">
                        <div className='text-center'>
                            <h1 className='lg:text-5xl text-4xl pt-4 text-[#5F6F52] font-semibold'>Reset Your Password</h1>
                            <p className='py-5 md:flex hidden text-justify text-sm text-[#5F6F52] leading-6'>Everyone forgets their password now and then. But don't sweat it! Just enter your email address below, and we'll send you a link to reset your password. It's quick, easy, and will get you back on your fitness journey in no time.</p>
                        </div>
                        <form className="mt-5 w-4/5 mx-auto border-2 border-[#5F6F52] p-5 sm:p-10 lg:p-5 md:p-3 rounded-lg" noValidate onSubmit={handleForm}>
                            <div className="mb-5">
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-[#5F6F52] text-gray-900 text-sm rounded-lg focus:ring-[#5F6F52] focus:border-[#5F6F52] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#5F6F52] dark:focus:border-[#5F6F52]" onChange={(e) => { setPassword(e.target.value) }} />
                                <p className="text-red-500">{passwordError}</p>
                            </div>
                            <div className="mb-5">
                                <label for="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input type="password" id="confirmpassword" className="bg-gray-50 border border-[#5F6F52] text-gray-900 text-sm rounded-lg focus:ring-[#5F6F52] focus:border-[#5F6F52] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#5F6F52] dark:focus:border-[#5F6F52]" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                                <p className="text-red-500">{confirmPasswordError}</p>
                            </div>

                            <div className="grid mb-5 place-items-center">
                                <button type="submit" className="border-[#5F6F52] border-2 hover:bg-[#5F6F52] hover:text-white px-4 py-1.5">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpdatePassword;