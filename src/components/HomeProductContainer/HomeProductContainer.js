import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Product/Product';

const HomeProductContainer = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://obscure-journey-61930.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                Array.prototype.reverse.call(data);
                let sixProduct = [];
                for (let i = 0; i < 6; i++) {
                    const element = data[i];
                    sixProduct.push(element)
                }
                setProducts(sixProduct);
            });
    }, []);









    const { value2 } = useContext(UserContext);

    const [cart, setCart] = value2;






    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

        // save to to local storage
        addToDb(product._id);
    }




    return (
        <div className="container my-5">
            <h2 className="pt-5 text-center text-info">Latest Products</h2>

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

export default HomeProductContainer;
