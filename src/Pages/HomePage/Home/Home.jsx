import React from 'react';
import Header from '../../../Components/Header/Header';
import Gallery from '../../../Components/ToysGallery/Gallery';
import ShopByCategory from '../../../Components/ShopByCategory/ShopByCategory';
import MyClient from '../../../Components/MyClientSection/MyClient';
import FutureSection from '../../../Components/FutureSection/FutureSection';



const Home = () => {


    return (
        <div>
            <Header></Header>
            <ShopByCategory ></ShopByCategory>
            <Gallery ></Gallery>
            <FutureSection></FutureSection>
            <MyClient></MyClient>
        </div>
    );
};

export default Home;