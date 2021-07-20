import React from "react";
import { ReactComponent as CartItem } from "../Assets/shopping-bag.svg";
import "./CartIconStyle.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <CartItem className="shopping-icon" />
    <span className="item-count"> 0 </span>
  </div>
);
export default CartIcon;
