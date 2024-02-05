import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar, Footer, Login, Signup, UpdatePassword } from './components';
import Layout from './page/Layout.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/reset-password' element={<UpdatePassword />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
