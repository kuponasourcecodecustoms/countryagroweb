import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap} from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import { OfficeMap } from '../components/officeMap'
import './location.css'

export const Location = () => (
  <div className='location'>
    <NavBar/>
    <div className='mainBody'>
      <p>We can be found at:</p>
      <div className='locationCard'>
      <FontAwesomeIcon icon={faMap}/>
      <div>
        <p>70 Mutare Road</p>
        <p>Msasa</p>
        <p> Harare</p>
        <p> Zimbabwe</p>
        </div>
      </div>
      <OfficeMap/>
    </div>
    <Footer/>
  </div>
)
