import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const BACKEND_API = import.meta.env.VITE_BACKEND_API_URL;

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const { error, paymentMethod } = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        // });

        // if (!error) {
        // const { id } = paymentMethod;
        const response = await axios.post(`${BACKEND_API}/create_checkout_session`, {
            items: [{ name: 'One time Translation', price: 1, quantity: 1 }]
        });

        const session = await response.data;
        const result = await stripe.redirectToCheckout({ sessionId: session.id });
        console.log(result)

        if (result.error) {
            console.error(result.error.message);
        }
        // } else {
        //     console.error(error.message);
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <CardElement /> */}
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
}

export default CheckoutForm;
