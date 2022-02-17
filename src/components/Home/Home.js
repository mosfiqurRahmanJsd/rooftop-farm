import React, {  } from 'react';
import Footer from '../Footer/Footer';

import ReviewContainer from '../ReviewContainer/ReviewContainer';
import RooftopContainer from './../RooftopContainer/RooftopContainer';
import Slider from './../Slider/Slider';
import ProductContainer from './../ProductContainer/ProductContainer';





const Home = () => {

   
    

    return (

        <>
            <Slider></Slider>
            <RooftopContainer></RooftopContainer>
            <ProductContainer></ProductContainer>
            <ReviewContainer></ReviewContainer>
            <Footer></Footer>

        </>

    );
}

export default Home;
