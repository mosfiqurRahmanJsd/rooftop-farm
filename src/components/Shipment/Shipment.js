import React from 'react';
import './Shipment.css'
import ProcessPayment from './ProcessPayment';




const Shipment = () => {
    return (
        <div className="margin container w-50">
            <img className="w-50" src="https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Powered-by-Stripe2-Logo.wine.svg" alt="" />
            <h1>Payment Process</h1>
            <ProcessPayment></ProcessPayment>
        </div>
    );
}

export default Shipment;
