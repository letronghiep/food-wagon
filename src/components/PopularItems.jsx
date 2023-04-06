import React from 'react'
import { ChevronRight, ChevronLeft } from '@mui/icons-material'


import listTitles from '~/data/title'
import CardPreview from './CardPreview'
import Carousel from 'better-react-carousel'
function PopularItems() {
    return (
        <div id="popular-items" className='bg-gray-100 py-12'>
            <div className='container mx-auto max-w-7xl px-[70px]'>
                <h1 className='font-bold text-center text-5xl text-gray-700 mt-16 mb-12'>Popular items</h1>
                {/* <div className='flex items-center justify-between'> */}

                <Carousel cols={5} gap={4} arrowLeft={<span className='absolute top-1/2 -translate-y-[50%] left-0 z-10 bg-orange-500 text-white p-2 rounded-full mb-2.5 cursor-pointer'>
                    <ChevronLeft />
                </span>} arrowRight={<span className='absolute top-1/2 -translate-y-1/2 right-0 bg-orange-500 text-white p-2 rounded-full mb-2.5 cursor-pointer'>
                    <ChevronRight />
                </span>}>
                    {listTitles.map(card => (
                        <Carousel.Item className='flex-1' key={card.id}>
                            <CardPreview card={card} />
                        </Carousel.Item>
                    ))}
                </Carousel>
                {/* </div> */}
            </div>
        </div>
    )
}

export default PopularItems
