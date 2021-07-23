import { ADD_ITEM, CLEAR_ITEM, DECREASE_ITEM } from "./cartType";
import { cartIteAdded, decreaseItem } from "../utils/cartItemAdded";

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
    case CLEAR_ITEM:
      return {
        ...state,
        item: state.item.filter((item) => item.id !== payload),
      };
    case DECREASE_ITEM:
      return {
        ...state,
        item: decreaseItem(state.item, payload),
      };

    default:
      return state;
  }
};
