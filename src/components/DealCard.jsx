import React from 'react'

function DealCard({ dealCard, className, width, height }) {
    const { src, alt, title, term, discount, desc } = dealCard;
    return (
        <div className={className}>
            <img className='rounded-xl' src={src} alt={alt} width={width} height={height} />
            {/* {
                discount && <span className='absolute bottom-[102px] left-0 translate-y-5'>
                    <img src={discount} alt={alt} />
                </span>
            } */}
            {discount && <p className=' text-white absolute left-0 bottom-[100px] px-6 translate-y-[19px] rounded-bl-2xl rounded-tr-2xl bg-[#ffb30e] py-5  flex items-center'><span className='font-bold text-6xl'>{discount}</span>
                <span className='leading-none text-xl flex flex-col'>
                    <span className='font-bold'>%</span>
                    <span>Off</span>
                </span>
            </p>}
            <span className='font-bold  mt-2.5 mb-2'>{title}</span>
            {term && <span className='font-bold text-md text-orange-600  bg-orange-200 max-w-max px-4 py-1 rounded-lg
            '>{term}</span>}
            {desc && <p>{desc}</p>}
        </div>
    )
}

export default DealCard
