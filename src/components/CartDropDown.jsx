import React from 'react'
import { Link } from 'react-router-dom'

import DropDownItem from './DropDownItem'
import { useSelector } from 'react-redux';
import { selectCartItems } from '../store/cart/cartSelector';
function CartDropDown() {
  const cartItems = useSelector(selectCartItems)

  return (
    <div className='absolute top-10 bg-white shadow-md shadow-slate-300 w-[280px] border border-slate-300'>
      <div className='max-h-[300px] overflow-y-auto -scroll-ml-2.5'>
        {cartItems.length ? (cartItems.map(cartItem => (
          <DropDownItem cartItem={cartItem} />
        ))) : (<span className='text-3xl justify-center flex items-center py-20 mt-10'>Your cart is empty</span>)
        }

      </div>
      <Link to='/checkout' className="mx-auto flex items-center justify-center my-4 py-2  rounded-md  bg-orange-500 hover:bg-orange-400 w-[90%] text-white font-bold uppercase" children="Go to checkout" />
    </div>
  )
}

export default CartDropDown
