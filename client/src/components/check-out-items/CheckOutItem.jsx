import React from "react";
import "./CheckOutItemStyle.scss";

const CheckOutItem = ({cartItems,addItemToCart,decreaseItemFromCart,clearItemFromCart }) => {
  const {  name, imageUrl, price, quantity } = cartItems;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItemFromCart(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItems)}>
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
