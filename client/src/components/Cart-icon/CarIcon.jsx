import React from "react";
import { ReactComponent as CartItem } from "../Assets/shopping-bag.svg";
import "./CartIconStyle.scss";
import { connect } from "react-redux";
import { selectCartItemCount } from "../../redux/cart-reducer/cartSelector";

const CartIcon = ({ itemCount }) => (
  <div className="cart-icon">
    <CartItem className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);
const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemCount(state),
  };
};
export default connect(mapStateToProps)(CartIcon);
