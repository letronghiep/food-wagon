import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
function CartIcon() {
    const dispatch = useDispatch()
    // const cartCount = useSelector(selectCartCount);
    const cartItems = localStorage.getItem('cartItems');
    // const cartCount = dispatch(updateItemQuantity)
    return (
        <div className='ml-3 text-gray-600 relative cursor-pointer'>
            <AddShoppingCartIcon />
            <span className='absolute -top-3 -right-3 w-2 h-2 p-2.5 justify-center rounded-full flex items-center text-white bg-orange-500 text-md'>{0}</span>
        </div>
    )
}

export default CartIcon
