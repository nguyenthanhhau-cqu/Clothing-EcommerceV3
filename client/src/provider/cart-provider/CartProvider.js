import { createContext, useState, useEffect } from "react";

import {
  cartIteAdded,
  decreaseItem,
  getCartItem,
  filterItemFromCart,
  getCartPrice,
} from "./cartItemAdded";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  decreaseItemAdded: () => {},
  clearItemFromCart: () => {},
  cartItemCount: 0,
  cartItemPrice: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItemPrice, setCartItemPrice] = useState(0);

  const addItem = (item) => setCartItems(cartIteAdded(cartItems, item));
  const decreaseItemAdded = (item) =>
    setCartItems(decreaseItem(cartItems, item));
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemCount(getCartItem(cartItems));
    setCartItemPrice(getCartPrice(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        clearItemFromCart,
        decreaseItemAdded,
        cartItemCount,
        cartItemPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
