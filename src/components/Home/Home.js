import React, {  } from 'react';
import Footer from '../Footer/Footer';

import ReviewContainer from '../ReviewContainer/ReviewContainer';
import Slider from './../Slider/Slider';
import HomeProductContainer from '../HomeProductContainer/HomeProductContainer';
import HomeRooftopContainer from '../HomeRooftopContainer/HomeRooftopContainer';





const Home = () => {

   
    

    return (

        <>
            <Slider></Slider>
            <HomeRooftopContainer></HomeRooftopContainer>
            <HomeProductContainer></HomeProductContainer>
            <ReviewContainer></ReviewContainer>
            <Footer></Footer>

        </>

    );
}

export default Home;
