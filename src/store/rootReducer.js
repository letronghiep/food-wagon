import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer } from "./categories/categoriesSlice";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
})