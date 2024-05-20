import React,{ useState} from 'react'
import { array, object, func} from 'prop-types'
import { Footer } from '../components/footer'
import { ImageGallery } from '../components/imageGallery'
import mainLogo from '../images/logo.png'
import { NavBar } from '../components/navBar'

const images = require.context('../images/truckImages', true)
const truckImages = images.keys().map(image => images(image));

const LandingPageBanner = ({images,currentImage,moveLeft,moveRight}) => (
  <div className='imageGallery'>
    <div className="leftImage">
      <img  src={mainLogo} alt="Country Agro Logistics (Pvt) Ltd"/>
      <h2>Country Agro Logistics (Pvt) Ltd</h2>
      <h3>Exceptional Transport Services</h3>
    </div>
    <div className='rightImage'>
      <ImageGallery mainLogo={mainLogo} images ={images} currentImage={currentImage} moveLeft={moveLeft} moveRight={moveRight}/>
    </div>
  </div>
)

LandingPageBanner.propTypes = {
  images: array.isRequired,
  currentImage: object.isRequired,
  moveLeft: func.isRequired,
  moveRight: func.isRequired
}

export const LandingPage = () => {
  const [currentImage,setImage] = useState(0)
  const galleryLeft = () => currentImage > 0 ? setImage(currentImage -1) : setImage(truckImages.length -1)
  const galleryRight = () => currentImage < truckImages.length -1 ? setImage(currentImage + 1) : setImage(0)

  return (
    <div className='landingPage'>
      <NavBar/>
      <div className='mainBody'>
        <LandingPageBanner mainLogo ={mainLogo} images={truckImages} currentImage={currentImage} moveLeft={galleryLeft} moveRight={galleryRight}/>
      </div>
      <Footer/>
    </div> 
  )
}
