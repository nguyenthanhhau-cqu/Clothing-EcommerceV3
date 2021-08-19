import { SHOW_COLLECTION } from "./CollectionType";
import { DISPLAY_COLLECTION } from "./CollectionType";

export const collectionAction = (collection) => (dispatch) => {
  dispatch({
    type: SHOW_COLLECTION,
    payload: collection,
  });
};

export const displayCollection = (title) => (dispatch) => {
  dispatch({
    type: DISPLAY_COLLECTION,
    payload: title,
  });
};
