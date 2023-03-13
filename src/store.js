import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import modelReducer from "./modal/modalSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, modal: modelReducer },
});
