import React from 'react'
import ProtectedRouter from '../utils/ProtectedRouter.jsx';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Session = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
     <ProtectedRouter isAuthenticated={isAuthenticated}>
    <NavLink to='/booking'><button type="button" className="focus:outline-none font-semibold text-white bg-custom-green hover:bg-custom-green-light font-medium rounded-md text-sm p-3 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Book A Session</button></NavLink>
    </ProtectedRouter>
    </>
  )
}

export default Session;