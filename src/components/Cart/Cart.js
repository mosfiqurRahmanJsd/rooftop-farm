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





const Cart = () => {


    // const [products] = useProducts();
    // const [cart, setCart] = useCart(products);


    
    const { value2 } = useContext(UserContext);
    const [cart, setCart] = value2;




    const navigate = useNavigate();


    const [total, setTotal] = useState(0);
    
    console.log('total', total);

    useEffect(() => {
        sum();
    }, []);
    


    

    const sum = () => {
        if (cart?.length) {
            let total = 0;
            cart.forEach(value => {
                console.log(value.price);
                // console.log(value.quantity);
                total += value.price;
            })
            
        }
            setTotal(parseFloat(total))
            setTotal(total);
     
    }
   



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
                <div className="col-md-8">
                    {
                        cart.map((singleCart, index) => <CartItem singleCart={singleCart} handleRemoveToCart={handleRemoveToCart} key={index}></CartItem>)

                    }
                </div>
                <div className="col-md-4">
                    <h3>Total Price : { total} </h3>
                    <Button onClick={handleProceedCheck}

                        variant="outline-info">Proceed Checkout</Button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
