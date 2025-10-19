import React from 'react'



import GetInTouch from "../components/GetInTouch"
import WhyChooseUs  from '../components/whychoose';
import Service from "../components/Service"
import Review from "../components/Review"
import Faq from "../components/Faq"
import HeroSection from "../components/HeroSection"
const Home = () => {
    return (
        <div>
           
        
            <HeroSection />
            <Service />
            <Review />
            <Faq />
             <WhyChooseUs />
            <GetInTouch />
        </div>
    )
}

export default Home
