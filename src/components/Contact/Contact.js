import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="container contact-us">
                <h2 className="mb-5 text-center">Contact Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/Gt5hwNc/orto.jpg" alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <div className="ms-5">
                        <p>To talk to our farmer, email farmer@rooftopfarm.com</p> 
                        <p>For press inquiries, email press@rooftopfarm.com</p> 
                        <p>To learn more about volunteering, <Link className="text-info" href="#">rooftopfarm.com/volunteer/</Link></p>
                        <p>For information about our market and volunteer days, Follow:</p> 
                        </div>
                        <div className="div w-50">
                        <ul className="list-unstyled mt-4 d-flex justify-content-around social-icon">
                            <li><a className="text-decoration-none" href="#0"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a className="text-decoration-none " href="#0"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a className="text-decoration-none" href="#0"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>
                           
                        </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
