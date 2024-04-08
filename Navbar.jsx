import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo_big.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo"/>
      <img src={navProfile} alt="" className="nav-Profile" />
    </div>
  )
}

export default Navbar;
