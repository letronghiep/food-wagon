import React from 'react'
import { ChevronRight, ChevronLeft } from '@mui/icons-material'
import listTitles from '~/title'
import CardPreview from './CardPreview'
function PopularItems() {
    // const categories = foods.reduce((acc, category) => {
    //     const { titles, items } = category;
    //     acc[titles.toLowerCase()] = items;
    //     return acc;
    // }, {})
    return (
        <section id="popular-items" className='bg-gray-50'>
            <div className='container mx-auto max-w-7xl'>
                <h1 className='font-bold text-center text-5xl text-gray-700 mt-16 mb-12'>Popular items</h1>
                <div className='flex items-center justify-between'>
                    <span className='bg-orange-500 text-white p-2 rounded-full mb-2.5 cursor-pointer'>
                        <ChevronLeft className='text-lg' />
                    </span>
                    <div className='w-full overflow-hidden'>
                        <ul className='w-[120%] flex justify-between items-center gap-x-2'>
                            {
                                listTitles.map(card => (
                                    <li className='flex-1' key={card.id}>
                                        <CardPreview card={card} />
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <span className='bg-orange-500 text-white p-2 rounded-full mb-2.5 cursor-pointer'>
                        <ChevronRight />
                    </span>
                </div>
            </div>
        </section>
    )
}

export default PopularItems
