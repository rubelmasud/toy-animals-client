import React from 'react';
import Header from '../../../Components/Header/Header';
import Gallery from '../../../Components/ToysGallery/Gallery';
import ShopByCategory from '../../../Components/ShopByCategory/ShopByCategory';
import MyClient from '../../../Components/MyClientSection/MyClient';



const Home = () => {


    return (
        <div>
            <Header></Header>
            <ShopByCategory ></ShopByCategory>
            <Gallery ></Gallery>
            <MyClient></MyClient>
        </div>
    );
};

export default Home;