import React,{ useState} from 'react';
import { NavBar } from '../components/navBar';
import { ImageGallery } from '../components/imageGallery';
import mainLogo from '../images/logo.png';
import truck from '../images/truckImages/truck.jpg';
import truck1 from '../images/truckImages/truck1.jpg';
import truck2 from '../images/truckImages/truck2.jpg';
import truck3 from '../images/truckImages/truck3.jpg';
import truck4 from '../images/truckImages/truck4.jpg';
import truck5 from '../images/truckImages/truck4.jpg';

 const images = [truck,truck1,truck2,truck3,truck4,truck5]


export const LandingPage = () => {
  const [currentImage,setImage] = useState(0)
  
  const galleryLeft = () => currentImage > 0 ? setImage(currentImage -1) : setImage(images.length -1)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const galleryRight = () => currentImage < images.length -1 ? setImage(currentImage + 1) : setImage(0)
  // useEffect(() => {
  //   setInterval(galleryRight,3000)
  // }, [galleryRight]);
  

    return (
      <div className='landingPage'>
        <NavBar/>
        <ImageGallery mainLogo={mainLogo} images ={images} currentImage={currentImage} moveLeft={galleryLeft} moveRight={galleryRight}/>
      </div>
    )
  }