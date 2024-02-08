import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login, Signup, UpdatePassword } from './components';
import Layout from './page/Layout.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';
import ProtectedRouter from './utils/protectedRouter.jsx';
import Booking from './components/Booking.jsx';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.userAuthSlice.isAuthenticated)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      {/* PROTECTED ROUTES */}
      <Route path='/booking' element={<ProtectedRouter isAuthenticated={isAuthenticated}><Booking/></ProtectedRouter>}/>
      {/* <Route path='/reset-password/:token' element={<UpdatePassword />}/> */}
      {/* <Route path='/forget-password' element={<ForgetPassword />}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
