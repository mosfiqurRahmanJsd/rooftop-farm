import React, { } from 'react';

import './Cart.css';


const Cart = () => {




    return (
        <div className="cart container">
            <div className="row">
                <div className="col-md-8">

                </div>
                <div className="col-md-4">
                    <h2>Order Summary</h2>
                    <h3>Items Ordered { }</h3>
                    <p>Total : { }</p>
                    <p>Total Shipping : $5 </p>
                    <p>Sub Total : { }</p>
                </div>
            </div>
        </div>
    );
}

export default Cart;
