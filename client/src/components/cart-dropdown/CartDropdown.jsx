import React, { useContext } from "react";
import "./CartDropdownStyle.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/cartItem";
import { withRouter } from "react-router-dom";
import { CartContext } from "../../provider/cart-provider/CartProvider";

const CartDropdown = ({ history }) => {

  const {cartItems, toggleHidden} = useContext(CartContext)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <CustomButton onClick={() => {history.push("/checkout");toggleHidden()} }>
        GO TO CHECK OUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
