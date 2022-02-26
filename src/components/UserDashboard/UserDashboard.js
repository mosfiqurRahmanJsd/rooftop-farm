import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import DashboardDetails from '../DashboardDetails/DashboardDetails';
import './UserDashboard.css';

const UserDashboard = () => {

    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;
    const [payment, setPayment] = useState([]);
    useEffect(() => {
        fetch('https://obscure-journey-61930.herokuapp.com/payment')
            .then(res => res.json())
            .then(data => setPayment(data))
    }, []);

    
    console.log(payment[1]);


    return (

        <div className="top-margin container">
            <h2>Order Summary</h2>
          

            
        </div>


    );
};

export default UserDashboard;