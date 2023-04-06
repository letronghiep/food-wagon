import React from 'react'
<<<<<<< HEAD

function CardItem({ product }) {
  return (
    <div >

=======
import Button from './Button'
function CardItem({ product }) {
  const { name, price, discount, imageUrl } = product;
  return (
    <div className='relative flex flex-col justify-start max-h-[470px] cursor-pointer bg-gray-200 mt-6 rounded-2xl overflow-hidden'>
      <img src={imageUrl} alt={name} className='rounded-2xl w-full object-cover h-[308px]' />
      <h2 className='text-lg font-semibold text-orange-500 uppercase max-w-[208px] truncate mt-4 px-3'>{name}</h2>
      <span className='flex items-center justify-start p-3 text-lg'>
        {discount && <p className='mr-4 text-orange-500 font-bold'>{price - (discount * price / 100)}đ</p>}
        {discount ? <del className='text-slate-400'>{price}đ</del> : <p>{price}đ</p>}
      </span>
      {discount && <p className=' text-white absolute left-0 bottom-[160px] px-7 translate-y-[16px] rounded-bl-2xl rounded-tr-2xl bg-[#ffb30e] py-5  flex items-center'><span className='font-bold text-6xl'>{discount}</span>
        <span className='leading-none text-xl flex flex-col'>
          <span className='font-bold'>%</span>
          <span>Off</span>
        </span>
      </p>}
      <Button children="Order now" className="mt-auto font-semibold bg-orange-600 hover:bg-orange-500 text-white uppercase p-3 rounded-2xl" />
>>>>>>> day4
    </div>
  )
}

export default CardItem
