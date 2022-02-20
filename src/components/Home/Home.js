import React, {  } from 'react';
import Footer from '../Footer/Footer';

import ReviewContainer from '../ReviewContainer/ReviewContainer';
import RooftopContainer from './../RooftopContainer/RooftopContainer';
import Slider from './../Slider/Slider';
import ProductContainer from './../ProductContainer/ProductContainer';
import HomeProductContainer from '../HomeProductContainer/HomeProductContainer';





const Home = () => {

   
    

    return (

        <>
            <Slider></Slider>
            <RooftopContainer></RooftopContainer>
            <HomeProductContainer></HomeProductContainer>
            <ReviewContainer></ReviewContainer>
            <Footer></Footer>

        </>

    );
}

export default Home;
