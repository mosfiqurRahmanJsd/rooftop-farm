import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';

const HomeProductContainer = () => {

    const [products, setProducts] = useState([]);

    const first9 = products.slice(0, 9);
    
    useEffect(() => {
       fetch('https://obscure-journey-61930.herokuapp.com/product')
       .then(res => res.json())
       .then(data => setProducts(data))
    }, []);
    
    




    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Products</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    first9.map(product => <HomeProduct product={product} key={product._id}></HomeProduct>)
                }
                

            </div>

            
        </div>
    );
}

export default HomeProductContainer;
