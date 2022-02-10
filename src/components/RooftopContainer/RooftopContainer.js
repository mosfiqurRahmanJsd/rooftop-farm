import React, {   } from 'react';

import Rooftop from '../Rooftop/Rooftop';
import useProducts from './../../hooks/useProducts';


const RooftopContainer = () => {
    const products = useProducts([]);
    

    const first9 = products[0].splice(0, 9);
 

    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Rooftops</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    first9.map(pd => <Rooftop pd={pd} key={pd.key}></Rooftop>)
                }
            </div>


        </div>
    );
}

export default RooftopContainer;
