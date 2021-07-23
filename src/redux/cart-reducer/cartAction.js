import { ADD_ITEM, CLEAR_ITEM, DECREASE_ITEM } from "./cartType";

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};
export const removeItem = (itemID) => (dispatch) => {
  dispatch({
    type: CLEAR_ITEM,
    payload: itemID,
  });
};
export const decreaseItem = (item) => (dispatch) => {
  dispatch({
    type: DECREASE_ITEM,
    payload: item,
  });
};
