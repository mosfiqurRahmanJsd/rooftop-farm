import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderimg1 from './../../images/slider1.jpg'
import sliderimg2 from './../../images/slider2.jpg'
import sliderimg3 from './../../images/slider3.jpg'
import './Slider.css'

const Slider = () => {
    return (
        <div className="container slider rounded">

            <Carousel variant="dark" className="background d-flex align-items-center text-align-center">
                <Carousel.Item>
                    <div className="row d-flex align-items-center slide-content">
                        <div className="col-md-6 ps-5">
                            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, pariatur?</h1>
                            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas esse veniam quas! Expedita, rerum.</h4>
                        </div>
                        <div className="col-md-6">
                            <img src={sliderimg1} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row d-flex align-items-center slide-content">
                        <div className="col-md-6 ps-5">
                            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, pariatur?</h1>
                            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas esse veniam quas! Expedita, rerum.</h4>
                        </div>
                        <div className="col-md-6">
                            <img src={sliderimg2} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row d-flex align-items-center slide-content">
                        <div className="col-md-6 ps-5">
                            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, pariatur?</h1>
                            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptas esse veniam quas! Expedita, rerum.</h4>
                        </div>
                        <div className="col-md-6">
                            <img src={sliderimg3} alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                
            </Carousel>



        </div>
    );
}

export default Slider;
