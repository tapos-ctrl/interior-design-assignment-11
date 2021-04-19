import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardform/SimpleCardform';
// import SimpleCardForm from './SimpleCardForm';



const stripePromise = loadStripe('pk_test_51IeEtpDSrNa48jnYx2CX3L6OcrKfe77yPe0TIhBreF81hZMQPBjZEV2Oxzdb0fiEwYrX0KMAWfeNKU3OCPLt87IJ00p35lus0x');

const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
<SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>

  </Elements>
  );
};

export default ProcessPayment;