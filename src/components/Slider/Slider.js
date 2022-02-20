import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css'

const Slider = () => {
    return (
        <div className="container slider rounded text-dark">

            <Carousel variant="info" className="background d-flex align-items-center text-align-center">
                <Carousel.Item>
                    <div className="row d-flex align-items-center slide-content">
                        <div className="col-md-6 ps-5">
                            <h1 className="text-uppercase">A roof garden is a garden on the roof of a building. </h1>
                            <h4>Besides the decorative benefit roof plantings may provide food, temperature control, hydrological benefits, architectural enhancement, habitats or corridors[1] for wildlife, recreational opportunities.</h4>
                        </div>
                        <div className="col-md-6">
                            <img src="https://i.ibb.co/4p1JK1F/03.jpg" alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row d-flex align-items-center slide-content">
                        <div className="col-md-6 ps-5">
                            <h1>WHY ROOFTOP FARMING IS THE BEST SOLUTION FOR SMART URBAN AGRICULTURE</h1>
                            <h4>But, increasingly, forward-thinking farmers are eschewing the confines of conventional agriculture and growing on what’s traditionally been considered unusable space: city rooftops.</h4>
                        </div>
                        <div className="col-md-6">
                            <img src="https://i.ibb.co/fFG1spn/02.jpg" alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row d-flex align-items-center slide-content">
                        <div className="col-md-6 ps-5">
                            <h1 className="text-uppercase">Reasons Rooftop Farming Is a Fantastic Idea</h1>
                            <h4>Make cities more eco-friendly. Bare roofs in cities absorb and then radiate heat — a phenomenon known as the “heat island effect.”4 This increases energy usage and contributes to the poor air quality</h4>
                        </div>
                        <div className="col-md-6">
                            <img src="https://i.ibb.co/ggpwpbh/04.jpg" alt="" />
                        </div>
                    </div>
                </Carousel.Item>
                
            </Carousel>



        </div>
    );
}

export default Slider;
