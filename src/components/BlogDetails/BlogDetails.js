import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

    const { id } = useParams();


    const [blog, setBlog] = useState([]);

    const {detail, title, image, shotDetail, moreImg, moreDetail} = blog;

    useEffect(() => {
        fetch(`https://obscure-journey-61930.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id]);


    console.log(blog);


    return (
        <div className="container mt-5 pt-5">
            <h2 className="text-dark mb-4">{title}</h2>
            
            
            <div className="row">
                <div className="col-md-8 mb-5">
                <img className="w-100" height="450px" src={image} alt="" />
                </div>
                <div className="col-md-4">
                <h4 className="text-info text-justify" style={{textAlign: 'justify'}}>{shotDetail}</h4>
                </div>
            </div>
                     
            
            <p className="mb-5"  style={{textAlign: 'justify'}}>{detail}</p>
            <img className="w-100" src={moreImg} alt="" />
            <p className="mt-3" style={{textAlign: 'justify'}}>{moreDetail}</p>
        </div>
    );
}

export default BlogDetails;
