import React, { } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'




const Product = (props) => {


    const { name, img, price } = props.product;


    


    return (

        <div className="col">
            <div className="card h-100 bg-dark shadow border-0">
                <div className="card-img">
                    <img className="img-fluid " width="500" src={img} alt="" />
                </div>
                <div className="card-body pb-0">
                    <h4 className="card-title text-info m-0">{name}</h4>

                </div>


                <div className="card-footer mb-2 bg-dark border-0 d-flex d-flex justify-content-between aligns-items-center">

                    <h3 className="align-items-center bg-dark text-info m-0">BDT {price} Tk.</h3>

                   
                    <Button
                        variant="outline-info"
                        href='#'
                        onClick={() => props.handleAddToCart(props.product)}

                    >Add To Cart <FontAwesomeIcon icon={faCartPlus} /></Button>

                </div>





            </div>
        </div>

    );
}

export default Product;
