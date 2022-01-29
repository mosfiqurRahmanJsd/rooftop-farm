import React, { useState } from 'react';
import customData from '../../customData/products.json'
import Rooftop from '../Rooftop/Rooftop';


const RooftopContainer = () => {

    const first9 = customData.slice(9, 20);
    const [product, ] = useState(first9);








    return (
        <div className="container my-5">
            <h2 className="py-3 text-center">Latest Rooftops</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    product.map(pd => <Rooftop pd={pd} key={pd.url}></Rooftop>)
                }





            </div>


        </div>
    );
}

export default RooftopContainer;
