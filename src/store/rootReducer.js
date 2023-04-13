import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer } from "./categories/categoriesSlice";
import { cartReducer } from "./cart/cartSlice";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    cart: cartReducer
})