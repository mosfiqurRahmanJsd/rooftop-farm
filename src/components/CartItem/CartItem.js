import React from 'react';

const CartItem = (props) => {
    console.log(props.singleCart);

    const {name, img, price, quantity,} = props.singleCart;
    return (
        <div>
            <div className="row d-flex align-items-center">
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="">
                    <h3>{name}</h3>
                    <p>Quantity {quantity}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
