import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import DashboardDetails from '../DashboardDetails/DashboardDetails';
import './UserDashboard.css';

const UserDashboard = () => {

    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;
    const [orderSummery, setOrderSummery] = useState([]);
    useEffect(() => {
        const url = `https://obscure-journey-61930.herokuapp.com/payment?email=${loggedInUser.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderSummery(data))
    }, [loggedInUser]);






    return (

        <div className="top-margin container">
            <h2 className="text-center">Order History</h2>
            <h3 className="text-center">Email: {loggedInUser.email}</h3>
            <h3 className="text-center">{loggedInUser.name}</h3>
            <ol class="list-group list-group-numbered">
                {
                    orderSummery.map(singleOrder => <DashboardDetails singleOrder={singleOrder} loggedInUser={loggedInUser}></DashboardDetails>)
                }
                
                
            </ol>


        </div>


    );
};

export default UserDashboard;