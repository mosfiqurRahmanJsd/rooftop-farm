import React, { useState } from 'react';


const DashboardDetails = (props) => {
    const history = props.singleOrder;

    

    return (
        <li class="list-group-item d-flex justify-content-between align-items-start" key={history._id}>
            <div class="ms-2 me-auto">
                <div class="fw-bold">Transaction ID: {history.trnxID}</div>
                
                
            </div>
            <span class="badge bg-primary rounded-pill">Ordered Item: {history.cart.length}</span>
        </li>
    );
};

export default DashboardDetails;