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
    <p>Country Agro Logistics (Pvt) Ltd is a privately owned Zimbabwean logistics company.</p>
    <p>
    We aim to become a preferred partner in local conveyance of goods to and from any destination in Zimbabwe.<br/>
    Country Agro Logistics has assembled a logistic Team, (operations, drivers, assistant drivers accountant),
    and complimentary administration team, with vast experience, most having worked for the major multinational companies.
    </p>
    <p>We strive to build relationships with our clients, persistently achieving an understanding of their current, as well as future requirements.<br/>
    Country Agro International has modern, well maintained, trucks and trailers arriving on time to pick up or deliver the cargo
    </p>
  </div>
)

const CompanyProfile = () =>  (
  <div className='companyProfile'>
    <h2>Company Profile</h2>
    <p>We have 13 employees altogether including the drivers, assistant drivers, operations and administration..</p>
    <p>For customers’ peace of mind, the vehicles:
    <ul>
      <li>Have Full Comprehensive Insurance cover</li>
      <li>Have adequate Goods in Transit insurance cover</li>
      <li>Are fitted with satellite tracking system, monitored in-house as well as 24-hour cell phone contact when on the road</li>
    </ul>
    </p>
    <p>Our drivers are:
    <ul>
      <li>Highly experienced holders of Defensive Driving Certificates,</li>
      <li>All well trained in transporting different commodities including food stuffs, live poultry, specialised equipment and hazardous materials</li>
      <li>Uphold high service standards required to satisfy our customers.</li>
    </ul>
    </p>
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
            <CompanyProfile/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }