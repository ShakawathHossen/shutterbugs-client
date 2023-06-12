import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Payment = ({}) => {
    // const cart = JSON.parse(localStorage.getItem('cart'));
    const cart = useLoaderData();
    console.log(cart);


    return (
        <div>
            <Helmet>
                <title>ShuterBugs | Payment</title>
            </Helmet>
            <h1>Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;