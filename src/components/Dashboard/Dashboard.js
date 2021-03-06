import React, { useEffect, useState } from 'react';
import AddBlog from '../AddBlog/AddBlog';
import AddRooftop from '../AddRooftop/AddRooftop';
import './Dashboard.css';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [rooftop, setRooftops] = useState([]);
    const [blog, setBlogs] = useState([]);


    useEffect(() => {
        fetch('https://obscure-journey-61930.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data))
     }, [products]);
    useEffect(() => {
        fetch('https://obscure-journey-61930.herokuapp.com/rooftop')
        .then(res => res.json())
        .then(data => setRooftops(data))
     }, [rooftop]);
    useEffect(() => {
        fetch('https://obscure-journey-61930.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setBlogs(data))
     }, [blog]);
 

    return (
        <div className="container dashboard">
            <h1>This is Admin Dashboard</h1>
            <div className="row my-5 d-flex justify-">
                <div className="col-md-4 ">
                    <div className="box d-flex align-items-center justify-content-center rounded">
                    <h2>Total Products : {products.length}</h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box d-flex align-items-center justify-content-center rounded">
                    <h2>Total Rooftop : {rooftop.length}</h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box d-flex align-items-center justify-content-center rounded">
                        <h2>Total Blog : {blog.length}</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <AddRooftop></AddRooftop>
                </div>
                <div className="col-md-6">
                    <AddBlog></AddBlog>
                </div>
            </div>

            
            
        </div>
    );
}

export default Dashboard;
