import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { clearTheCart } from "../../utilities/fakedb";
import { UserContext } from "../../App";


const SimpleCardFrom = ({ handlePayment }) => {
    
    const { value2 } = useContext(UserContext);

    const [cart, setCart] = value2;
   

    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
            handlePayment(paymentMethod.id)
            clearTheCart([]);
            setCart([]);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-primary mt-3 ms-auto' type="submit" disabled={!stripe}>
                
                    Pay
                </button>
            </form>
            {
                paymentError && <p style={{ color: "red" }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: "green" }}>Your payment was successfully.</p> 
                
            }
        </div>
    );
};

export default SimpleCardFrom;