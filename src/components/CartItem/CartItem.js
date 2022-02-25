import React from 'react';
import { CloseButton } from 'react-bootstrap';


const CartItem = (props) => {

    const { name, img, price, _id } = props.singleCart;
    

    const { handleRemoveToCart } = props;
    return (
        <div>
            <div className=" d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <img className="mr-5" src={img} alt="" />
                    
                </div>
                <div className="">
                    <h3>{name}</h3>
                    <p>Price: {price}</p>
                    <CloseButton

                        onClick={() => handleRemoveToCart(_id)}
                        key={_id}

                    />

                    
                </div>
            </div>
            <hr />
        </div>
    );
}

export default CartItem;
