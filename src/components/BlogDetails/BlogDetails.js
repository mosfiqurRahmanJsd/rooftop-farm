import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {

    const { id } = useParams();


    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(`https://obscure-journey-61930.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id]);


    


    return (
        <div>
            
        </div>
    );
}

export default BlogDetails;
