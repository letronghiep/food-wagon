import React from 'react'

function DealCard({ dealCard, className, width }) {
    const { src, alt, title, term, discount, desc } = dealCard;
    return (
        <div className={className}>
            <img className='rounded-xl' src={src} alt={alt} width={width} />
            {
                discount && <span className='absolute bottom-24 left-0 translate-y-5'>
                    <img src={discount} alt={alt} />
                </span>
            }

            <span className='font-bold text-xl text-slate-600 mt-2.5 mb-2'>{title}</span>
            {term && <span className='font-bold text-md text-orange-600 bg-orange-200 max-w-max px-4 py-1 rounded-lg
            '>{term}</span>}
            {desc && <span>{desc}</span>}
        </div>
    )
}

export default DealCard
