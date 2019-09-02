import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
const room = () => {
    return (
        <Hero hero="roomsHero">
                     <Banner title="Our Rooms">
                     <Link to ='/' className ='btn-primary'>
                         return Home
                     </Link> 
                     </Banner>
             </Hero>
    )
}



export default room;  
