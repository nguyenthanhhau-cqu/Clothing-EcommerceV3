import React, { useEffect } from "react";
import "./CheckOutStyle.scss";
import { connect } from "react-redux";
import CheckOutItem from "../check-out-items/CheckOutItem";
import StripeCheckoutButton from "../../components/stripeButton/StripeButton";
import { cartHidden } from "../../redux/cart-reducer/cartAction";
const CheckOut = ({ totalPrice, cartItem, cartHidden }) => {
  useEffect(() => cartHidden(), [cartHidden]);
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
      {cartItem.map((item) => (
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
const mapStateToProps = (state) => ({
  totalPrice: state.cart.item.reduce(
    (accumulateValue, currentItem) =>
      accumulateValue + currentItem.quantity * currentItem.price,
    0
  ),
  cartItem: state.cart.item,
});

export default connect(mapStateToProps, { cartHidden })(CheckOut);
