import { SHOW_COLLECTION } from "./CollectionType";
import { DISPLAY_COLLECTION } from "./CollectionType";

export const collectionAction = () => (dispatch) => {
  dispatch({
    type: SHOW_COLLECTION,
  });
};
export const displayCollection = (title) => (dispatch) => {
  dispatch({
    type: DISPLAY_COLLECTION,
    payload: title,
  });
};
