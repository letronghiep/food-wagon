import React from 'react'
import { Add, Clear, Remove } from '@mui/icons-material'

function CheckoutItem() {
    return (
        <div className='flex items-center p-3 w-full min-h-[100px] border-b'>
            <div className='flex items-center w-[23%]'>
                <img className='object-cover mr-4 rounded-md overflow-hidden' src='https://gamek.mediacdn.vn/133514250583805952/2021/7/13/-1626158764746149978973.jpg' alt='' />
            </div>
            <div className='w-[23%]'>
                <span className='ml-1 font-bold text-orange-500 text-xl uppercase truncate max-w[70%]'>Hamburger Dac biet</span>
            </div>
            <div className='flex items-center justify-start w-[23%]'>
                <Remove className='cursor-pointer' />
                <span className='border py-1 px-3 text-xl'>2</span>
                <Add className='cursor-pointer' />
            </div>

            <div className='w-[23%]'>
                <span className='text-xl'>30.000đ</span>
            </div>
            <div className='w-[8%] flex items-center justify-center cursor-pointer'>
                <Clear />
            </div>
        </div>
    )
}

export default CheckoutItem
