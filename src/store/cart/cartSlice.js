import { createSlice } from "@reduxjs/toolkit";

export const CART_INITIAL_STATE = {
    cartItems: [],
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {

    }
})