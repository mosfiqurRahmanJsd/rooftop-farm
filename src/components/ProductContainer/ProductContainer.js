import React, { useState } from 'react';
import { useEffect } from 'react';

import { addToDb, getStoredCart } from '../../utilities/fakedb';



import Product from '../Product/Product';






const ProductContainer = () => {



    const [cart, setCart] = useState([]);
    
    console.log(cart);

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
                if(addedProduct) {
                    const quantity = savedCart[_id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
                
            }
            setCart(storedCart);
        }
    }, [products]);








    const handleAddToCart = (product) => {
    //    const newCart = [...cart, product];

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
       setCart(newCart);
       //    save to local storage
       addToDb(product._id);
    }




    return (
        <div className="container my-5">
            <h2 className="pt-5 text-center">Latest Products</h2>
            <h3>Cart Added: {cart.length}</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    products.map(product => <Product
                        product={product}
                        _id={product._id}
                        key={product._id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }


            </div>


        </div>
    );
}

export default ProductContainer;
