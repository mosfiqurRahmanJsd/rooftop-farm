import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import AddProduct from '../AddProduct/AddProduct';
import './Dashboard.css';

const Dashboard = () => {

    return (
        <div className="container dashboard">
            <h1>This is Dashboard</h1>

            <AddProduct></AddProduct>
            <AddBlog></AddBlog>
        </div>
    );
}

export default Dashboard;
