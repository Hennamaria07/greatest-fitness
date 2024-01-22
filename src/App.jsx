import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import { Services } from './components/Services'
import Facility from './components/Facility'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <Services/>
    <Facility />
    </>
  )
}

export default App
