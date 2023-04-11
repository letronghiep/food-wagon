import { FacebookRounded, Instagram, MailOutline, Twitter } from '@mui/icons-material'
import React, { Fragment } from 'react'

import SearchInput from '~/components/SearchInput'
import Button from '~/components/Button'


const cities = [
    "San Francisco", "Miami", "San Diego", "East Bay", "Long Beach", "Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville", "New York City", "Orange County", "Atlanta", "Charlotte", "Denver", "Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City", "Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans",
]
const options = [
    {
        title: "Company",
        prop: ["About Us", "Team", "Careers", "blog"]
    },
    {
        title: "Contact",
        prop: ["Help & Support", "Partner with us", "Ride with us", "Ride with us"]
    },

    {
        title: "Legal",
        prop: ["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"]
    },

    {
        title: "Legal",
        prop: ["Terms & Conditions", "Refund & Cancellation", "Privacy Policy", "Cookie Policy"]

    }
]
const renderItems = (props, title) => {
    return <div>
        <h2 className='text-white uppercase text-2xl font-bold'>{title}</h2>
        <ul className='text-white mt-5 list-none'>
            {props.map((item) => (
                <li className='mb-2 font-medium cursor-pointer'>{item}</li>
            ))}
        </ul>
    </div>
}
function Footer() {
    const submitEmail = (e) => {
        e.preventDefault();
        alert("Khong biet lam dau 😖")

    }
    return (
        <Fragment>
            {/* <Outlet /> */}
            <footer className='bg-zinc-900 py-12'>
                <div className='container max-w-7xl mx-auto mt-10 px-[70px]'>
                    <div className='pb-4 border-b border-gray-300'>
                        <h1 className='text-white font-bold text-2xl uppercase'>Out top cities</h1>
                        <div className='grid grid-cols-5 mt-6'>
                            {
                                cities.map(item => (
                                    <p className='text-base text-white mb-2 cursor-pointer'>{item}</p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='pt-5 grid grid-cols-4'>
                        {
                            Object.keys(options).map((title) => {
                                const props = options[title]
                                return renderItems(props.prop, props.title)
                            })
                        }
                    </div>
                    <div className='grid grid-cols-4 mt-4'>
                        <div>
                            <h2 className='uppercase font-bold text-white text-2xl'>Follow us</h2>
                            <div className='flex items-center text-white my-5'>
                                <Instagram className='mr-3' />
                                <FacebookRounded className='mr-3' />
                                <Twitter />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-4'>
                        <div>
                            <h2 className='uppercase font-bold text-white text-2xl'>Receive exclusive offers and
                                discounts in your mailbox</h2>
                            <form className='flex items-center justify-between mt-5' onSubmit={submitEmail}>
                                <SearchInput className="w-[60%] text-black focus:outline-none" bgInput="bg-slate-200 focus:outline-slate-200" Icon={MailOutline} placeholder="Enter email" />
                                <Button type="Submit" className="text-white bg-[#ffb30e] py-2 rounded-lg px-4 flex items-center justify-center font-bold">Subscribe</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}

export default Footer
