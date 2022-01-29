import React, { useState } from 'react';
import customData from '../../customData/products.json'
import Header from '../Header/Header';
import Product from '../Product/Product';


const ProductContainer = () => {
    const first9 = customData.slice(0, 9);
    const [product, ] = useState(first9);

    const [cart, setCart] = useState([]);


    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }




    return (
        <div className="container my-5">

        
            <h2 className="py-3 text-center">Latest Products</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    product.map(product => <Product product={product} key={product.url} handleAddProduct={() => handleAddProduct(product)}></Product>)
                }
                

            </div>

            <Header cart={cart}></Header>
        </div>
    );
}

export default ProductContainer;
