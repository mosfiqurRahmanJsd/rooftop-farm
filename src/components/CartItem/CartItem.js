import React from 'react';

const CartItem = (props) => {
    console.log(props);

    const {category, name, img, price, quantity, shipping} = props.singleCart;
    return (
        <div>
            <div className="row d-flex align-items-center">
                <div className="">
                    <img src={img} alt="" />
                </div>
                <div className="">
                    <small>{category}</small>
                    <h3>{name}</h3>
                    <p>Quantity {quantity}</p>
                    <p>Price: {price}</p>
                    <p>Shipping {shipping}</p>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
