import React, { } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'




const Product = (props) => {


    const { name, img, price } = props.product;


    


    return (

        <div className="col">
            <div className="card h-100 shadow border-0">
                <div className="card-img">
                    <img className="img-fluid " width="500" src={img} alt="" />
                </div>
                
                <div className="card-body">
                    <h4 className="card-title  m-0">{name}</h4>
                </div>

                <div className="card-footer bg-color pb-2  border-0 d-flex d-flex justify-content-between aligns-items-center">
                    

                    <h3 className="align-items-center  m-0">BDT {price} Tk.</h3>

                   
                    <Button
                        variant="outline-dark"
                        href='#'
                        onClick={() => props.handleAddToCart(props.product)}

                    >Add To Cart <FontAwesomeIcon icon={faCartPlus} /></Button>

                </div>





            </div>
        </div>

    );
}

export default Product;
