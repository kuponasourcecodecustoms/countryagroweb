import React,{ useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import './contactForm.css'

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.persist()
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        "service_t5lgmxn",
        "template_p12nt2q",
        e.target,
        "duuw_sWMBZbjGBc5K"
      )
      .then(
        (result) => { // eslint-disable-line no-unused-vars
          setStateMessage('Message sent to admin!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => { // eslint-disable-line no-unused-vars
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      )
    
    // Clears the form after sending the email
    e.target.reset()
  }

  return (
    <div className='contactFormContainer'>
      <h2>Contact Form</h2>
      <p>Fill in the below form and one of our members of staff will get back to you shortly</p>
      <form className='contactForm' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" onChange={(e) => setName(e.target.value)}/>
        <label>Email</label>
        <input type="email" name="from_email" onChange={(e) => setEmail(e.target.value)}/>
        <label>Message</label>
        <textarea name="message" onChange={(e) => setMessage(e.target.value)} />
        <div className='buttonDiv'>
        <input className="sendButton" type="submit" value="Send" disabled={isSubmitting ||name ===''||email ===''||message ===''} />
        </div>
        <div className='statusMessage'>{
          stateMessage && (
            <>
              <FontAwesomeIcon icon={faInfoCircle}/>
              <p className='errorMessage'>{stateMessage}</p>
            </>
          )}
        </div>
      </form>
    </div>
  )
}
