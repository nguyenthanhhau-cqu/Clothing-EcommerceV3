import React, { useContext } from "react";
import "./CheckOutStyle.scss";
import CheckOutItem from "../check-out-items/CheckOutItem";
import StripeCheckoutButton from "../../components/stripeButton/StripeButton";
import { CartContext } from "../../provider/cart-provider/CartProvider";

const CheckOut = () => {
  const {cartItems,cartItemPrice} = useContext(CartContext)
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

      <div className="total">${cartItemPrice}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
      </div>
      <StripeCheckoutButton price={cartItemPrice} />
    </div>
  );
};


export default CheckOut;
