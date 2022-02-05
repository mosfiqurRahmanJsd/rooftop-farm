import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProductContainer = () => {

    const [product, setProduct] = useState([]);

    const first9 = product.slice(0, 9);
    
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);




    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Products</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    first9.map(product => <HomeProduct product={product} key={product.url}></HomeProduct>)
                }
                

            </div>

            
        </div>
    );
}

export default HomeProductContainer;
