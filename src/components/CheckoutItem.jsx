import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add, Clear, Remove } from '@mui/icons-material'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../store/cart/cartSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../middleware/localStorage';
import { selectCartItems } from '../store/cart/cartSelector';
import store from '../store/store';

function CheckoutItem({ cartItem }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const { id, name, price, discount, imageUrl, quantity } = cartItem;

    const handlerAddItem = () => {
        const updatedCartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
        dispatch(addItemToCart(updatedCartItem));
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? updatedCartItem : item
        );
        saveToLocalStorage(updatedCartItems);
    };
    // const handlerAddItem = () => {
    //     const updatedCartItem = { ...cartItem, quantity: cartItem.quantity + 1 };
    //     dispatch(addItemToCart(updatedCartItem));
    // };
    const handlerRemoveItem = () => {
        if (quantity > 1) {
            const updatedCartItem = { ...cartItem, quantity: cartItem.quantity - 1 };
            dispatch(removeItemFromCart(updatedCartItem));
        }
    };

    const handlerClearItem = () => {
        dispatch(clearItemFromCart(cartItem));
    };

    // useEffect(() => {
    //     saveToLocalStorage(cartItems);
    // }, [cartItems]);
    return (
        <div className='flex items-center p-3 w-full min-h-[100px] border-b'>
            <div className='flex items-center w-[23%]'>
                <img className='object-cover rounded-md overflow-hidden h-[200px] w-[200px]' src={imageUrl} alt={name} />
            </div>
            <div className='w-[23%] truncate'>
                <span className='ml-1 font-bold text-orange-500 text-xl uppercase truncate max-w[70%] '>{name}</span>
            </div>
            <div className='flex items-center justify-start w-[23%]'>
                <Remove className='cursor-pointer' onClick={handlerRemoveItem} />
                <span className='border py-1 px-3 text-xl'>{quantity}</span>
                <Add className='cursor-pointer' onClick={handlerAddItem} />
            </div>

            <div className='w-[23%]'>
                {discount ? <span className='text-xl ml-4'>{(price - price * discount / 100) * quantity}</span> : <span className='text-xl ml-4'>{price * quantity}</span>}
                {/* <span className='text-xl ml-4'>{price * quantity}</span> */}
            </div>
            <div className='w-[8%] flex items-center justify-center cursor-pointer'>
                <Clear onClick={handlerClearItem} />
            </div>
        </div>
    )
}

export default CheckoutItem
