import {combineReducers} from 'redux';
import userSlice from './AuthSlice';

import {sterngymAuthAPIS} from './Auth';
import {getTrainerApis} from './Trainer';
export default combineReducers({
  userSlice,
  [sterngymAuthAPIS.reducerPath]: sterngymAuthAPIS.reducer,
  [getTrainerApis.reducerPath]: getTrainerApis.reducer,
});
