import React from 'react'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import { OfficeMap } from '../components/officeMap'

export const Location = () => (
  <div className='location'>
    <NavBar/>
    <div className='mainBody'>
      <p>We can be found at:</p>
      <div className='locationCard'>
        <p>70 Mutare Road</p>
        <p>Msasa</p>
        <p> Harare</p>
        <p> Zimbabwe</p>
      </div>
      <OfficeMap/>
    </div>
    <Footer/>
  </div>
)
