import React, {  } from 'react';
import Footer from '../Footer/Footer';
import HomeProductContainer from '../HomeProductContainer/HomeProductContainer';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import RooftopContainer from './../RooftopContainer/RooftopContainer';
import Slider from './../Slider/Slider';





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
