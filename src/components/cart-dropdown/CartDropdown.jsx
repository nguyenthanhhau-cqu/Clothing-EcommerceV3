import React from "react";
import "./CartDropdownStyle.scss";
import CustomButton from "../custom-button/CustomButton";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECK OUT</CustomButton>
  </div>
);

export default CartDropdown;
