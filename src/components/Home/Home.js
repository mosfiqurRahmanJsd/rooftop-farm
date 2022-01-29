import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ProductContainer from '../ProductContainer/ProductContainer';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import RooftopContainer from './../RooftopContainer/RooftopContainer';
import Slider from './../Slider/Slider';

const Home = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    return (
        <div>
            <Header count = {count}></Header>
            <Slider></Slider>
            <RooftopContainer></RooftopContainer>
            <ProductContainer count = {count} setCount={setCount}></ProductContainer>
            <ReviewContainer></ReviewContainer>
            <Footer></Footer>
        </div>
    );
}

export default Home;
