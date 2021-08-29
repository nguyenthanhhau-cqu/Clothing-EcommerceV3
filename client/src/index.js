import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CartProvider from "./provider/cart-provider/CartProvider";

ReactDOM.render(
  <CartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>,
  document.getElementById("root")
);
