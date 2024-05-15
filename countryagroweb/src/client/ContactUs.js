import React from 'react';
import { NavBar } from '../components/navBar';
import { ContactCard } from '../components/contactCard';

export const ContactUs = () => {
    const contacts = []
    contacts.push({
      id: "1",
      name: "Tatenda Sayi",
      role: "Administrator",
      emailAddress: "admin@moneymaker.co.zw",
      contactNumber: "+263 775 880 756"
    },{
      id: "1",
      name: "Tatenda Sayi",
      role: "Administrator",
      emailAddress: "admin@moneymaker.co.zw",
      contactNumber: "+263 775 880 756"
    }
    ,{
      id: "1",
      name: "Tatenda Sayi",
      role: "Administrator",
      emailAddress: "admin@moneymaker.co.zw",
      contactNumber: "+263 775 880 756"
    })
    

    return (
      <div>
        <NavBar/>
        <div className='mainContent'>
        <h2>Contact Details</h2>
          <div className='contacts'>
          {
            contacts.map((contact) => (
            <ContactCard 
              key={contact?.id}
              name={contact?.name} 
              emailAddress={contact?.emailAddress} 
              role={contact?.role} 
              contactNumber={contact?.contactNumber}
            />
            ))
          }
          </div>
        </div>
      </div>
    )
  }