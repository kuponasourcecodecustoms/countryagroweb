import React from 'react';
import { NavBar } from '../components/navBar';
import { OfficeMap } from '../components/officeMap';

export const Location = () => {
    return (
      <div>
        <NavBar/>
        <div className='mainContent'>
          <p>We can be found at:</p>
          <div className='locationCard'>
            <p>70 Mutare Road</p>
            <p>Msasa</p>
            <p> Harare</p>
            <p> Zimbabwe</p>
          </div>
          <OfficeMap/>
        </div>
      </div>
    );
  }