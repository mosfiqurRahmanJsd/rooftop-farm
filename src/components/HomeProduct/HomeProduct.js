
import { Rating } from '@mui/material';
import React from 'react';





const HomeProduct = (props) => {
    


    const { name, img, price, star } = props.product;

    const rating = Number(star);
    

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

              

              <Rating value={rating} />
        

                
            </div>





        </div>
    </div>

    );
}

export default HomeProduct;
