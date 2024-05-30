import React from 'react'
import './contactCard.css'
import { string} from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'
import whatsappLogo from '../images/whatsapp-icon-logo.png'

export const ContactCard = ({name,emailAddress,contactNumber,role}) => {
  const formattedNumber = contactNumber.replace(/\s/g, '')
  return (
  <div className='contactCard'>
    <span><FontAwesomeIcon icon={faUser}/>  Name: {name}</span>
    <span><FontAwesomeIcon icon={faBriefcase}/>  Role: {role}</span>
    <span><FontAwesomeIcon icon={faEnvelope}/>  Email Address:&nbsp;
      <Link to='javascript:void(0)'
        onClick={() => window.location = `mailto:${emailAddress}`}>
          {emailAddress}
      </Link>
    </span>
    <span className='contactNumber'><FontAwesomeIcon icon={faPhone}/>  Contact Number: {contactNumber} <Link to='javascript:void(0)'
        onClick={() => window.location = `https://wa.me/${formattedNumber}`}>
          <img src={whatsappLogo}/>
      </Link></span>
  </div>
)}

ContactCard.propTypes = {
  name: string.isRequired,
  emailAddress: string.isRequired,
  contactNumber: string.isRequired,
  role: string.isRequired
}
