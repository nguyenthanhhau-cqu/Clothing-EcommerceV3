import React from "react";
import "./CartDropdownStyle.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/cartItem";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart-reducer/cartSelector";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItem(state),
});
export default connect(mapStateToProps)(CartDropdown);
