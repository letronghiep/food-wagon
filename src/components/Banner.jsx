import React from 'react'

import DealCard from './DealCard'

import { banner } from '../data/banner'


import AppleIcon from '@mui/icons-material/Apple';
import { Google } from '@mui/icons-material';

function Banner() {
    return (
        <div id="banner" className='py-12' style={{
            backgroundImage: 'url(https://i.ibb.co/Kr54qBd/cta-one-bg.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
        }}>
            <div className='container max-w-7xl mx-auto relative px-[70px]'>
                <div className='bg-white mt-16 py-14 px-16 grid grid-cols-3 gap-x-3 rounded-3xl shadow-lg shadow-amber-200'>
                    {
                        banner.map((item, index) => (
                            <DealCard key={index} dealCard={item} className="grid grid-cols-2 pr-6 text-4xl justify-around border-r-2 last:border-none text-orange-500 cursor-pointer" width="100px" />
                        ))
                    }
                </div>
                <div className='flex items-center mt-20 px-11'>
                    <div className='mb-[-48px]'>
                        <img src='https://i.ibb.co/tcb5fXr/Image.png' height='' width='500px' alt='Iphone' />

                    </div>
                    <div className='ml-1 mb-10'>
                        <h1 className='text-orange-400 font-bold text-5xl'>Install the app</h1>
                        <p className='max-w-[400px] my-4 text-md'>
                            It's never been easier to order food. Look for the finest
                            discounts and you'll be lost in a world of delectable food.
                        </p>
                        <div className='grid grid-cols-2 gap-x-3'>
                            <button className='flex justify-evenly items-center py-1.5 px-1 rounded-md bg-white'>
                                <span className='text-orange-500'>
                                    <Google sx={{ fontSize: 42 }} />
                                </span>
                                <div className='ml-1 text-left '>
                                    <p className='text-gray-600 text-xs leading-none uppercase'>Get it on</p>
                                    <p className='font-semibold text-xl leading-none'>Google Play</p>

                                </div>
                            </button>
                            <button className='flex justify-evenly items-center py-1.5 px-1 rounded-md bg-white'>
                                <span className='text-orange-500'>
                                    <AppleIcon sx={{ fontSize: 42 }} />
                                </span>
                                <div className='ml-1'>
                                    <p className='text-gray-600 text-xs leading-none'>Download on the</p>
                                    <p className='font-semibold text-2xl leading-none'>App Store</p>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner
