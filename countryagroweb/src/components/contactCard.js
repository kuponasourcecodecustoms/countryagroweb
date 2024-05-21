import React from 'react'
import './contactCard.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faPhone, faUser} from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
export const ContactCard = ({name,emailAddress,contactNumber,role}) => (
  <div className='contactCard'>
    <span><FontAwesomeIcon icon={faUser}/>  Name: {name}</span>
    <span><FontAwesomeIcon icon={faBriefcase}/>  Role: {role}</span>
    <span><FontAwesomeIcon icon={faEnvelope}/>  Email Address:&nbsp;
      <Link to='javascript:void(0)'
        onClick={() => window.location = `mailto:${emailAddress}`}>
          {emailAddress}
      </Link>
    </span>
    <span><FontAwesomeIcon icon={faPhone}/>  Contact Number: {contactNumber}</span>
  </div>
)

ContactCard.PropTypes = {
  name: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
}
