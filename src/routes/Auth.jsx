import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../auth/LoginForm'
import RegisterForm from '../auth/RegisterForm'
import images from '~/assets/image'
import ResetPassword from '../auth/ResetPassword'
function Auth() {
    const { logo } = images
    return (
        <div className='h-screen flex items-center' style={{ backgroundImage: `url("https://i.ibb.co/Kr54qBd/cta-one-bg.png")`, backgroundPosition: 'top center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='flex items-center justify-between container max-w-7xl px-[70px] mt-[72px] mx-auto h-full' >
                <div className='flex flex-col items-center justify-center'>
                    <img src={logo} alt="" className='w-[180px] object-cover' />
                    <p className='flex text-5xl font-bold mt-6'>
                        <span className='text-orange-600'>food</span>
                        <span className='text-orange-400 ml-2'>WaGon</span>
                    </p>
                </div>
                <Routes>
                    <Route index element={<LoginForm />} />
                    <Route path='/register' element={<RegisterForm />} />
                    <Route path='/reset' element={<ResetPassword />} />
                </Routes>

            </div>

        </div>
    )
}

export default Auth
