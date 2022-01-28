import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductContainer from '../ProductContainer/ProductContainer';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import RooftopContainer from './../RooftopContainer/RooftopContainer';
import Slider from './../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <RooftopContainer></RooftopContainer>
            <ProductContainer></ProductContainer>
            <ReviewContainer></ReviewContainer>
            <Footer></Footer>
        </div>
    );
}

export default Home;
