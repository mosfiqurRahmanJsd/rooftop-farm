import { Avatar } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ProductContainer from './../ProductContainer/ProductContainer';


const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className="container blog">
                <h2 className="text-center">This is Our Blog</h2>
                <div className="row my-3">
                    <h3 className="py-2">Admin</h3>
                    <div className="col-md-4">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://pickaface.net/gallery/avatar/20120117_083743_291_Demo.png"
                            sx={{ width: 260, height: 260 }}
                        />
                        <h4>Remy Sharp</h4>

                        <p className="text-info"><FontAwesomeIcon icon={faEnvelope} />demo@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://pickaface.net/gallery/avatar/20120117_083743_291_Demo.png"
                            sx={{ width: 260, height: 260 }}
                        />
                        <h4>Remy Sharp</h4>

                        <p className="text-info"><FontAwesomeIcon icon={faEnvelope} />demo@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://pickaface.net/gallery/avatar/20120117_083743_291_Demo.png"
                            sx={{ width: 260, height: 260 }}
                        />
                        <h4>Remy Sharp</h4>

                        <p className="text-info"><FontAwesomeIcon icon={faEnvelope} />demo@gmail.com</p>
                    </div>
                </div>


                <div className="row my-3">
                    <h3 className="py-2 text-center">Find Rooftop </h3>  <input type="search" name="Search Rooftop" id="" />
                    <iframe title="This is Rooftop Farm" className="my-3 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5325976808026!2d72.98372751505767!3d33.69516494391031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd7027ad9309%3A0xaab73aee24020f3!2sRooftop%20Farmer!5e0!3m2!1sen!2sbd!4v1643453189015!5m2!1sen!2sbd" height="200" allowfullscreen="" loading="lazy"></iframe>
                    
                    <ProductContainer></ProductContainer>
                    
                </div>



            </div>
        </div>
    );
}

export default Blog;
