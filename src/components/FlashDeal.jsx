import React from 'react'
import DealCard from './DealCard'
import FlashDeals from '~/data/flashDeal'
import { useNavigate } from 'react-router-dom'
function FlashDeal() {
    const navigate = useNavigate()
    const handlerNavigate = (item) => {
        navigate(item.route)
    }
    return (
        <div id="flash-deals" className=' max-w-full py-12'>
            <div className='container max-w-7xl mx-auto flex items-center justify-between gap-x-4 px-[70px]'>
                {
                    FlashDeals.map(dealCard => (

                        <DealCard onClick={() => handlerNavigate(dealCard)} key={dealCard.id} dealCard={dealCard} className='relative rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-4 transition-transform text-xl text-slate-600 bg-white shadow-md pb-5' />
                    ))
                }

            </div>
        </div>
    )
}

export default FlashDeal
