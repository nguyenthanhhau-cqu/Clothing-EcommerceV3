import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // allow browser to catch our store
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
