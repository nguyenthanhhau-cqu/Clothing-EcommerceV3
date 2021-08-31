import React, { useContext } from "react";
import "./CollectionItems.scss";
import CustomButton from "../custom-button/CustomButton";
import { CartContext } from "../../provider/cart-provider/CartProvider";


const CollectionItems = ({ item }) => {
const {addItem} = useContext(CartContext)

return (
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
}

export default CollectionItems;
