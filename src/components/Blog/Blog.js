
import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';




const Blog = (props) => {
    const {title, img, _id, shotDetail} = props.blog;
    return (
        <>
        <Link to={`/blog/${_id}`} className="text-decoration-none text-dark">
        <div className="row border rounded mb-3 bg-blog shadow-sm">
            <div className="col-md-4 p-0">
                <img width="410" height="235" src={img} alt="" />
            </div>
            <div className="col-md-8 py-3">
                <h3>{title}</h3>
                <p>{shotDetail}</p>
            </div>
        </div>
        </Link>



        </>
    );
}

export default Blog;
