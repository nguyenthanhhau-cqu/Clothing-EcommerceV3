import React from "react";
import "./CartDropdownStyle.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/cartItem";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ history,toggleCartHidden,cartItems }) => {

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <CustomButton onClick={() => {history.push("/checkout");toggleCartHidden()} }>
        GO TO CHECK OUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
