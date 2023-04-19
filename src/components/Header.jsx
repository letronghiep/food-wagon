import React, { useRef, useState } from 'react'


import Button from './Button';
import images from '~/assets/image';

// Material
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SearchInput from './SearchInput';
function Header() {
    const { location, overLayHeader } = images;
    const [active, setActive] = useState(1);
    const [dataTabs, setDataTabs] = useState([
        {
            id: 1,
            tabTitle: "Delivery",
            tabClass: "myCustomClass",
            tabClicked: false,
            icon: TwoWheelerIcon,
        },
        {
            id: 2,
            tabTitle: "Pick Up",
            tabClass: "myCustomClass",
            tabClicked: false,
            icon: LocalMallIcon,
        }
    ])
    const navigate = (id, name) => {
        setActive(id);
    }
    return (
        <div className='header-group overflow-hidden mt-[72px]'>
            <div className='container max-w-7xl mx-auto my-auto pt-28 px-[70px]'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-white font-bold text-7xl title'>Are you starving?</h2>
                        <p className="my-4 text-gray-700 text-4xl max-w-lg font-bold">Within a few clicks, find meals that are accessible near you</p>

                        <div className='bg-white pb-4 mt-14 mb-20 px-4 rounded-lg w-[540px]'>
                            <div className='flex items-center py-4'>
                                {dataTabs.map(item => (
                                    <Button onClick={() => {
                                        navigate(item.id, item.tabTitle)
                                    }} LeftIcon={<item.icon />} key={item.id} className={`flex items-center text-slate-700 font-bold rounded-md px-3 py-2.5 mr-3 ${active === item.id ? "is-active" : ""}`} children={item.tabTitle} />
                                ))}
                            </div>
                            <div className='flex items-center justify-between pt-4 border-t'>
                                <SearchInput src={location} className="border outline-4 w-[360px] rounded-md" placeholder="Enter your Address" />
                                <Button className="flex items-center text-white font-bold text-base bg-orange-500 py-2 px-6 w-[142px] rounded-md hover:bg-orange-600 justify-center" children="Find Food" />
                            </div>
                        </div>
                    </div>
                    <div className='-mb-6'>
                        <img className='hover:-translate-y-10 transition-all' src={overLayHeader} alt='' width="540px" height="540px" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
