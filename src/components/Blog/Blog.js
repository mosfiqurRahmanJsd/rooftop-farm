
import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';




const Blog = (props) => {
    const {title, image, _id, shotDetail} = props.blog;
    return (
        <>
        <Link to={`/blog/${_id}`} className="text-decoration-none text-info">
        <div className="row border-bottom">
            <div className="col-md-4">
                <img src={image} alt="" />
            </div>
            <div className="col-md-8">
                <h3>{title}</h3>
                <p>{shotDetail}</p>
            </div>
        </div>
        </Link>



        </>
    );
}

export default Blog;
