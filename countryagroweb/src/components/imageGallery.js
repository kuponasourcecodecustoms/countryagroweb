import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
export const ImageGallery = ({mainLogo,images,currentImage,moveLeft,moveRight}) =>(
    <div className='imageGallery'>
      <div className="leftImage">
      <img  src={mainLogo} alt="Country Agro Logistics (Pvt) Ltd"/>
      <h2>Country Agro Logistics (Pvt) Ltd</h2>
      <h3>Exceptional Transport Services</h3>
      </div>
      <div className='rightImage'>
      <button className='leftButton' onClick={() =>moveLeft()}><FontAwesomeIcon icon={faArrowLeft} /></button>
      <img  src={images[currentImage]} alt="Truck Image"/>
      <button className='rightButton' onClick={() =>moveRight()}><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
    </div>
  )
  