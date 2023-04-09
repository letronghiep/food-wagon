import React from 'react'
import Header from '~/components/Header'
import FlashDeal from '~/components/FlashDeal'
import BlockBox from '~/components/BlockBox'
import PopularItems from '~/components/PopularItems'
import Banner from '../components/Banner'
import BestDeal from '../components/BestDeal'
import Cta from '../components/Cta'
import { Outlet } from 'react-router'
function Home() {
    return (
        <>
            <div className=''>
                <Header />
                <FlashDeal />
                <BlockBox />
                <PopularItems />
                <Banner />
                <BestDeal />
                <Cta />
            </div>
            <Outlet />
        </>
    )
}

export default Home
