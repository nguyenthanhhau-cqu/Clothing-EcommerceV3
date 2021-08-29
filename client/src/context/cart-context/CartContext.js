import { createContext } from "react";

const CartContext = createContext({
  hidden: true,
  setToggle: () => {},
});

export default CartContext;
