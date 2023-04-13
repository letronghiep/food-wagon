import { createSelector } from "reselect";

export const selectCartReducer = state => state.cart

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectCartCount = createSelector([selectCartItems], cartItems => cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0))


export const selectCartTotal = createSelector([selectCartItems], (cartItems) => cartItems.reduce((total, cartItem) => {
    let newPrice = cartItem.price;
    if (cartItem.discount > 0) newPrice = cartItem.price - cartItem.price * cartItem.discount / 100;
    return total + newPrice * cartItem.quantity

}, 0))