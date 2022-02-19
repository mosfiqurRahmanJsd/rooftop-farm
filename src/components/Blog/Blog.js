
import React from 'react';
import './Blog.css';




const Blog = (props) => {
    const {title, image, detail} = props.blog;
    return (
        <div className="row">
            <div className="col-md-4">
                <img src={image} alt="" />
            </div>
            <div className="col-md-8">
                <h3>{title}</h3>
                <p>{detail}</p>
            </div>
            
        </div>
    );
}

export default Blog;
