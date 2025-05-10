import React from 'react';
import Banner from './Banner';
import Map from '../Map/Map';
import Offers from './Offers/Offers';
import FeaturedRooms from './FeaturedRooms';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Offers></Offers>
            <Map></Map>
        </div>
    );
};

export default Home;