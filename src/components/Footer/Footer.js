import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'




const Footer = () => {
    return (
        <footer className="bg-color text-dark pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-5">
                        <h5>About Us</h5>
                        <p>We envision a future of sustainable cities and communities powered by Rooftop farming.</p>
                        <p>We build and manage rooftop farms to transform under-utilised areas into vibrant natural spaces, create sources of nutritious organic food, and engage and empower communities to lead a sustainable lifestyle.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        
                        <ul className="list-unstyled">
                            <li><a className="text-decoration-none text-dark" href="#0">Rooftop Farming Solutions</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Our Projects</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Upcoming Events & Workshops</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Online Store FAQ</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Privacy Policy</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Terms and Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        
                        <ul className="list-unstyled">
                            <li><a className="text-decoration-none text-dark" href="#0">Our Story</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Request an consultation</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Create your home garden</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Instruction of using FPS and PayMe</a></li>
                            <li><a className="text-decoration-none text-dark" href="#0">Engineering</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        
                    <img className="img-fluid" src="https://i.ibb.co/JpN3VhM/asdf.png" alt="" />
                    
                        
                        <ul className="list-unstyled mt-4 d-flex justify-content-around social-icon">
                            <li><a className="text-decoration-none" href="#0"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a className="text-decoration-none " href="#0"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a className="text-decoration-none" href="#0"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
                           
                        </ul>

                        <img className="img-fluid" src="https://cdn.statically.io/img/debuggersstudio.com/f=auto/wp-content/uploads/2020/09/bkash.gif" alt="" />

                    </div>
                </div>
                <p className="text-center footer-p py-3 m-0">Copyright © 2022 virtual thinker of Rooftop Farm</p>
            </div>
        </footer>
    );
}

export default Footer;
