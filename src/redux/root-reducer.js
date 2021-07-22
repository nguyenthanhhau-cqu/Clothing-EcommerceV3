import { userReducer } from "./user-reducer/userReducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer/cartReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
