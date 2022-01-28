import React, { } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from './../../../node_modules/@mui/material/Rating/Rating';


const Product = (props) => {

    const { name, img, shortTitle, price, star } = props.product;






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


                <div className="card-footer bg-white border-0 mb-2 d-flex d-flex justify-content-between aligns-items-center">
               
                  <h3 className="align-items-center">$ {price}</h3>

                  <Rating className="align-items-center" name="size-medium" defaultValue={star} />
            

                  <Button 
                        variant="outline-info" 
                        href='#'
                        onClick={props.handleAddProduct}
                    
                    >Add To Cart <FontAwesomeIcon icon={faCartPlus} /></Button>
                    
                </div>





            </div>
        </div>

    );
}

export default Product;
