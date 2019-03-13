import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../config/stripe';
import PAYMENT_SERVER_URL from '../config/server';


const CURRENCY = 'USD';

const fromDollarToCent = amount => amount * 100;

const successPayment = data => {
  console.info('Payment Successful', data);
  alert("Continue from here to order complete flow")
};

const errorPayment = data => {
  console.error('Payment Error',data);
};
axios.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

axios.interceptors.response.use(response => {
  console.log('Received Response:', response)
  return response
})

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    },{ headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } } )
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    image='/assets/images/logo.png'
    shippingAddress
    billingAddress
    allowRememberMe={false}
   >
    <button class="MuiButtonBase-root-71 MuiButton-root-123 MuiButton-text-125 MuiButton-flat-128 CartComponent-btnStyle-198" tabindex="3" type="button">
    <span class="MuiButton-label-124">Checkout with Stripe</span><span class="MuiTouchRipple-root-392"></span></button>
  </StripeCheckout>

export default Checkout;