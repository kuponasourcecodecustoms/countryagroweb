import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { array, object, func} from 'prop-types'
import './imageGallery.css'

export const ImageGallery = ({images,currentImage,moveLeft,moveRight}) => (
  <>
    <button className='leftButton' onClick={() =>moveLeft()}><FontAwesomeIcon icon={faArrowLeft} /></button>
    <img  src={images[currentImage]} alt="Truck Image"/>
    <button className='rightButton' onClick={() =>moveRight()}><FontAwesomeIcon icon={faArrowRight} /></button>
  </>
)

ImageGallery.propTypes = {
  images: array.isRequired,
  currentImage: object.isRequired,
  moveLeft: func.isRequired,
  moveRight: func.isRequired
}
