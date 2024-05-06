import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
      <span>
      <Link to='/'>Home</Link>
      <Link to='/about-us'>About Us</Link>
      <Link to='/location'>Location</Link>
      <Link to='/contact-us'>Contact Us</Link>
      </span>
    );
  }