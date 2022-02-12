import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

import Product from '../Product/Product';






const ProductContainer = () => {



    const { value2 } = useContext(UserContext);
    const [cart, setCart] = value2;

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-journey-61930.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    useEffect(() => {
        
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const _id in savedCart) {
                const addedProduct = products.find(product => product._id === _id);
                storedCart.push(addedProduct);
            }
            setCart(storedCart);
        }
    }, [products]);








    const handleAddToCart = (products) => {
        const exists = cart.find(pd => pd.key === products.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== products.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, products];
        }
        else {
            products.quantity = 1;
            newCart = [...cart, products];
        }

        // save to local storage (for now)
        addToDb(products._id);
        setCart(newCart);

    }




    return (
        <div className="container my-5">
            <h2 className="pt-5 text-center">Latest Products</h2>
            <h3>Cart Added: {cart.length}</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }


            </div>


        </div>
    );
}

export default ProductContainer;
