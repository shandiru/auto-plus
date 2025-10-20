import React from 'react'



import GetInTouch from "../components/GetInTouch"
import WhyChooseUs  from '../components/whychoose';
import Service from "../components/Service"
import Review from "../components/Review"
import Faq from "../components/Faq"
import HeroSection from "../components/HeroSection"
import GallerySection from "../components/GallerySection"
const Home = () => {
    return (
        <div>
           
        
            <HeroSection />
            <Service />
              <WhyChooseUs />
               <GallerySection />
            <Review />
            <Faq />
           
           
            <GetInTouch />
        </div>
    )
}

export default Home
