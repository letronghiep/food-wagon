import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add, Clear, Remove } from '@mui/icons-material'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../store/cart/cartSlice';

function CheckoutItem({ cartItem, className }) {
    const dispatch = useDispatch();
    const { name, price, discount, imageUrl, quantity } = cartItem;

    const handlerAddItem = () => {
        dispatch(addItemToCart(cartItem))
    };
    const handlerRemoveItem = () => {
        if (quantity > 1) {

            dispatch(removeItemFromCart(cartItem));
        }
    };

    const handlerClearItem = () => {
        dispatch(clearItemFromCart(cartItem));
    };

    return (
        <div className={className}>
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
            </div>
            <div className='w-[8%] flex items-center justify-center cursor-pointer'>
                <Clear onClick={handlerClearItem} />
            </div>
        </div>
    )
}

export default CheckoutItem
