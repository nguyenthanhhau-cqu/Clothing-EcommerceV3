import { FEAT_DATA_SUCCESS } from "./CollectionType";
import { FEAT_DATA_FAILURE } from "./CollectionType";
import { DISPLAY_COLLECTION } from "./CollectionType";
import {
  fireStore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebaseUtils";

export const collectionAction = (collection) => (dispatch) => {
  dispatch({
    type: FEAT_DATA_SUCCESS,
    payload: collection,
  });
};

export const collectionActionAsync = () => (dispatch) => {
  const collectionRef = fireStore.collection("collections");
  collectionRef
    .get()
    .then(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(collectionAction(collectionMap));
    })
    .catch(
      dispatch({
        type: FEAT_DATA_FAILURE,
      })
    );
};

export const displayCollection = (title) => (dispatch) => {
  dispatch({
    type: DISPLAY_COLLECTION,
    payload: title,
  });
};
