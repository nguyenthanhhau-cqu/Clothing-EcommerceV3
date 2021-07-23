import React from "react";

import "./CheckOutItemStyle.scss";
import {
  removeItem,
  decreaseItem,
  addItem,
} from "../../redux/cart-reducer/cartAction.js";
import { connect } from "react-redux";

const CheckOutItem = ({ removeItem, cartItems, decreaseItem, addItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default connect(null, { removeItem, decreaseItem, addItem })(
  CheckOutItem
);
