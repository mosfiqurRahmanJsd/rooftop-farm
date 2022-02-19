import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

    const { id } = useParams();


    const [blog, setBlog] = useState([]);

    const {title, image, shotDetail, detail} = blog;

    useEffect(() => {
        fetch(`https://obscure-journey-61930.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id]);


    console.log(blog);


    return (
        <div className="container mt-5 pt-5">
            <h1>{title}</h1>
            <img className="img-fluid" src={image} alt="" />
            <h6>{shotDetail}</h6>
            <p>{detail}</p>
        </div>
    );
}

export default BlogDetails;
