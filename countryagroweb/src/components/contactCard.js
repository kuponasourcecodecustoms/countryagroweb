import React from 'react';
import './contactCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const ContactCard = ({name,emailAddress,contactNumber,role}) => (
    <div className='contactCard'>
    <span>Name: {name}</span>
    <span>Role: {role}</span>
    <span>Email Address:
    <Link to='javascript:void(0)'
      onClick={() => window.location = `mailto:${emailAddress}`}>
       {emailAddress}
    </Link>
    </span>
    <span>Contact Number: {contactNumber}</span>
    </div>
)

  ContactCard.PropTypes = {
    name: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}
