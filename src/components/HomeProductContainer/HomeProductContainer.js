import React, { useState } from 'react';
import customData from '../../customData/products.json'
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProductContainer = () => {

    const first9 = customData.slice(0, 9);
    const [product] = useState(first9);




    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Products</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    product.map(product => <HomeProduct product={product} key={product.url}></HomeProduct>)
                }
                

            </div>

            
        </div>
    );
}

export default HomeProductContainer;
