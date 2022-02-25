import React, { useEffect, useState } from 'react';

import Rooftop from '../Rooftop/Rooftop';



const RooftopContainer = () => {
    

    const [rooftop, setRooftop] = useState([]);
    useEffect(() => {
       fetch('https://obscure-journey-61930.herokuapp.com/rooftop')
       .then(res => res.json())
       .then(data => setRooftop(data))
    }, []);
 
    Array.prototype.reverse.call(rooftop);

    return (
        <div className="container my-5">
            <h2 className="py-3 text-center text-info">Latest Rooftops</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                {
                    rooftop.map(roof => <Rooftop roof={roof} key={roof._id}></Rooftop>)
                }
            </div>


        </div>
    );
}

export default RooftopContainer;
