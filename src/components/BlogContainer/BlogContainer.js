import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

import './BlogContainer.css';

const BlogContainer = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs);
    useEffect(() => {
       fetch('https://obscure-journey-61930.herokuapp.com/blog')
       .then(res => res.json())
       .then(data => setBlogs(data))
    }, []);


    return (
        <div className="blog">
            <h2 className="py-3 text-center">Latest Blog</h2>
            <div className="container">
                {
                    blogs.map(blog => <Blog blog={blog} key={blog._id}></Blog>)
                }
            </div>

        </div>
    );
}

export default BlogContainer;
