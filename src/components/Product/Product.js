import React, {  } from 'react';

const Product = (props) => {
    
    const {name, img, shortTitle} = props.product; 
    
   




    return (

        <div className="col">
        <div className="card h-100">
            <div className="card-img">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{shortTitle}</p>
            </div>



        </div>
    </div>

    );
}

export default Product;
