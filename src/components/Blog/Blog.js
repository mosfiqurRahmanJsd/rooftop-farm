
import React from 'react';
import HomeProductContainer from '../HomeProductContainer/HomeProductContainer';
import './Blog.css';




const Blog = () => {
    return (
        <div>
            <div className="container blog">
                
                

                <div className="row my-3">
                    <h3 className="py-2 text-center">Find Farm </h3>  <input type="search" name="Search Rooftop" id="" />
                    <iframe title="This is Rooftop Farm" className="my-3 rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5325976808026!2d72.98372751505767!3d33.69516494391031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbd7027ad9309%3A0xaab73aee24020f3!2sRooftop%20Farmer!5e0!3m2!1sen!2sbd!4v1643453189015!5m2!1sen!2sbd" height="200" loading="lazy"></iframe>
                    
                    <HomeProductContainer></HomeProductContainer>
                    
                </div>



            </div>
        </div>
    );
}

export default Blog;
