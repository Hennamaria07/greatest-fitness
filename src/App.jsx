import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { Home } from './components/Home';
import { Services } from './components/Services';
import Facility from './components/Facility';
import About from './components/About';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Home />
    <Services />
    <Facility />
    <About />
    <Contact />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
