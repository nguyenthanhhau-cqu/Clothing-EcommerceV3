import { ADD_ITEM } from "./cartType";

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};
