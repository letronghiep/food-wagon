import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function CartDropDown() {
  return (
    <div className='absolute top-10 bg-white shadow-md shadow-slate-300 w-[280px] border border-slate-300 max-h-['>
      <div className='flex items-center justify-between p-4 cursor-pointer hover:bg-slate-100'>
        <img src='https://cdn.24h.com.vn/upload/4-2020/images/2020-10-25/Thien-than-sexy-phim-18--la-yua-mikami-2-1603597702-767-width1024height768.jpg' alt='' height='70px' width="70px" className='rounded-sm' />

        <div className='ml-3 flex flex-col text-sm truncate'>
          <p className='truncate font-bold text-orange-500 uppercase leading-none'>Học lập trình web (F8 - Fullstack.edu.vn)</p>
          <p className='truncate leading-none mt-1'>Desc</p>
          <div className='flex items-center text-sm leading-none mt-1'>
            <span>Old price</span>
            <span className='ml-3'>New Price</span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between p-5 cursor-pointer hover:bg-slate-100'>
        <img src='https://cdn.24h.com.vn/upload/4-2020/images/2020-10-25/Thien-than-sexy-phim-18--la-yua-mikami-2-1603597702-767-width1024height768.jpg' alt='' height='70px' width="70px" className='rounded-sm' />

        <div className='ml-3 flex flex-col text-sm truncate'>
          <p className='truncate font-bold text-orange-500 uppercase leading-none'>Học lập trình web (F8 - Fullstack.edu.vn)</p>
          <p className='truncate leading-none mt-1'>Desc</p>
          <div className='flex items-center text-sm leading-none mt-1'>
            <span>Old price</span>
            <span className='ml-3'>New Price</span>
          </div>
        </div>
      </div>

      <Link to='/checkout' className="mx-auto flex items-center justify-center my-4 py-2  rounded-md  bg-orange-500 hover:bg-orange-400 w-[90%] text-white font-bold uppercase" children="Go to checkout" />
    </div>
  )
}

export default CartDropDown
