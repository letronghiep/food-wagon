import React from 'react'
import Button from './Button';
import { ChevronRight } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function BestCard({ card, className }) {
    const navigate = useNavigate();
    const { title, subTitle, imageUrl, desc, route } = card;
    const onNavigateHandler = () => {
        navigate(route)
    }
    return (
        <div className={className}>
            <div className='px-16 mt-10 mb-6 flex flex-col flex-[1.2] justify-evenly'>
                <div className='text-5xl flex flex-wrap'>
                    <p className='font-bold text-orange-600 mr-4'>{title}</p>
                    <p className='font-bold text-slate-700'>{subTitle}</p>

                </div>
                <p className='text-xl'>{desc}</p>
                <Button onClick={onNavigateHandler} children="Proceed to order" RightIcon={<ChevronRight />} className="bg-amber-400 p-2.5 font-bold text-white text-base flex items-center justify-center mx-auto w-full uppercase mt-8 hover:bg-orange-400 rounded-md" />

            </div>
            <img className='h-[477px] object-cover flex-[2]' src={imageUrl} alt={title} width='646px' />
        </div>
    )
}

export default BestCard
