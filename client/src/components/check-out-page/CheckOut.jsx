import React from "react";
import "./CheckOutStyle.scss";
import {default as CheckOutItem} from "../check-out-items/CheckOutItemContainer";
import StripeCheckoutButton from "../../components/stripeButton/StripeButton";

const CheckOut = ({cartItems,totalPrice}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems && cartItems.map((item) => (
        <CheckOutItem key={item.id} cartItems={item} />
      ))}

      <div className="total">${totalPrice}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};


export default CheckOut;
