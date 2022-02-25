import React from 'react';
import { Button } from 'react-bootstrap';

const CartReview = (props) => {

    const {cart} = props;
    let total = 0;
    for(const product of cart) {
        total = total + parseFloat(product.price);
    }


    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Item Ordered { props.cart.length} </h3>
            <h3>Total Price : { total } </h3>
            <Button onClick={props.handleProceedCheck}
                variant="outline-info">Proceed Checkout</Button>
        </div>
    );
}

export default CartReview;
