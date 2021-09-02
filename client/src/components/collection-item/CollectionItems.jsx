import React from "react";
import "./CollectionItems.scss";
import CustomButton from "../custom-button/CustomButton";


const CollectionItems = ({ item:{imageUrl,name,price},addItem, item}) => {

return (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted onClick={() => addItem(item)}>
      ADD TO CART
    </CustomButton>
  </div>
);
}

export default CollectionItems;
