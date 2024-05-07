import React from 'react';
import './contactCard.css';
import PropTypes from 'prop-types';



// eslint-disable-next-line react/prop-types
export const ContactCard = ({name,emailAddress,contactNumber,role}) => (
    <div className='contactCard'>
    <span>Name: {name}</span>
    <span>Role: {role}</span>
    <span>Email Address: {emailAddress}</span>
    <span>Contact Number: {contactNumber}</span>
    </div>
)

  ContactCard.PropTypes = {
    name: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
}
