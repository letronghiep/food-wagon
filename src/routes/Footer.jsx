import React, { Fragment } from 'react'
const cities = [
    "San Francisco", "Miami", "San Diego", "East Bay", "Long Beach", "Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville", "New York City", "Orange County", "Atlanta", "Charlotte", "Denver", "Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City", "Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans",
]

function Footer() {
    return (
        <Fragment>
            {/* <Outlet /> */}
            <footer className='bg-gray-900 py-12'>
                <div className='container max-w-7xl mx-auto mt-10'>
                    <h1 className='text-white font-bold text-2xl uppercase'>Out top cities</h1>
                    <div className='grid grid-cols-4 mt-6'>
                        {
                            cities.map(item => (
                                <p className='text-lg text-white mb-2'>{item}</p>
                            ))
                        }
                    </div>

                </div>
            </footer>

        </Fragment>
    )
}

export default Footer
