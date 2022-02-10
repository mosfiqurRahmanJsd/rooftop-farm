import React, {  } from 'react';
import Rating from './../../../node_modules/@mui/material/Rating/Rating';

const HomeProduct = (props) => {
    


    const { name, img, price, rating } = props.product;



    return (
        <div className="col">
        <div className="card h-100">
            <div className="card-img">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>


            <div className="card-footer bg-white border-0 mb-2 d-flex d-flex justify-content-between aligns-items-center">
           
              <h3 className="align-items-center">$ {price}</h3>

              <Rating className="align-items-center" name="size-medium" defaultValue={rating} />
        

                
            </div>





        </div>
    </div>

    );
}

export default HomeProduct;
