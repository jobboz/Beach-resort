import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
    return  <Hero> 
         <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
             <Link to="room" className="btn-primary">
                Our rooms
             </Link>
         </Banner>
    </Hero>
}

export default Home