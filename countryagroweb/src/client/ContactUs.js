import React from 'react'
import { ContactCard } from '../components/contactCard'
import { Footer } from '../components/footer'
import { NavBar } from '../components/navBar'
import { ContactForm } from '../components/contactForm'
import './contactUs.css'

export const ContactUs = () => {
    const contacts = []
    contacts.push({
      id: "1",
      name: "Tatenda Sayi",
      role: "Administrator",
      emailAddress: "admin@moneymaker.co.zw",
      contactNumber: "+263 775 880 756"
    },{
      id: "2",
      name: "Brian Vere",
      role: "Managing Director",
      emailAddress: "brian@countryagrointernational.co.zw",
      contactNumber: "+263 732 328 671"
    })
    
    const rows = contacts.map((x,i) => {
      return i % 2 === 0 ? contacts.slice(i, i+2) : null
    }).filter(x => x != null)


  return (
    <div>
      <NavBar/>
      <div className='mainBody'>
      <ContactForm/>
      <h2>Contact Details</h2>
        <div className='contacts'>
          {rows.map((row, index) =>  (
            <div className="row" key={index}>
              {row.map(col => 
                <div key={col?.id} className="col-2">
                  <ContactCard 
                    key={col?.id}
                    name={col?.name} 
                    emailAddress={col?.emailAddress} 
                    role={col?.role} 
                    contactNumber={col?.contactNumber}
                  />
                  </div>

              )}
            </div>
            )
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
