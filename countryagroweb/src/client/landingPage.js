import React,{ useState } from 'react';
import { NavBar } from '../components/navBar';
import mainLogo from '../images/logo.png';
import truck from '../images/truckImages/truck.jpg';
import truck1 from '../images/truckImages/truck1.jpg';
import truck2 from '../images/truckImages/truck2.jpg';
import truck3 from '../images/truckImages/truck3.jpg';
import truck4 from '../images/truckImages/truck4.jpg';
import truck5 from '../images/truckImages/truck4.jpg';

 const images = [truck,truck1,truck2,truck3,truck4,truck5]

// eslint-disable-next-line react/prop-types
const TopImageGrid = ({currentImage,moveLeft,moveRight}) =>(
  <div className='topImageGrid'>
    <div className="leftImage">
    <img  src={mainLogo} alt="Country Agro Logistics (Pvt) Ltd"/>
    <h2>Country Agro Logistics (Pvt) Ltd</h2>
    <h3>Exceptional Transport Services</h3>
    </div>
    <div className='rightImage'>
    <button className='leftButton' onClick={() =>moveLeft()}>LEFT</button>
    <img  src={images[currentImage]} alt="Truck Image"/>
    <button className='rightButton' onClick={() =>moveRight()}>RIGHT</button>
    </div>
  </div>
)

export const LandingPage = () => {
  const [currentImage,setImage] = useState(0)
  const galleryLeft = () => currentImage > 0 ? setImage(currentImage -1) : setImage(images.length -1)
  const galleryRight = () => currentImage < images.length -1 ? setImage(currentImage + 1) : setImage(0)
  
    return (
      <div className='landingPage'>
        <NavBar/>
        <TopImageGrid currentImage={currentImage} moveLeft={galleryLeft} moveRight={galleryRight}/>
      </div>
    )
  }