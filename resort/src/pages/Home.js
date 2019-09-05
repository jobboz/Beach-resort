import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';


const Home = () => {

    return (
        <div>
         <Hero> 
         <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
             <Link to="room" className="btn-primary">
                Our rooms
             </Link>
         </Banner>     
    </Hero>
    <Services/>
    <FeaturedRoom />
      
    </div>
    )
}

export default Home
