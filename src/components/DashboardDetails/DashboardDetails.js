import React, {  } from 'react';


const DashboardDetails = (props) => {
    const history = props.singleOrder;

    

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start" key={history._id}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">Transaction ID: {history.trnxID}</div>
                
                
            </div>
            <span className="badge bg-primary rounded-pill">Ordered Item: {history.cart.length}</span>
        </li>
    );
};

export default DashboardDetails;