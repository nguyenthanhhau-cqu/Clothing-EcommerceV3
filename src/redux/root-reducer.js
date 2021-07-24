import { userReducer } from "./user-reducer/userReducer";
import { combineReducers } from "redux";
import { cartReducer } from "./cart-reducer/cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/";
import { CollectionReducer } from "../redux/CollectionReducer/CollectionReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  collection: CollectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
