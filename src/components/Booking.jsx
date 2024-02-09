import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import instance from '../axios';

const Booking = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');
  const [experience, setExperience] = useState('');
  const [participants, setParticipants] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const [dateErr, setDateErr] = useState('');
  const [timeErr, setTimeErr] = useState('');
  const [typeErr, setTypeErr] = useState('');
  const [experienceErr, setExperienceErr] = useState('');
  const [participantsErr, setParticipantsErr] = useState('');
  
console.log(phone, date, time, type, experience, participants);
const validate = () => {
  const errors = {}
  const phoneRegEx = /^[6789]\d{9}$/
  const currentDate = new Date().toISOString().split('T')[0];
  const timeRegEx = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
  if(phone === ""){
    errors.phone= "Phone number is required"
  } else if(!phoneRegEx.test(phone)) {
    errors.phone = "Invaild phone number"
  }
  if(date === ""){
    errors.date= "Date is required"
  }else if(new Date(date) < new Date(currentDate)) {
    // This will check if the selected date is before today's date
    errors.date = "Invalid date. Please don't select a past date.";
  }
  if(time === ""){
    errors.time= "Time is required"
  } else if(!timeRegEx.test(time)) {
    errors.time = "Invaild time number"
  }
  if(type === ""){
    errors.type= "Yoga type is required"
  } 
  if(experience === ""){
    errors.experience= "Experience is required"
  } 
  if(participants === ""){
    errors.participants= "Participants number is required"
  } 
  return Object.keys(errors).length === 0 ? null : errors;
}
const handleForm = async(e) => {
  e.preventDefault()
  const errors = validate() || {};
  if (Object.keys(errors).length > 0) {
    setPhoneErr(errors.phone || "");
    setDateErr(errors.date || "");
    setTimeErr(errors.time || "");
    setTypeErr(errors.type|| "");
    setExperienceErr(errors.experience || "");
    setParticipantsErr(errors.participants || "");
    // Stop the form submission since there are errors
    return; // This return statement stops the execution here if there are errors
  }
  setPhoneErr("");
  setDateErr("");
  setTimeErr("");
  setTypeErr("");
  setExperienceErr("");
  setParticipantsErr("");
  try {
    const res = await instance.post("/api/v1/session/booking", {
      phone,
      date,
      time,
      experience,
      participant: participants,
      category: type
    },
    {
      withCredentials: true
    });
    if (res.data.success) {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "colored",
      })
    }
     setTimeout(() => navigate('/'), 1000);
  } catch (error) {
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
}
 return (
  <section className='h-auto flex justify-center items-center bg-[#5F6F52]'>

<form noValidate onSubmit={handleForm} className="w-full h-full md:px-0 px-5 pt-8 space-y-4 max-w-lg mx-auto">
  <ToastContainer />
  <h1 className='text-4xl text-white leading-10 pb-2'>Reserve Your Spot: Secure Your Next Session Now</h1>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <p className="text-red-500">{phoneErr}</p>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-white">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <p className="text-red-500">{dateErr}</p>
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-white">Time</label>
        <input
          type="time"
          name="time"
          id="time"
          onChange={(e) => setTime(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
        <p className="text-red-500">{timeErr}</p>
      </div>

      <div>
        <label htmlFor="yogaType" className="block text-sm font-medium text-white">Type of Yoga</label>
        <select
          name="yogaType"
          id="yogaType"
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select a type</option>
          <option value="hatha">Hatha</option>
          <option value="vinyasa">Vinyasa</option>
          <option value="ashtanga">Ashtanga</option>
        </select>
        <p className="text-red-500">{typeErr}</p>
      </div>

      <div>
        <label htmlFor="experienceLevel" className="block text-sm font-medium text-white">Experience Level</label>
        <select
          name="experienceLevel"
          id="experienceLevel"
          onChange={(e) => setExperience(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          required
        >
          <option value="">Select your level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <p className="text-red-500">{experienceErr}</p>
      </div>

      <div>
        <label htmlFor="participants" className="block text-sm font-medium text-white">Number of Participants</label>
        <input
          type="number"
          name="participants"
          id="participants"
          onChange={(e) => setParticipants(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          min="1"
          required
        />
        <p className="text-red-500">{participantsErr}</p>
      </div>
      <div>
        <button className='text-white my-5 bg-green-400 rounded-md px-4 py-2 w-full'>Book</button>
      </div>
    </form>
    </section>
  );
}

export default Booking
