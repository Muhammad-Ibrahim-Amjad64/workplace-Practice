import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
// import RootReducer from './Reducers/Reducers';
import allreducers from './Reducers';
import {sterngymAuthAPIS} from './Auth';
import {getTrainerApis} from './Trainer';
// import {setupListeners} from '@reduxjs/toolkit/dist/query';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
  blacklist: [sterngymAuthAPIS.reducerPath, getTrainerApis.reducerPath],
};

const rootReducer = (state, action) => {
  return allreducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk, sterngymAuthAPIS.middleware, getTrainerApis.middleware),
});
// setupListeners(store.dispatch);
export const persistor = persistStore(store);
