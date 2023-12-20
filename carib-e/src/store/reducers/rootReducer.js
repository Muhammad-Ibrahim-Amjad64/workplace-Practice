import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice.js";
import { cartSlice } from "./cartSlice.js";

const RootReducer = combineReducers({
  auth: authSlice.reducer,
  cart: cartSlice.reducer,
  // products: productsSlice.reducer     // for future
});

export default RootReducer;
