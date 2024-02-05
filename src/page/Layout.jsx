import React from 'react'
import { About, Contact, Facility, Home, NavBar, Services, Footer } from '../components'

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Home />
    <Services />
    <Facility />
    <About />
    <Contact />
    <Footer />
    </div>
  )
}

export default Layout
