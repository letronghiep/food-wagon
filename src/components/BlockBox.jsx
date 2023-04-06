import React from 'react'
import blockBoxs from '~/data/blockBox'
import DealCard from './DealCard'
function BlockBox() {
    return (
        <div id='block-box' className='bg-amber-50 pt-12'>
            <div className='container max-w-7xl mx-auto px-[70px]'>
                <h1 className='text-center font-bold text-5xl text-orange-500 mt-6'>How does it work</h1>
                <div className='grid grid-cols-4 mt-14 px-36 gap-x-1'>
                    {
                        blockBoxs.map(box => (
                            <DealCard key={box.id} height="112px" dealCard={box} className="grid grid-rows-1 items-center text-center cursor-pointer  px-4 mb-14 text-base leading-tight text-slate-600 rounded-lg" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlockBox
