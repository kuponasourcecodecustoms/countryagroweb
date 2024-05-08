import React from 'react';
import { Link } from 'react-router-dom'
import mainLogo from '../images/logo.png';
import './navBar.css';

export const NavBar = () => {
    return (
      <span className='navBarComponent'>
      <Link className='companyLogo' to='/'><img  src={mainLogo} alt="Country Agro Logistics (Pvt) Ltd"/></Link>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About Us</Link>
      <Link to='/location'>Location</Link>
      <Link to='/contact-us'>Contact Us</Link>
      </span>
    );
  }