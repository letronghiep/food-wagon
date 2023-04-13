import React from 'react'

function DropDownItem({ cartItem }) {
    const { name, price, discount, imageUrl, quantity } = cartItem
    return (
        <div className='flex items-center p-4 cursor-pointer hover:bg-slate-100'>
            <img src={imageUrl} alt={name} className='flex-1 rounded-md w-[70px] h-[70px]' />

            <div className='flex-[2] ml-4 flex flex-col text-md truncate'>
                <p className='truncate font-bold text-orange-500 uppercase leading-none'>{name}</p>
                <p className='truncate leading-none mt-1'>x{quantity}</p>
                <div className='flex items-center leading-none mt-1'>
                    {discount && <span className='text-orange-500'>{price - price * discount / 100}</span>}
                    <span className='ml-3'>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default DropDownItem
