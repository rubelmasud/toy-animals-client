import React from 'react';
import Header from '../../../Components/Header/Header';
import Gallery from '../../../Components/ToysGallery/Gallery';
import ShopByCategory from '../../../Components/ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;