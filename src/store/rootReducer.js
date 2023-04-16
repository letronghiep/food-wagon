import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer } from "./categories/categoriesSlice";
import { cartReducer } from "./cart/cartSlice";
import { userReducer } from "./user/userSlice";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})