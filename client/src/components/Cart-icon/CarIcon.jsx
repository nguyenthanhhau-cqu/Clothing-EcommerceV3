import React, { useContext } from "react";
import { ReactComponent as CartItem } from "../Assets/shopping-bag.svg";
import "./CartIconStyle.scss";
import {CartContext} from "../../provider/cart-provider/CartProvider";

const CartIcon = ({toggleCartHidden}) => {

  const {cartItemCount} = useContext(CartContext)
  return (
  <div className="cart-icon" onClick={()=> toggleCartHidden()}>
    <CartItem className="shopping-icon" />
    <span className="item-count"> {cartItemCount} </span>
  </div>
  )
};

export default CartIcon;
