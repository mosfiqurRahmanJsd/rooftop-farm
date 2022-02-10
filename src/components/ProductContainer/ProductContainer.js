import React, { } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';

import Product from '../Product/Product';






const ProductContainer = () => {

    const [products] = useProducts();

    const {value2} = useContext(UserContext);
    const [cart, setCart] = value2;
       
    
    // const {value} = useContext(UserContext);
    // const {cartCount, setCartCount} = value;

    
    


    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        
        // save to local storage (for now)
        addToDb(product.key);
        setCart(newCart);
        
    }




    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Products</h2>
            <h3>Cart Added: {cart.length}</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.key}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }


            </div>


        </div>
    );
}

export default ProductContainer;
