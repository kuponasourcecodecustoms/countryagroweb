import React, {useState} from 'react'
import { CompanyStructure } from '../components/companyStruture'
import { Footer } from '../components/footer'
import { ImageGallery } from '../components/imageGallery'
import { NavBar } from '../components/navBar'

const images = require.context('../images/aboutUsImages', true)
const aboutUsImages = images.keys().map(image => images(image));

const CompanyBackground = () => ( 
  <div className='companyBackgground'>
    <h2>Company Background</h2>
    <p>Country Agro International (Pvt) Ltd is a privately owned Zimbabwean company which is now spreading its portfolio to the transport sector.<br/>
      We aim to become a preferred partner in local conveyance of goods to and from any destination in Zimbabwe.<br/>
      We strive to build relationships with our clients, persistently achieving an understanding of their current, as well as future requirements.
    </p>
    <p>Country Agro International has modern, well maintained, trucks and trailers arriving on time to pick up or deliver the cargo.<br/>
      The vehicles have Insurance cover and are fitted with satellite tracking system, monitored in-house as well as 24-hour cellphone contact.<br/>
      Our drivers, holders of Defensive Driving Certificates, are all well trained in transporting food commodities and are fully aware, and sensitized, of the service standards required to satisfy our customers.
    </p>
  </div>
)

const CorporateOverview = () => ( 
  <div className='corporateOverview'>
    <h2>Corporate Overview</h2>
    <span>
      <h3>Vision</h3>
      <p>To be the preferred and repeatedly chosen company in the provision of transport services to the manufacturing sector.</p>
    </span>
    <span>
      <h3>Mission</h3>
      <p>To provide total transport solutions centered on upholding a reputation of reliable, safe, timeous and cost effective delivery of cargo for our clients.</p>
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
)

export const AboutUs = () => {
  const [currentImage,setImage] = useState(0)
  const galleryLeft = () => currentImage > 0 ? setImage(currentImage -1) : setImage(aboutUsImages.length -1)
  const galleryRight = () => currentImage < aboutUsImages.length -1 ? setImage(currentImage + 1) : setImage(0)

    return (
      <div className='aboutUs'>
        <NavBar/>
        <div className='mainBody'>
          <div className='imageGallery companyBackground'>
            <div className='leftImage companyBackground'>
              <CompanyBackground/>
            </div>
            <div className='rightImage companyBackground'>
              <ImageGallery currentImage={currentImage} images={aboutUsImages} moveLeft={galleryLeft} moveRight={galleryRight}/>
            </div>
          </div>
          <div className='companyStructure corporateOverview'>
            <CompanyStructure/>
            <CorporateOverview/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }