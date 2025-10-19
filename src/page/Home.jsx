import React from 'react'



import GetInTouch from "../components/GetInTouch"
import WhyChooseUs  from '../components/whychoose';
import Service from "../components/Service"
import Review from "../components/Review"
import Faq from "../components/Faq"
const Home = () => {
    return (
        <div>
           
        
           
            <Service />
            <Review />
            <Faq />
             <WhyChooseUs />
            <GetInTouch />
        </div>
    )
}

export default Home
