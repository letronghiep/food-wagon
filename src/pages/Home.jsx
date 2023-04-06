import React from 'react'
import Header from '~/components/Header'
import FlashDeal from '~/components/FlashDeal'
import BlockBox from '~/components/BlockBox'
import PopularItems from '~/components/PopularItems'


function Home() {
    return (
        <div className='container'>
            <Header />
            <FlashDeal />
            <BlockBox />
            <PopularItems />
        </div>
    )
}

export default Home
