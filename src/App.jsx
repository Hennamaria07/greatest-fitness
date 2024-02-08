import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Login, Signup, UpdatePassword } from './components';
import Layout from './page/Layout.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      {/* <Route path='/reset-password/:token' element={<UpdatePassword />}/> */}
      {/* <Route path='/forget-password' element={<ForgetPassword />}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
