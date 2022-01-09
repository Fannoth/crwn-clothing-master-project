import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewares = [logger];

if (process.env.NODE_ENV === "production") {
  middlewares.pop();
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
