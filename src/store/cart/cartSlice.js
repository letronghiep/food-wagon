import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
    cartItems: [],
};

const addToCart = (cartItems, productToAdd) => {
    const existCartItems = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existCartItems) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeFromCart = (cartItems, productToRemove) => {
    const existCartItems = cartItems.find((cartItem) => cartItem.id === productToRemove.id);
    if (existCartItems && existCartItems.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

const clearFromCart = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        addItemToCart(state, action) {
            state.cartItems = addToCart(state.cartItems, action.payload);
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeFromCart(state.cartItems, action.payload);
        },
        clearItemFromCart(state, action) {
            state.cartItems = clearFromCart(state.cartItems, action.payload);
        },
        clearCartItems(state, action) {
            state.cartItems = [];
        }
    }
});

export const { addItemToCart, removeItemFromCart, clearItemFromCart, clearCartItems } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;