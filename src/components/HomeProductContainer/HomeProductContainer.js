import React, { useContext } from 'react';
import { UserContext } from '../../App';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Product/Product';

const HomeProductContainer = () => {
    
    
    
    const [products, setProducts] = useProducts();

    

    const onlySixProducts = products.splice(-6);
    Array.prototype.reverse.call(onlySixProducts);

    



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
                onlySixProducts.map(product => <Product
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
