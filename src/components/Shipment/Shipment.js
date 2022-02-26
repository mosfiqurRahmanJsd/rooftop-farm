import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { clearTheCart } from '../../utilities/fakedb';
import './Shipment.css'






const Shipment = () => {
    const navigate = useNavigate();

    const trnxRef = useRef()

    const { value1 } = useContext(UserContext);
    const [loggedInUser] = value1;




    const { value2 } = useContext(UserContext);
    const [cart, setCart] = value2;

    
    
    console.log(cart);




    const handleAddPayment = (e) => {
        
        
        const email = loggedInUser.email;
        const trnxID = trnxRef.current.value;
       

        const paymentDetails = {email, trnxID, cart}




        fetch('https://obscure-journey-61930.herokuapp.com/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Payment')
                    e.target.reset();
                }
            })
        e.preventDefault();
        clearTheCart();
        setCart("");
        navigate('/')

    }


    return (
        <div className="margin container ">
            <div className="row">
                <div className="col-md-8">
                    <img src="https://i.ibb.co/c2xZ9qB/bkash.png" alt="" />

                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src="https://i.ibb.co/ScvwTQd/download.png" alt="" />
                    <h2>Bkash Merchant Number</h2>
                    <h3>01860616925</h3>
                    <form onSubmit={handleAddPayment} className="form-inline form-group">

                
                        <input className="form-control" placeholder="Transaction ID"type="text"  ref={trnxRef} />



                        <br />


                        <input className="form-control" type="submit" value="Pay" />

                    </form>
                </div>
            </div>

        </div>
    );
}

export default Shipment;
