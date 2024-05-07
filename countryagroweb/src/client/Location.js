import React from 'react';
import { NavBar } from '../components/navBar';
import { OfficeMap } from '../components/officeMap';

export const Location = () => {
    return (
      <div>
        <NavBar/>
        <div>
          <p>We can be found at:</p>
          <OfficeMap/>
        </div>
      </div>
    );
  }