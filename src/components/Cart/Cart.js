import React, {  } from 'react';
import useCart from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import { Button } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';



const Cart = () => {

    const [products] = useProducts();
    const [cart] = useCart(products);
    // const [total, setTotal] = useState("");
    
    const navigate = useNavigate();
   
   


//     const sum = () => {
//         var total1 = 0;
//         console.log("total")
//         cart.map(value => {
//             console.log(value.price)
//             console.log(value.quantity)
//             total1 += value.price * value.quantity;
//         })
//         setTotal(total1)
//   }


//   useEffect(() => {
//     sum()
// }, [total])


const handleProceedCheck = () => {
    navigate('/shipment');

}
  
    


    return (
        <div className="cart container">
            <div className="row">
                <div className="col-md-8">
                    {
                        cart.map(singleCart => <CartItem singleCart = {singleCart} key= {singleCart._id}></CartItem>)
                    
                    }
                </div>
                <div className="col-md-4">

                    <h2>Order Summary</h2>
                    <h3>Items Ordered { cart.length }</h3>
                    <p>Total Price : {  }</p>

                    <Button onClick={handleProceedCheck}
                        
                     variant="outline-info">Proceed Checkout</Button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
