import React,{useContext} from "react";
import "./CheckOutItemStyle.scss";
import {CartContext} from "../../provider/cart-provider/CartProvider";

const CheckOutItem = ({cartItems }) => {
  const {  name, imageUrl, price, quantity } = cartItems;
  const {decreaseItemAdded, addItem,clearItemFromCart } = useContext(CartContext)


  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemAdded(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(cartItems)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
