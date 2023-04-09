import React from 'react'
import { bestCard } from '~/data/title'
import BestCard from './BestCard';
function BestDeal() {
    return (
        <div id="best-deal" className='py-12'>
            <div className='container max-w-7xl mx-auto px-[70px]'>
                {bestCard.map((item, index) => {
                    return index % 2 === 0 ? <BestCard card={item} key={item.id} className="flex bg-white rounded-2xl mt-16 overflow-hidden shadow-md shadow-gray-300" /> : <BestCard card={item} key={item.id} className="flex flex-row-reverse bg-white rounded-2xl mt-16 overflow-hidden shadow-md shadow-gray-300" />
                }
                )}

            </div>
        </div>
    )
}

export default BestDeal
