import { ADD_ITEM } from "./cartType";
import { cartIteAdded } from "../utils/cartItemAdded";

const initialState = {
  item: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        item: cartIteAdded(state.item, payload),
      };

    default:
      return state;
  }
};
