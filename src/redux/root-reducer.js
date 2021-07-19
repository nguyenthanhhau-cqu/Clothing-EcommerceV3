import { userReducer } from "./user-reducer/userReducer";
import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
});
