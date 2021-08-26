import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios"

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JGk8HICADpxOcG9dVufUNKzSMbFkivHwwyXpEMW9k7cd4STlml6HMCjZ7TxFVh6EeZusmhGRDiruCjkaydnGtOT00UdctMrHb";

  const onToken = async (token) => {
    axios({
      url:'payment',
      method: 'post',
      data:{
        amount:priceForStripe,
        token: token
      }
    }).then(res => {
      alert('Payment successfully')

    }).catch(error => {
      console.log("payment error",JSON.parse(error))
      alert("There was an issue with your payment. please try it again")
    })

  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Hau Clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
