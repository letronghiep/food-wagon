import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CardPreview({ card }) {
    const { imageUrl, title, route } = card;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route)
    return (
        <div className='relative flex flex-col items-center justify-between rounded-lg overflow-hidden bg-white hover:bg-slate-100 cursor-pointer p-4'  onClick={onNavigateHandler}>
            <Link to=''>
                <img className='object-cover rounded-lg h-[208px] hover:scale-110 transition-transform' src={imageUrl} alt={title} width="208px" />
            </Link>
            <button className='py-2 px-3 border-2 border-slate-200 text-white rounded-lg hover:bg-slate-50 hover:text-orange-600 uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full'>Shop now</button>
            <p className='text-orange-600 font-bold text-xl mt-4 text-center'>{title.toUpperCase()}</p>
        </div>
    )
}

export default CardPreview
