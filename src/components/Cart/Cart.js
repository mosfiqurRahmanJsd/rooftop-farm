import React, { } from 'react';
import useCart from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import { Button } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';


const Cart = () => {

    const [products] = useProducts();
    const [cart] = useCart(products);
    

    
    


    return (
        <div className="cart container">
            <div className="row">
                <div className="col-md-8">
                    {
                        cart.map(singleCart => <CartItem singleCart = {singleCart} key= {singleCart._id}></CartItem>)
                    
                    }
                </div>
                <div className="col-md-4">

                    <h2>Order Summary</h2>
                    <h3>Items Ordered { cart.length }</h3>
                    <p>Total : { cart.map(singleCart => console.log(singleCart.price)) }</p>
                    <p>Total Shipping : $5 </p>
                    <p>Sub Total : { }</p>
                    <Button variant="outline-info" href='/login'>Log Out</Button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
