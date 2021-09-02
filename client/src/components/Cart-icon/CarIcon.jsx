import React from "react";
import { ReactComponent as CartItem } from "../Assets/shopping-bag.svg";
import "./CartIconStyle.scss";

const CartIcon = ({toggleCartHidden,cartItemCount}) => {
  return (
  <div className="cart-icon" onClick={()=> toggleCartHidden()}>
    <CartItem className="shopping-icon" />
    <span className="item-count"> {cartItemCount} </span>
  </div>
  )
};

export default CartIcon;
