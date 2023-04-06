import React from 'react'
import blockBoxs from '~/data/blockBox'
import DealCard from './DealCard'
function BlockBox() {
    return (
        <div id='block-box' className='bg-amber-50 py-12'>
            <div className='container max-w-7xl mx-auto'>
                <h1 className='text-center font-bold text-5xl text-orange-500 mt-6'>How does it work</h1>
                <div className='grid grid-cols-4 mt-14 px-36 gap-x-4'>
                    {
                        blockBoxs.map(box => (
                            <DealCard key={box.id} width="150px" dealCard={box} className="flex row-auto flex-col items-center text-center cursor-pointer bg-white pb-2 px-3 flex-wrap text-xl text-slate-600 rounded-lg justify-around hover:bg-gray-100" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlockBox
