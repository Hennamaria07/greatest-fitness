import React from 'react'
import { About, Contact, Facility, Home, NavBar, Services } from '../components'
import { Footer } from 'flowbite-react'

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
