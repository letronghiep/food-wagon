import React from 'react'
import DealCard from './DealCard'
import FlashDeals from '~/data/flashDeal'
function FlashDeal() {
    return (
        <div id="flash-deals" className='bg-white max-w-full py-12'>
            <div className='container max-w-7xl mx-auto flex items-center justify-between gap-x-4'>
                {
                    FlashDeals.map(dealCard => (

                        <DealCard key={dealCard.id} dealCard={dealCard} className='relative overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-4 transition-transform text-xl text-slate-600' />
                    ))
                }

            </div>
        </div>
    )
}

export default FlashDeal
