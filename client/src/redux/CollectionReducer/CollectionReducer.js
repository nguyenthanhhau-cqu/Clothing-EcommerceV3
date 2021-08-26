import { FEAT_DATA_SUCCESS } from "./CollectionType";
import { FEAT_DATA_FAILURE } from "./CollectionType";
import { DISPLAY_COLLECTION } from "./CollectionType";

const initialState = {
  collections: null,
  displayCollection: [],
  isFetching: true,
};

export const CollectionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FEAT_DATA_SUCCESS:
      return {
        ...state,
        collections: payload,
        isFetching: false,
      };
    case FEAT_DATA_FAILURE:
      return {
        ...state,
        isFetching: true,
        error: payload,
      };
    case DISPLAY_COLLECTION:
      return {
        ...state,
        displayCollection: {
          ...state.collections[payload],
        },
      };

    default:
      return state;
  }
};
