import React, { useContext, useState } from 'react';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { useEffect } from 'react';
import {  removeFromDb } from '../../utilities/fakedb';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import CartReview from '../CartReview/CartReview';





const Cart = () => {


    // const [products] = useProducts();
    // const [cart, setCart] = useCart(products);


    
    const { value2 } = useContext(UserContext);
    const [cart, setCart] = value2;




    const navigate = useNavigate();





   
    


    



    const handleProceedCheck = () => {
        navigate('/shipment');

    }

    


    const handleRemoveToCart = (_id) => {
        
        const newCart = cart.filter(product => product._id !== _id);
        removeFromDb(_id);
        setCart(newCart);

    }




    return (
        <div className="cart container">
            <div className="row">
                <div className="col-md-8 product">
                    {
                        cart.map((singleCart, index) => <CartItem singleCart={singleCart} handleRemoveToCart={handleRemoveToCart} key={index}></CartItem>)

                    }
                </div>
                <div className="col-md-4 ps-5">
                   <CartReview cart={cart} handleProceedCheck={handleProceedCheck}></CartReview>
                </div>
            </div>
        </div>
    );
}

export default Cart;
