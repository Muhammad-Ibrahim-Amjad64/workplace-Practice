import {
  configureStore,
  getDefaultMiddleware,
  applyMiddleware,
} from "@reduxjs/toolkit"; // import rootReducer from "./reducers";
import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";

import { persistReducer, persistStore } from "redux-persist"; // persist step 1
import thunk from "redux-thunk"; // thunk step 1
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// persist step 2
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"], // Specify the reducers you want to persist
  stateReconciler: autoMergeLevel2,
};
const RootReducer = (state, action) => {
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, RootReducer); // persist step 3

export const store = configureStore({
  reducer: persistedReducer, // persiist step 5
  // middleware:applyMiddleware(thunk)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store); // persist step 4
