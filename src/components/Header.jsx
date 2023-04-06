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
            element: <div className='flex items-center justify-between mt-10'>
                <SearchInput icon={location} className="border w-[75%] rounded-md" placeholder="Enter Your Address..." />
                <Button className="flex items-center text-white font-bold text-sm bg-orange-500 py-2 px-4 rounded-lg hover:bg-orange-600" LeftIcon={SearchRoundedIcon} children="Find Food" />
            </div>,
        },
        {
            id: 2,
            tabTitle: "Pick Up",
            tabClass: "myCustomClass",
            tabClicked: false,
            icon: LocalMallIcon,
        }
    ])
    const navigate = (id) => {
        setActive(id)
    }
    return (
        <div className='header-group overflow-hidden'>
            <div className='container max-w-7xl mx-auto my-auto pt-28'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-white font-bold text-6xl title'>Are you starving?</h2>
                        <p className="my-4 text-slate-700">Within a few clicks, find meals that are accessible near you</p>

                        <div className='bg-white py-4 px-3 rounded-lg w-[600px]'>
                            <div className='flex items-center' >
                                {dataTabs.map(item => (
                                    <Button onClick={() => {
                                        navigate(item.id)
                                    }} LeftIcon={item.icon} key={item.id} className={`flex items-center text-slate-700 font-bold rounded-md px-3 py-2.5 bg-slate-100 mr-3 ${active === item.id ? "is-active" : ""}`} children={item.tabTitle} />
                                ))}
                            </div>
                            <div className='flex items-center justify-between mt-10'>
                                <SearchInput icon={location} className="border w-[75%] rounded-md" placeholder="Enter Your Address..." />
                                <Button className="flex items-center text-white font-bold text-sm bg-orange-500 py-2 px-4 rounded-lg hover:bg-orange-600" LeftIcon={SearchRoundedIcon} children="Find Food" />
                            </div>
                        </div>
                    </div>
                    <div className='-mb-10'>
                        <img className='hover:-translate-y-14 transition-all' src={overLayHeader} alt='' width="520px" height="520px" />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
