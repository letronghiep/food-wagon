import { NotificationsOff } from '@mui/icons-material'
import React from 'react'

function Notification() {
    return (
        <div>
            <div className='w-full'>
                <h2 className='font-bold uppercase text-2xl text-gray-600 pt-8 pb-5 w-full'>Thông báo của tôi</h2>
                <div className='border'>
                    <div className='flex items-center justify-center flex-col py-20'>
                        <NotificationsOff sx={{ fontSize: 80 }} />
                        <p className='text-gray-600 font-semibold text-3xl capitalize'>No Notification</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
