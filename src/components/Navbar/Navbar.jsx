import React from 'react'
import './Navbar.css'

// Navbar logic
const Navbar = () => {

  const openBookingApp = () => {
    window.open(
      'https://booking.com/',
      '_blank' 
    );
  }
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo" onClick={() => openBookingApp()}>Booking.com</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar