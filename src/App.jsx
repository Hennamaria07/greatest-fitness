import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { NavBar, Footer, Login } from './components';
import Layout from './page/Layout.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
