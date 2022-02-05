import React, {  } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

import Product from '../Product/Product';






const ProductContainer = () => {
    
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
   
    
    
    
    const handleAddToCart = (product) => {
        setCart(product);
    }

    
    


    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Products</h2>
            <h3>Cart Added: {cart.length}</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    products.map(product => <Product 
                        product = {product} 
                        key= {product.key} 
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
                

            </div>

            
        </div>
    );
}

export default ProductContainer;
