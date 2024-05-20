import React from 'react'
import { ContactCard } from '../components/contactCard'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'

export const ContactUs = () => {
    const contacts = []
    contacts.push({
      id: "1",
      name: "Tatenda Sayi",
      role: "Administrator",
      emailAddress: "admin@moneymaker.co.zw",
      contactNumber: "+263 775 880 756"
    })
    

    return (
      <div className='contactUs'>
        <NavBar/>
        <div className='mainBody'>
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
        <Footer/>
      </div>
    )
  }