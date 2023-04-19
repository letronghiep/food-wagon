import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Profile from '../routes/Profile'
import Order from '../routes/Order'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { userSelector } from '../store/user/userSelector'
import Button from '../components/Button'
import { Edit, NotificationAdd, NotificationsNone, ReceiptLong } from '@mui/icons-material'
import Notification from '../routes/Notification'

function Account() {
    const currentUser = useSelector(userSelector)
    const { displayName, email } = currentUser

    return (
        <div className='container max-w-7xl px-[70px] mt-[72px] mx-auto mb-[100px] flex'>
            <div className='mr-6 mt-24 flex-1' >
                <div className='flex  justify-center '>
                    <Avatar src="" sx={{ width: 90, height: 90 }}>{displayName && displayName[0]}</Avatar>
                    <div className='ml-6'>
                        <p className='font-semibold text-2xl'>{displayName}</p>
                        <p className='text-md'>{email}</p>
                        <Link to='/account' className='flex items-center justify-center px-2 py-1 w-[120px] border border-gray-300 rounded-md mt-1 hover:bg-gray-200'>
                            <Edit sx={{ fontSize: 20, color: 'gray' }} />
                            <p className='ml-1 text-gray-500'>Chỉnh sửa</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <Link to='order' className='w-full  mt-4 p-3 text-lg text-gray-600 flex items-center justify-start ml-6 hover:bg-slate-200 rounded-md'>
                        <ReceiptLong />
                        <p className='ml-3'>Đơn hàng của tôi</p>
                    </Link>
                    <Link to='notification' className='w-full   p-3 text-lg text-gray-600 flex items-center justify-start ml-6 hover:bg-slate-200 rounded-md'>
                        <NotificationsNone />

                        <p className='ml-3'>Thông báo của tôi</p>
                    </Link>

                </div>
            </div>
            <div className='flex-[2]'>
                <Routes>
                    <Route index element={<Profile />} />
                    <Route path='/order' element={<Order />} />
                    <Route path='/notification' element={<Notification />} />
                </Routes>

            </div>

        </div>
    )
}

export default Account
