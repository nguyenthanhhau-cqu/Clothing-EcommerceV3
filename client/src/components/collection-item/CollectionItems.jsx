import React from "react";
import "./CollectionItems.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart-reducer/cartAction";

const CollectionItems = ({ item, addItem }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </div>
    <CustomButton inverted onClick={() => addItem(item)}>
      ADD TO CART
    </CustomButton>
  </div>
);

export default connect(null, { addItem })(CollectionItems);
