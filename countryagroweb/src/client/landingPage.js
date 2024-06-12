import React,{ useState} from 'react'
import { array, number, func} from 'prop-types'
import { Footer } from '../components/footer'
import { ImageGallery } from '../components/imageGallery'
import mainLogo from '../images/logo.png'
import { NavBar } from '../components/navBar'
import './landingPage.css'

const images = require.context('../images/truckImages', true)
const truckImages = images.keys().map(image => images(image))

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

const LandingPageButtons = () => (
  <div className='landingPageButtons'>
    <div className='buttonRow'>
      <button onClick={()=>  window.location.href='/contact-us'}>How to Contact Us</button>
      <button onClick={()=>  window.location.href='/location'}>Where to Find Us</button>
      <button onClick={()=>  window.location.href='/about-us'} >More About Us</button>
    </div>
  </div>
)

const CompanyOverview = () => ( 
  <div className='companyOverviewContainer'>
    <h2>Company Overview</h2>
    <span>Country Agro Logistics (Pvt) Ltd is a privately owned Zimbabwean logistics company.</span>
    <span> We aim to become a preferred partner in local conveyance of goods to and from any destination in Zimbabwe.<br/>
      Country Agro Logistics has assembled a logistic Team, (operations, drivers, assistant drivers accountant),
      and complimentary administration team, with vast experience, most having worked for the major multinational companies.
    </span>
    <div className='companyOverviewBody'>
      <div className='companyOverview leftPane'>
        <span>
          <h3>Vision</h3>
          <p>To be the preferred and repeatedly chosen company in the provision of transport services to various sectors of the economy
          including, but not limited to; manufacturing, agriculture, humanitarian assistance.</p>
        </span>
      
        <span>
          <h3>Values</h3>
          <ul>
            <li>Customer satisfaction</li>
            <li>Safety for cargo at all costs</li>
            <li>Integrity and self-improvement</li>
          </ul>
        </span>
    </div>
    <div className='companyOverview rightPane'>
      <span>
        <h3>Mission</h3>
        <p>To provide total transport solutions centered on upholding a reputation of reliable, safe, timeous and cost effective delivery of cargo for our clients.</p>
      </span>
      <span>
        <h3>Our Fleet</h3>
        <p>Our fleet includes 7-ton, 10 ton, 15 ton, 20 ton and 30 ton trucks.<br/>
          Truck and trailer bodies range from curtain sides, drop sides and flat decks.<br/>
          We continue to invest in our fleet to ensure we have the most efficient and reliable vehicles to ensure that we deliver on time, in full and hassle free.
        </p>
      </span>
    </div>
    </div>
  </div>
)

LandingPageBanner.propTypes = {
  images: array.isRequired,
  currentImage: number.isRequired,
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
        <CompanyOverview/>
        <LandingPageButtons/>
      </div>
      <Footer/>
    </div> 
  )
}
