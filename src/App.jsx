import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login, Signup, UpdatePassword } from './components';
import Layout from './page/Layout.jsx';
// import ProtectedRouter from './utils/ProtectedRouter.jsx';
import Booking from './components/Booking.jsx';
// import { useSelector } from 'react-redux';

function App() {
  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // console.log(isAuthenticated);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/booking' element={<Booking />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
