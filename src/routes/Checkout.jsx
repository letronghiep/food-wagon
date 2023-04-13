import React, { useEffect, useState } from 'react'
import CheckoutItem from '../components/CheckoutItem'
import { selectCartItems, selectCartTotal } from '../store/cart/cartSelector'
import { useDispatch, useSelector } from 'react-redux'
import { loadFromLocalStorage } from '../middleware/localStorage';
import { addItemToCart } from '../store/cart/cartSlice';

function Checkout() {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const total = useSelector(selectCartTotal)

    const [localStorageCartItems, setLocalStorageCartItems] = useState([]);

    useEffect(() => {
        const cartFromLocalStorage = loadFromLocalStorage();
        if (cartFromLocalStorage) {
            setLocalStorageCartItems(cartFromLocalStorage.cartItems);
        }
    }, []);
    // useEffect(() => {


    useEffect(() => {
        localStorageCartItems.forEach(item => {
            const cartItem = cartItems.find(i => i.id === item.id);
            if (!cartItem) {
                dispatch(addItemToCart(item));
            }
        });
    }, [dispatch, cartItems, localStorageCartItems]);





    return (
        <div id='checkout' className='mt-[72px] container max-w-7xl mx-auto px-[70px] pt-10 min-h-[90vh]'>
            <div className='flex  flex-col'>
                <div className='w-full m-3 pb-3 flex justify-between border-b-2'>
                    <div className='capitalize w-[23%]'>
                        <span className='text-xl'>Product</span>
                    </div>
                    <div className='capitalize w-[23%]'>
                        <span className='text-xl'>Description</span>
                    </div>
                    <div className='capitalize w-[23%]'>
                        <span className='text-xl'>Quantity</span>
                    </div>
                    <div className='capitalize w-[23%]'>
                        <span className='text-xl'>Price</span>
                    </div>
                    <div className='capitalize w-[8%]'>
                        <span className='text-xl'>Remove</span>
                    </div>
                </div>
                {
                    cartItems.length > 0 ? cartItems.map(cartItem => (
                        <CheckoutItem cartItem={cartItem} />

                    )) : <span className='mx-auto mt-52 text-3xl uppercase'>Checkout is empty</span>
                }

                <span className='ml-auto text-3xl mt-12'>Total: {total}</span>
            </div>
        </div>
    )
}

export default Checkout
